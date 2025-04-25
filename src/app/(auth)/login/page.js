'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { notification, Modal, Form, Input, Button } from 'antd';
import { Mail, Lock, Loader2, Key } from 'lucide-react';
import './Login.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
};


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [forgotPasswordModalVisible, setForgotPasswordModalVisible] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [forgotPasswordForm] = Form.useForm();

  useEffect(() => {
    const userID = getLocalStorage("userID");
    if (userID) {
      router.push("/dashboard"); // ✅ Prevent full reload
    }
  }, [router]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://api-mmcansh33q-uc.a.run.app/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      });
      const data = await response.json();
      if (data.status) {
        localStorage.setItem('userID', data.data.user.id);
        localStorage.setItem('userName', data.data.user.name);
        toast.success('Connexion réussie !');

        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        toast.error(data.message || 'Une erreur est survenue lors du login.');
        console.log(data);
      }
    } catch (error) {
      console.error(error);
      toast.error('Erreur de connexion');
    } finally {
      setLoading(false);
    }
  }

  const handleForgotPassword = async () => {
    setForgotPasswordModalVisible(true);
  }

  const sendResetCode = async () => {
    if (!recoveryEmail) {
      toast.error('Veuillez entrer votre adresse email');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://api-mmcansh33q-uc.a.run.app/v1/users/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: recoveryEmail
        })
      });

      const data = await response.json();
      if (data.status) {
        setOtpSent(true);
        toast.success('Un code de réinitialisation a été envoyé à votre adresse e-mail');
      } else {
        toast.error(data.message || 'Échec de l\'envoi du code de réinitialisation');
      }
    } catch (error) {
      console.error('Error sending reset code:', error);
      toast.error('Une erreur s\'est produite lors de l\'envoi du code de réinitialisation');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (values) => {
    setLoading(true);
    try {
      const response = await fetch('https://api-mmcansh33q-uc.a.run.app/v1/users/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: recoveryEmail,
          resetCode: values.resetCode,
          newPassword: values.newPassword
        })
      });

      const data = await response.json();
      if (data.status) {
        toast.success('Mot de passe réinitialisé avec succès !');
        setForgotPasswordModalVisible(false);
        setOtpSent(false);
        forgotPasswordForm.resetFields();
      } else {
        toast.error(data.message || 'Échec de la vérification du code de réinitialisation');
      }
    } catch (error) {
      console.error('Error verifying reset code:', error);
      toast.error('Une erreur s\'est produite lors de la vérification du code de réinitialisation');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
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
      />      {/* Animations d'arrière-plan */}
      <div className="login-background">
        <div className="animated-circle circle-1"></div>
        <div className="animated-circle circle-2"></div>
        <div className="animated-circle circle-3"></div>
      </div>

      <div className="login-card">
        {/* Section features */}
        <div className="login-features">
          <h2 className="mb-5 text-center flex flex-col items-center">
            Bienvenue sur <br />
            <img className="mt-2" src="https://firebasestorage.googleapis.com/v0/b/bab-rayan-b04a0.firebasestorage.app/o/Logo.png?alt=media&token=e5f5173e-6170-4f2f-9037-955c7c199481" alt="Logo" />
          </h2>

          <div className="feature-item">
            🎁 Faites un don pour aider un enfant
          </div>
          <div className="feature-item">
            👋 Parrainez un enfant dans le besoin
          </div>
          <div className="feature-item">
            ❤️ Devenez bénévole
          </div>
        </div>

        {/* Section formulaire */}
        <div className="login-form-section">

          <h1 className="login-title">Connexion 🔐</h1>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <Mail className="input-icon" size={20} />
              <input type="email" className="form-input" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" required />
            </div>

            <div className="form-group">
              <Lock className="input-icon" size={20} />
              <input type="password" className="form-input" onChange={(e) => { setPassword(e.target.value) }} placeholder="Mot de passe" required />
            </div>

            <div className="form-group text-end">
              <u><span style={{ cursor: 'pointer' }} onClick={handleForgotPassword}>Mot de passe oublié ?</span></u>
            </div>

            <button 
              type="submit" 
              className="login-button bg-[#cc2229] hover:bg-[#cc2228b6] flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Connexion en cours...
                </>
              ) : (
                'Se connecter'
              )}
            </button>

            {/* <p className="text-center mt-4">
              Pas encore de compte ?{' '}
              <a href="/register" className="auth_btn">
                <u>S'inscrire</u>
              </a>
            </p> */}
          </form>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <Modal
        title="Mot de passe oublié"
        open={forgotPasswordModalVisible}
        onCancel={() => {
          setForgotPasswordModalVisible(false);
          setOtpSent(false);
          setRecoveryEmail('');
          forgotPasswordForm.resetFields();
        }}
        footer={null}
        centered
        destroyOnClose={true}
      >
        {!otpSent ? (
          <div>
            <p className="mb-4">Veuillez entrer votre adresse email pour recevoir un code de réinitialisation</p>
            <div className="form-group">
              <Mail className="input-icon" size={20} />
              <input 
                type="email" 
                className="form-input" 
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)} 
                placeholder="Email" 
                required 
              />
            </div>
            <Button
              type="primary"
              loading={loading}
              onClick={sendResetCode}
              block
              style={{ backgroundColor: '#cc2229', borderColor: '#cc2229' }}
            >
              Envoyer le code
            </Button>
          </div>
        ) : (
          <Form
            form={forgotPasswordForm}
            layout="vertical"
            onFinish={handleResetPassword}
          >
            <p className="mb-4">Un code de réinitialisation a été envoyé à <strong>{recoveryEmail}</strong>. Veuillez le saisir ci-dessous avec votre nouveau mot de passe.</p>
            
            <Form.Item
              label="Code de réinitialisation"
              name="resetCode"
              rules={[
                { required: true, message: 'Veuillez entrer le code de réinitialisation' }
              ]}
            >
              <Input
                prefix={<Key size={16} />}
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
                prefix={<Lock size={16} />}
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
                prefix={<Lock size={16} />}
                placeholder="Confirmer le nouveau mot de passe"
                size="large"
              />
            </Form.Item>

            <Form.Item className="mb-0 mt-4">
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                style={{ backgroundColor: '#cc2229', borderColor: '#cc2229' }}
              >
                Réinitialiser le mot de passe
              </Button>
            </Form.Item>

            <div className="mt-4 text-center">
              <Button
                type="link"
                onClick={sendResetCode}
                disabled={loading}
              >
                Renvoyer le code de réinitialisation
              </Button>
            </div>
          </Form>
        )}
      </Modal>
    </div>
  );
}