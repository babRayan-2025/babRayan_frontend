'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, Loader2, Phone } from 'lucide-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../login/Login.css';

export default function Register() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://api-mmcansh33q-uc.a.run.app/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: firstName,
          lastName: lastName,
          email: email,
          password: password,
        })
      });
      const data = await response.json();
      if (data.status) {
        toast.success('Inscription réussie !');
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        toast.error(data.message || 'Une erreur est survenue lors de l\'inscription.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Erreur d\'inscription');
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
      />
      {/* Animations d'arrière-plan */}
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
          <h1 className="login-title">Inscription 🔐</h1>

          <form onSubmit={handleRegister}>
            <div className="form-group">
              <User className="input-icon" size={20} />
              <input 
                type="text" 
                className="form-input" 
                onChange={(e) => setFirstName(e.target.value)} 
                placeholder="Prénom" 
                required 
              />
            </div>

            <div className="form-group">
              <User className="input-icon" size={20} />
              <input 
                type="text" 
                className="form-input" 
                onChange={(e) => setLastName(e.target.value)} 
                placeholder="Nom" 
                required 
              />
            </div>

            <div className="form-group">
              <Mail className="input-icon" size={20} />
              <input 
                type="email" 
                className="form-input" 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Adresse e-mail" 
                required 
              />
            </div>

            <div className="form-group">
              <Lock className="input-icon" size={20} />
              <input 
                type="password" 
                className="form-input" 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Mot de passe" 
                required 
              />
            </div>

            <div className="form-group">
              <Lock className="input-icon" size={20} />
              <input 
                type="password" 
                className="form-input" 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                placeholder="Confirmer le mot de passe" 
                required 
              />
            </div>

            <button 
              type="submit" 
              className="login-button bg-[#cc2229] hover:bg-[#cc2228b6] flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Inscription en cours...
                </>
              ) : (
                'S\'inscrire'
              )}
            </button>

            <p className="text-center mt-4">
              Vous avez déjà un compte ?{' '}
              <Link href="/login" className="auth_btn">
                <u>Se connecter</u>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}