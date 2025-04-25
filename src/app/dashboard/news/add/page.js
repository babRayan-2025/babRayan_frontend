"use client";

import React, { useState } from "react";
import { Upload, message } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Draft.js imports
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const AddNews = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [shortContentState, setShortContentState] = useState(EditorState.createEmpty());
    const [contentState, setContentState] = useState(EditorState.createEmpty());
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        const previewWindow = window.open(file.url || file.preview);
        previewWindow?.document.write(`<img src="${file.url || file.preview}" />`);
    };

    const handleChange = ({ fileList: newFileList }) => {
        // Only allow one image
        if (newFileList.length > 1) {
            newFileList = [newFileList[newFileList.length - 1]];
        }

        // Handle images without server upload
        const processedList = newFileList.map((file) => ({
            uid: file.uid,
            name: file.name,
            status: file.status,
            url: file.url || (file.originFileObj ? URL.createObjectURL(file.originFileObj) : undefined),
            originFileObj: file.originFileObj,
        }));
        setFileList(processedList);
    };

    const handleSubmit = async () => {
        try {
            if (!title.trim()) {
                toast.error("Veuillez ajouter un titre");
                return;
            }

            // Convert Draft.js states to HTML
            const shortContent = draftToHtml(convertToRaw(shortContentState.getCurrentContent()));
            const content = draftToHtml(convertToRaw(contentState.getCurrentContent()));

            if (shortContent === "<p></p>") {
                toast.error("Veuillez ajouter une description courte");
                return;
            }

            if (content === "<p></p>") {
                toast.error("Veuillez ajouter du contenu");
                return;
            }

            if (fileList.length === 0) {
                toast.error("Veuillez ajouter une image");
                return;
            }

            setLoading(true);

            // Create form data
            const formData = new FormData();
            formData.append("title", title);
            formData.append("shortContent", shortContent);
            formData.append("content", content);
            formData.append("likes", "0");

            // Add image file
            if (fileList[0].originFileObj) {
                formData.append("file", fileList[0].originFileObj);
            }
            
            // Log FormData contents properly
            console.log("FormData contents:");
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value instanceof File ? `File: ${value.name}, size: ${value.size} bytes` : value}`);
            }
            
            // Send to API
            const response = await fetch("https://api-mmcansh33q-uc.a.run.app/v1/news", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Article ajouté avec succès");
                setTimeout(() => {
                    router.push("/dashboard/news");
                }, 2000);
            } else {
                toast.error(data.message || "Erreur lors de l'ajout de l'article");
            }
        } catch (error) {
            console.error("Error submitting news:", error);
            toast.error("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setLoading(false);
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    
    // Editor toolbar configuration
    const editorToolbar = {
        options: ['inline', 'blockType', 'list', 'textAlign', 'colorPicker', 'link', 'emoji', 'history'],
        inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough'],
        },
        blockType: {
            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
        },
        list: {
            options: ['unordered', 'ordered'],
        },
    };

    return (
        <section className="p-4">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div>
                <h6 className="flex items-center font-bold" >
                    <FaArrowLeft />
                    <span className="ms-2 cursor-pointer hover:text-grey-500" onClick={() => router.push("/dashboard/news")}>Revenir</span>
                </h6>
            </div>
            <center className="mt-3">
                <h1 style={{ color: "#F77F00" }} className="text-3xl font-bold">Ajouter un nouvel article</h1>
            </center>
            <div className="mt-6">
                <label className="block text-lg font-medium mb-2">Titre</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Entrez le titre"
                    className="border border-gray-300 p-2 w-full rounded"
                />
            </div>

            <div className="mt-6">
                <label className="block text-lg font-medium mb-2">Image (1 seule image requise)</label>
                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    beforeUpload={() => false} // Prevent auto upload
                >
                    {fileList.length < 1 && uploadButton}
                </Upload>
            </div>

            <div className="mt-6">
                <label className="block text-lg font-medium mb-2">Description courte</label>
                <div className="border rounded overflow-hidden">
                    <Editor
                        editorState={shortContentState}
                        onEditorStateChange={setShortContentState}
                        toolbar={editorToolbar}
                        editorClassName="px-3 min-h-[200px]"
                        placeholder="Entrez une brève description (visible dans les aperçus)"
                        wrapperClassName="editor-wrapper"
                        stripPastedStyles={true}
                    />
                </div>
            </div>

            <div className="mt-6">
                <label className="block text-lg font-medium mb-2">Contenu détaillé</label>
                <div className="border rounded overflow-hidden">
                    <Editor
                        editorState={contentState}
                        onEditorStateChange={setContentState}
                        toolbar={editorToolbar}
                        editorClassName="px-3 min-h-[400px]"
                        wrapperClassName="editor-wrapper"
                        stripPastedStyles={true}
                    />
                </div>
            </div>

            <div className="mt-6 mb-8">
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded flex items-center justify-center`}
                >
                    {loading ? (
                        <>
                            <LoadingOutlined style={{ marginRight: '8px' }} />
                            Ajout en cours...
                        </>
                    ) : (
                        'Ajouter'
                    )}
                </button>
            </div>
        </section>
    );
};

export default AddNews;