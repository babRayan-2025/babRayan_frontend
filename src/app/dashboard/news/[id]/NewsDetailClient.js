"use client"

import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Upload } from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";

// Draft.js imports
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function NewsDetailClient({ newsId }) {
    const router = useRouter();
    const [newsData, setNewsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState("");
    const [shortContentState, setShortContentState] = useState(EditorState.createEmpty());
    const [contentState, setContentState] = useState(EditorState.createEmpty());
    const [fileList, setFileList] = useState([]);
    const [savingChanges, setSavingChanges] = useState(false);

    useEffect(() => {
        if (newsId) {
            fetchNewsById(newsId);
        }
    }, [newsId]);

    // Convert HTML string to Draft.js EditorState
    const htmlToEditorState = (html) => {
        if (!html) return EditorState.createEmpty();
        try {
            const blocksFromHtml = htmlToDraft(html);
            const { contentBlocks, entityMap } = blocksFromHtml;
            const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
            return EditorState.createWithContent(contentState);
        } catch (error) {
            console.error("Error converting HTML to editor state:", error);
            return EditorState.createEmpty();
        }
    };

    const fetchNewsById = async (id) => {
        try {
            setLoading(true);
            const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/news/${id}`);
            const result = await response.json();

            if (result.status && result.data) {
                setNewsData(result.data);
                setTitle(result.data.title || "");
                
                // Convert HTML content to Draft.js EditorState
                setShortContentState(htmlToEditorState(result.data.shortContent || ""));
                setContentState(htmlToEditorState(result.data.content || ""));
                
                // Set image if available
                if (result.data.pic) {
                    setFileList([{
                        uid: '-1',
                        name: 'Current Image',
                        status: 'done',
                        url: result.data.pic
                    }]);
                } else {
                    setFileList([]);
                }
            } else {
                toast.error("Erreur lors du chargement de l'actualité");
            }
        } catch (error) {
            console.error("Error fetching news:", error);
            toast.error("Erreur lors du chargement de l'actualité");
        } finally {
            setLoading(false);
        }
    };
    
    const formatDate = (timestamp) => {
        if (!timestamp) return 'Date inconnue';
        
        // Convert Firestore timestamp to JS Date
        const date = new Date(timestamp._seconds * 1000);
        return date.toLocaleDateString('fr-FR');
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

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

    const saveChanges = async () => {
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

            setSavingChanges(true);

            // Create form data
            const formData = new FormData();
            formData.append("title", title);
            formData.append("shortContent", shortContent);
            formData.append("content", content);
            formData.append("likes", newsData.likes || "0");

            // Add image file if it's a new upload
            if (fileList.length > 0 && fileList[0].originFileObj) {
                formData.append("file", fileList[0].originFileObj);
            } else if (fileList.length === 0) {
                // If no image is selected, tell the API to remove the image
                formData.append("remove_image", "true");
            }
            
            // Send to API for update
            const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/news/${newsId}`, {
                method: "PUT",
                body: formData,
            });

            const data = await response.json();

            if (data.status) {
                toast.success("Article mis à jour avec succès");
                setEditMode(false);
                // Refresh the news data
                fetchNewsById(newsId);
            } else {
                toast.error(data.message || "Erreur lors de la mise à jour de l'article");
            }
        } catch (error) {
            console.error("Error updating news:", error);
            toast.error("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setSavingChanges(false);
        }
    };

    const uploadButton = (
        <div>
            {savingChanges ? <LoadingOutlined /> : <PlusOutlined />}
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

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!newsData) {
        return (
            <div className="p-4">
                <div>
                    <h6 className="flex items-center font-bold">
                        <FaArrowLeft />
                        <span className="ms-2 cursor-pointer hover:text-grey-500" onClick={() => router.push("/dashboard/news")}>Revenir</span>
                    </h6>
                </div>
                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-bold text-red-500">Actualité non trouvée</h2>
                    <p className="mt-2">L'actualité que vous recherchez n'existe pas ou a été supprimée.</p>
                </div>
            </div>
        );
    }

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
                <h6 className="flex items-center font-bold">
                    <FaArrowLeft />
                    <span className="ms-2 cursor-pointer hover:text-grey-500" onClick={() => router.push("/dashboard/news")}>Revenir</span>
                </h6>
            </div>
            
            <div className="mt-6">
                {editMode ? (
                    <div className="mb-6">
                        <label className="block text-lg font-medium mb-2">Titre</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Entrez le titre"
                            className="border border-gray-300 p-2 w-full rounded"
                        />
                    </div>
                ) : (
                    <h1 style={{ color: "#F77F00" }} className="text-3xl font-bold text-center mb-8">{newsData.title}</h1>
                )}
                
                <div className="flex justify-between items-start mb-6">
                    <div className="w-1/2">
                        <p className="text-lg mb-2">
                            <span className="font-medium">Date de publication:</span>
                            <strong>{formatDate(newsData.createdAt)}</strong>
                        </p>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        {editMode ? (
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => setEditMode(false)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                >
                                    Annuler
                                </button>
                                <button 
                                    onClick={saveChanges}
                                    disabled={savingChanges}
                                    className={`${savingChanges ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'} text-white px-4 py-2 rounded flex items-center justify-center`}
                                >
                                    {savingChanges ? (
                                        <>
                                            <LoadingOutlined style={{ marginRight: '8px' }} />
                                            Enregistrement...
                                        </>
                                    ) : (
                                        'Enregistrer'
                                    )}
                                </button>
                            </div>
                        ) : (
                            <button 
                                onClick={toggleEditMode}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Modifier
                            </button>
                        )}
                    </div>
                </div>
                
                {/* Image Upload/Preview Section */}
                <div className="mb-6">
                    {editMode ? (
                        <div>
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
                    ) : (
                        fileList.length > 0 && (
                            <div className="mb-6 text-center">
                                <img
                                    src={fileList[0].url}
                                    alt={newsData.title}
                                    className="mx-auto max-h-[400px] rounded shadow-md"
                                />
                            </div>
                        )
                    )}
                </div>

                {/* Short Content Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Description courte:</h2>
                    {editMode ? (
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
                    ) : (
                        <div 
                            className="border border-gray-200 p-4 rounded bg-gray-50"
                            dangerouslySetInnerHTML={{ __html: newsData.shortContent }}
                        />
                    )}
                </div>
                
                {/* Content Editor/Viewer Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Contenu détaillé:</h2>
                    {editMode ? (
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
                    ) : (
                        <div 
                            className="border border-gray-300 p-4 rounded-md"
                            dangerouslySetInnerHTML={{ __html: newsData.content }}
                        />
                    )}
                </div>
            </div>
        </section>
    );
} 