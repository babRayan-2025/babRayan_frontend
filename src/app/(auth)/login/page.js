'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { notification } from 'antd';
import { Mail, Lock } from 'lucide-react';
import './Login.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); const [error, setError] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (user && user.userId) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = async (event) => {
    event.preventDefault();
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
          window.location.href = '/';
        }, 2000);
      } else {
        toast.error('Une erreur est survenue lors du paiement.');
        console.log(data);

      }
    } catch (error) {
      console.error(error);
    }
  }


  const handleForgotPassword = async (event) => {
    event.preventDefault();
    console.log("password reset");

  }
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

            <button type="submit" className="login-button bg-[#cc2229] hover:bg-[#cc2228b6]">
              Se connecter
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
    </div>
  );
}