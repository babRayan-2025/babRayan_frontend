"use client";
import React, { useEffect, useState } from "react";
import { Upload, Button, Input, Form, message } from "antd";
import { EditOutlined, SaveOutlined, UploadOutlined } from "@ant-design/icons";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import "./settings.css";

export default function SettingsPage() {
  const [userData, setUserData] = useState([
    {
      name: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Main St, Anytown, USA",
      imageUrl: "https://via.placeholder.com/150",
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    age: "",
    tel: "",
    email: "",
    pic: ""
  });

  const userId = localStorage.getItem("userID");
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  // Fetch user data on mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5001/babrayanlocal/us-central1/api/users/${userId}`);
        const data = await response.json();
        setUserData(data.data);
        setFormData({
          name: data.data.name,
          lastName: data.data.lastName,
          age: data.data.age || "",
          tel: data.data.tel || "",
          email: data.data.email,
          pic: data.data.pic || ""
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5001/babrayanlocal/us-central1/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const updatedData = await response.json();
        setUserData(updatedData.data);
        setIsEditing(false);
        message.success("Profile updated successfully!");
      } else {
        console.error("Failed to save changes");
      }
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  // const handleImageUpload = (info) => {
  //     if (info.file.status === "done") {
  //         // Use a mock URL for demonstration purposes
  //         const newPic = URL.createObjectURL(info.file.originFileObj);
  //         setFormData({ ...formData, pic: newPic });
  //         message.success("Image uploaded successfully!");
  //     }
  // };

  if (!userData) return <div>Loading...</div>;


  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get the uploaded file URL
      const newImageUrl = URL.createObjectURL(info.file.originFileObj);
      setImageUrl(newImageUrl);
      setFormData({ ...formData, pic: newImageUrl });
      setLoading(false);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <div className="settings-container">
      <h1 style={{ color: '#003049' }}>Modifier le profil</h1>
      <div className="profile-header">
        {!isEditing ? (
          <>
            <div className="profile-card">
              <div className="flex justify-center">
                <img src={userData.pic || "https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/dashboard%2Favatar.png?alt=media&token=eb86123a-2582-4770-80cb-c1c63352dbd4"} alt="Profile" className="profile-pic" />
              </div>              <h2 className="blue mt-8">{userData.name} {userData.lastName}</h2>
              <p className="blue">Email: <b>{userData.email || "N/A"}</b></p>
              <p className="orange-text"><i>Age:</i> <b>{userData.age || "N/A"}</b></p>
              <p className="red mb-8"><i>Phone:</i> <b>{userData.tel || "N/A"}</b></p>
              <Button className="blue_color" icon={<EditOutlined />} onClick={handleEditToggle}>
                Edit Info
              </Button>
            </div>
          </>
        ) : (
          <Form layout="vertical" className="edit-form" onFinish={handleSaveChanges} >
            <Form.Item label="Profile Picture">
              <Upload name="avatar" listType="picture-card" className="avatar-uploader" showUploadList={false} action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" beforeUpload={beforeUpload} onChange={handleChange} >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%", height: "100px", objectFit: "cover", borderRadius: "50%", }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
            <Form.Item label="Name">
              <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" />
            </Form.Item>
            <Form.Item label="Last Name">
              <Input name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter your last name" />
            </Form.Item>
            <Form.Item label="Age">
              <Input name="age" type="number" value={formData.age} onChange={handleInputChange} placeholder="Enter your age" />
            </Form.Item>
            <Form.Item label="Phone">
              <Input name="tel" value={formData.tel} onChange={handleInputChange} placeholder="Enter your phone number" />
            </Form.Item>
            <Form.Item label="Email">
              <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" />
            </Form.Item>
            <div className="form-buttons">
              <Button type="primary" icon={<SaveOutlined />} htmlType="submit" className="save-button" >
                Save Changes
              </Button>
              <Button danger onClick={handleEditToggle} className="cancel-button" >
                Cancel
              </Button>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
}