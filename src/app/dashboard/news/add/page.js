"use client";

import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Upload, Image } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [fileList, setFileList] = useState([]);

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
    // Handle images without server upload
    const processedList = newFileList.map((file) => ({
      uid: file.uid,
      name: file.name,
      status: file.status,
      url: file.url || URL.createObjectURL(file.originFileObj),
      originFileObj: file.originFileObj,
    }));
    setFileList(processedList);
  };

  const handleSubmit = () => {
    const content = editorState.getCurrentContent().getPlainText();
    console.log("Title:", title);
    console.log("Images:", fileList);
    console.log("Content:", content);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <section className="p-4">
        <Link className="d-flex" href={"/dashboard/news"}><h6 className="d-flex  font-bold"><FaArrowLeft /> <span className="ms-2">Revenir</span></h6></Link>
      <center>
        <h1 className="text-3xl font-bold">Ajouter un nouvel article</h1>
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
        <label className="block text-lg font-medium mb-2">Images</label>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length < 5 && uploadButton}
        </Upload>
      </div>

      <div className="mt-6">
        <label className="block text-lg font-medium mb-2">Contenu</label>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName border border-gray-300 p-2 rounded"
          editorClassName="editorClassName"
          onEditorStateChange={setEditorState}
        />
      </div>

      <div className="mt-6">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Ajouter
        </button>
      </div>
    </section>
  );
};

export default AddNews;
