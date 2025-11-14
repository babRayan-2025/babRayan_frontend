"use client";
import React, { useEffect, useState } from "react";
import { Button, Input, Form, Card, Spin, Typography, Modal } from "antd";
import { LockOutlined, MailOutlined, SaveOutlined, KeyOutlined } from "@ant-design/icons";
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
  const [forgotPasswordModalVisible, setForgotPasswordModalVisible] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [emailForm] = Form.useForm();
  const [passwordForm] = Form.useForm();
  const [forgotPasswordForm] = Form.useForm();
  const token = localStorage.getItem("token");

  const userId = localStorage.getItem("userID");

  // Fetch user data on mount
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/users/${userId}`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
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
      // Clear the form instead of setting existing value
      emailForm.resetFields();
    }
  }, [emailModalVisible, userData, emailForm]);

  const handleUpdateEmail = async (values) => {
    // if the email is the same as current
    if (userData?.email === values.email) {
      toast.error("Cette adresse email est déjà utilisée");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
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
      const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword: values.currentPassword,
          password: values.password
        })
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status) {
          toast.success("Mot de passe mis à jour avec succès !");
          passwordForm.resetFields();
          setPasswordModalVisible(false);
        } else {
          toast.error(result.message || "Échec de la mise à jour du mot de passe");
        }
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Échec de la mise à jour du mot de passe");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("Une erreur s'est produite lors de la mise à jour du mot de passe");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/users/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: userData?.email
        })
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status) {
          setOtpSent(true);
          toast.success("Un code de réinitialisation a été envoyé à votre adresse e-mail");
        } else {
          toast.error(result.message || "Échec de l'envoi du code de réinitialisation");
        }
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Échec de l'envoi du code de réinitialisation");
      }
    } catch (error) {
      console.error("Error sending reset code:", error);
      toast.error("Une erreur s'est produite lors de l'envoi du code de réinitialisation");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api-vevrjfohcq-uc.a.run.app/v1/users/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: userData?.email,
          resetCode: values.otp,
          newPassword: values.newPassword
        })
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status) {
          toast.success("Mot de passe réinitialisé avec succès !");
          forgotPasswordForm.resetFields();
          setForgotPasswordModalVisible(false);
          setOtpSent(false);
        } else {
          toast.error(result.message || "Échec de la vérification du code de réinitialisation");
        }
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Échec de la vérification du code de réinitialisation");
      }
    } catch (error) {
      console.error("Error verifying reset code:", error);
      toast.error("Une erreur s'est produite lors de la vérification du code de réinitialisation");
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
    <>
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
        className="settings-toast"
      />

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
                    src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/avatar%20user.png?alt=media&token=96fd3b25-26e0-4ae8-92b6-fe1548f42685"
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

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  type="default"
                  icon={<KeyOutlined className="btn-icon" />}
                  size="large"
                  block
                  onClick={() => {
                    setForgotPasswordModalVisible(true);
                    setOtpSent(false);
                  }}
                  className="btn-update btn-secondary"
                >
                  Mot de passe oublié
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
            >
              <div className="current-email-display">
                Email actuel :
                <strong>{userData?.email}</strong>
              </div>

              <Form.Item
                label="Nouvelle adresse email"
                name="email"
                rules={[
                  { required: true, message: 'Veuillez entrer votre email' },
                  { type: 'email', message: 'Veuillez entrer une adresse email valide' }
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Nouvelle adresse email"
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

        {/* Forgot Password Modal */}
        {forgotPasswordModalVisible && (
          <Modal
            title="Mot de passe oublié"
            open={forgotPasswordModalVisible}
            onCancel={() => {
              setForgotPasswordModalVisible(false);
              setOtpSent(false);
              forgotPasswordForm.resetFields();
            }}
            footer={null}
            centered
            destroyOnClose={true}
            className="settings-modal"
          >
            {!otpSent ? (
              <div>
                <p className="mb-4">Nous allons envoyer un code de réinitialisation à l'adresse email : <strong>{userData?.email}</strong></p>
                <Button
                  type="primary"
                  icon={<MailOutlined />}
                  loading={loading}
                  size="large"
                  block
                  onClick={handleForgotPassword}
                  className="btn-update btn-primary"
                >
                  Envoyer le code
                </Button>
              </div>
            ) : (
              <Form
                form={forgotPasswordForm}
                layout="vertical"
                onFinish={handleVerifyOtp}
              >
                <p className="mb-4">Un code de réinitialisation a été envoyé à <strong>{userData?.email}</strong>. Veuillez le saisir ci-dessous avec votre nouveau mot de passe.</p>

                <Form.Item
                  label="Code de réinitialisation"
                  name="otp"
                  rules={[
                    { required: true, message: 'Veuillez entrer le code de réinitialisation' }
                  ]}
                >
                  <Input
                    prefix={<KeyOutlined />}
                    placeholder="Code de réinitialisation"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  label="Nouveau mot de passe"
                  name="newPassword"
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
                  name="confirmNewPassword"
                  dependencies={['newPassword']}
                  rules={[
                    { required: true, message: 'Veuillez confirmer votre nouveau mot de passe' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('newPassword') === value) {
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
                    Réinitialiser le mot de passe
                  </Button>
                </Form.Item>

                <div className="mt-4 text-center">
                  <Button
                    type="link"
                    onClick={handleForgotPassword}
                    disabled={loading}
                  >
                    Renvoyer le code de réinitialisation
                  </Button>
                </div>
              </Form>
            )}
          </Modal>
        )}
      </motion.div>
    </>
  );
}