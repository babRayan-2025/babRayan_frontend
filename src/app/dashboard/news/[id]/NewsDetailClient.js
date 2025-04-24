"use client"

import React, { useState, useEffect } from 'react';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewsDetailClient({ newsId }) {
    const router = useRouter();
    const [newsData, setNewsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editorState, setEditorState] = useState(null);

    useEffect(() => {
        if (newsId) {
            fetchNewsById(newsId);
        }
    }, [newsId]);

    const fetchNewsById = async (id) => {
        try {
            setLoading(true);
            const response = await fetch(`https://api-mmcansh33q-uc.a.run.app/v1/news/${id}`);
            const result = await response.json();

            if (result.status && result.data) {
                setNewsData(result.data);

                // Convert HTML content to EditorState
                if (result.data.content) {
                    const blocksFromHTML = convertFromHTML(result.data.content);
                    const contentState = ContentState.createFromBlockArray(
                        blocksFromHTML.contentBlocks,
                        blocksFromHTML.entityMap
                    );
                    setEditorState(EditorState.createWithContent(contentState));
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
                <h1 style={{ color: "#F77F00" }} className="text-3xl font-bold text-center mb-8">{newsData.title}</h1>

                <div className="flex justify-between items-start mb-6">
                    <div className="w-1/2">
                        <p className="text-lg mb-2">
                            <span className="font-medium">Date de publication:</span>
                            <strong>{formatDate(newsData.createdAt)}</strong>
                        </p>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <button
                            onClick={() => router.push(`/dashboard/news/edit/${newsId}`)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"                        >
                            Modifier
                        </button>
                    </div>
                </div>

                {newsData.pic && (
                    <div className="mb-6">
                        <div className="relative h-96 w-full">
                            <img
                                src={newsData.pic}
                                alt={newsData.title}
                                className="w-full h-full object-contain border rounded-md"
                            />
                        </div>
                    </div>
                )}

                <div className="mb-6">
                    {editorState && (
                        <div className="border border-gray-300 p-4 rounded-md">
                            <Editor
                                editorState={editorState}
                                readOnly={true}
                                toolbarHidden={true}
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
} 