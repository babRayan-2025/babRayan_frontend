"use client";
import React, { useEffect, useState } from "react";
import { Button, Input, Form, Card, Spin, Typography, Modal } from "antd";
import { LockOutlined, MailOutlined, SaveOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./settings.css";

const { Title, Text } = Typography;

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [emailModalVisible, setEmailModalVisible] = useState(false);
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [emailForm] = Form.useForm();
  const [passwordForm] = Form.useForm();

  const userId = localStorage.getItem("userID");

  // Fetch user data on mount
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api-mmcansh33q-uc.a.run.app/v1/users/${userId}`);
        const data = await response.json();
        setUserData(data.data);
        // Only set form values when the form is visible
        if (emailModalVisible) {
          emailForm.setFieldsValue({
            email: data.data.email,
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Échec du chargement des données utilisateur");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId, emailForm, emailModalVisible]);

  // Update email form values when modal becomes visible
  useEffect(() => {
    if (emailModalVisible && userData) {
      emailForm.setFieldsValue({
        email: userData.email,
      });
    }
  }, [emailModalVisible, userData, emailForm]);

  const handleUpdateEmail = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api-mmcansh33q-uc.a.run.app/v1/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: values.email })
      });

      if (response.ok) {
        const updatedData = await response.json();
        setUserData(updatedData.data);
        toast.success("Email mis à jour avec succès !");
        setEmailModalVisible(false);
      } else {
        toast.error("Échec de la mise à jour de l'email");
      }
    } catch (error) {
      console.error("Error updating email:", error);
      toast.error("Une erreur s'est produite lors de la mise à jour de l'email");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdatePassword = async (values) => {
    setLoading(true);
    try {
      // You may need to adjust this API call to include currentPassword
      const response = await fetch(`https://api-mmcansh33q-uc.a.run.app/v1/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          currentPassword: values.currentPassword,
          password: values.password 
        })
      });

      if (response.ok) {
        toast.success("Mot de passe mis à jour avec succès !");
        passwordForm.resetFields();
        setPasswordModalVisible(false);
      } else {
        toast.error("Échec de la mise à jour du mot de passe");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("Une erreur s'est produite lors de la mise à jour du mot de passe");
    } finally {
      setLoading(false);
    }
  };

  if (!userData && loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="settings-container"
    >
      <div className="top-accent"></div>
      
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <Title level={2} style={{ 
          color: '#003049', 
          marginBottom: 24, 
          fontWeight: 700,
          position: 'relative',
          display: 'inline-block',
          paddingBottom: '10px',
        }}>
          Paramètres du compte
        </Title>
      </motion.div>
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
        className="w-full max-w-lg mx-auto"
      >
        <Card 
          className="settings-card"
          bordered={false}
        >
          <div className="text-center mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3
              }}
              className="profile-pic-container"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 } 
              }}
            >
              <div className="flex justify-center">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/dashboard%2Favatar.png?alt=media&token=eb86123a-2582-4770-80cb-c1c63352dbd4" 
                  alt="Profile" 
                  className="profile-pic"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Title level={3} className="name-title">
                {userData?.name} {userData?.lastName}
              </Title>
            </motion.div>
            
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Text className="email-text">
                {userData?.email}
              </Text>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                type="primary" 
                icon={<MailOutlined className="btn-icon" />} 
                size="large" 
                block
                onClick={() => setEmailModalVisible(true)}
                className="btn-update btn-primary"
              >
                Mettre à jour l'email
              </Button>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                type="default" 
                icon={<LockOutlined className="btn-icon" />} 
                size="large" 
                block
                onClick={() => setPasswordModalVisible(true)}
                className="btn-update btn-secondary"
              >
                Mettre à jour le mot de passe
              </Button>
            </motion.div>
          </div>
        </Card>
      </motion.div>

      {/* Email Update Modal */}
      {emailModalVisible && (
        <Modal
          title="Mettre à jour l'adresse email"
          open={emailModalVisible}
          onCancel={() => setEmailModalVisible(false)}
          footer={null}
          centered
          destroyOnClose={true}
          className="settings-modal"
        >
          <Form
            form={emailForm}
            layout="vertical"
            onFinish={handleUpdateEmail}
            initialValues={{ email: userData?.email }}
          >
            <Form.Item
              label="Adresse email"
              name="email"
              rules={[
                { required: true, message: 'Veuillez entrer votre email' },
                { type: 'email', message: 'Veuillez entrer une adresse email valide' }
              ]}
            >
              <Input 
                prefix={<MailOutlined />} 
                placeholder="Adresse email"
                size="large"
              />
            </Form.Item>

            <Form.Item className="mb-0 mt-4">
              <Button
                type="primary"
                htmlType="submit"
                icon={<SaveOutlined />}
                loading={loading}
                size="large"
                block
                className="btn-update btn-primary"
              >
                Enregistrer
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}

      {/* Password Update Modal */}
      {passwordModalVisible && (
        <Modal
          title="Mettre à jour le mot de passe"
          open={passwordModalVisible}
          onCancel={() => setPasswordModalVisible(false)}
          footer={null}
          centered
          destroyOnClose={true}
          className="settings-modal"
        >
          <Form
            form={passwordForm}
            layout="vertical"
            onFinish={handleUpdatePassword}
          >
            <Form.Item
              label="Mot de passe actuel"
              name="currentPassword"
              rules={[
                { required: true, message: 'Veuillez entrer votre mot de passe actuel' }
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined />}
                placeholder="Mot de passe actuel"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Nouveau mot de passe"
              name="password"
              rules={[
                { required: true, message: 'Veuillez entrer votre nouveau mot de passe' },
                { min: 6, message: 'Le mot de passe doit comporter au moins 6 caractères' }
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined />}
                placeholder="Nouveau mot de passe"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Confirmer le nouveau mot de passe"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Veuillez confirmer votre nouveau mot de passe' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Les deux mots de passe ne correspondent pas'));
                  },
                }),
              ]}
            >
              <Input.Password 
                prefix={<LockOutlined />}
                placeholder="Confirmer le nouveau mot de passe"
                size="large"
              />
            </Form.Item>

            <Form.Item className="mb-0 mt-4">
              <Button
                type="primary"
                htmlType="submit"
                icon={<SaveOutlined />}
                loading={loading}
                size="large"
                block
                className="btn-update btn-primary"
              >
                Mettre à jour
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}

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
    </motion.div>
  );
}