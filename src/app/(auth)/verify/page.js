'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Mail, Key, Loader2, CheckCircle } from 'lucide-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../login/Login.css';

export default function Verify() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    // Get email from localStorage
    const storedEmail = localStorage.getItem('emailVerification');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      // If no email in localStorage, redirect to register
      toast.error('Aucun email trouvé pour la vérification');
      setTimeout(() => {
        router.push('/register');
      }, 2000);
    }
  }, [router]);

  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleVerify = async (event) => {
    event.preventDefault();
    
    if (!verificationCode) {
      toast.error('Veuillez entrer le code de vérification');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://api-vevrjfohcq-uc.a.run.app/v1/auth/verify_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          code: verificationCode,
        })
      });
      
      
      const data = await response.json();
      if (data.status) {
        toast.success('Email vérifié avec succès !');
        localStorage.removeItem('emailVerification');
        setIsVerified(true);
      } else {
        toast.error(data.message || 'Code de vérification invalide');
      }
    } catch (error) {
      console.error(error);
      toast.error('Erreur lors de la vérification');
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (!email) {
      toast.error('Aucun email trouvé');
      return;
    }
    setResending(true);
    try {
      const response = await fetch('https://api-vevrjfohcq-uc.a.run.app/v1/auth/resend_verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        })
      });
      const data = await response.json();
      if (data.status) {
        toast.success('Code de vérification renvoyé avec succès !');
        setCooldown(30); // Start 30s cooldown
      } else {
        toast.error(data.message || 'Erreur lors de l\'envoi du code');
      }
    } catch (error) {
      console.error(error);
      toast.error('Erreur lors de l\'envoi du code');
    } finally {
      setResending(false);
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
            <img className="mt-2" src="https://firebasestorage.googleapis.com/v0/b/valid-bab-rayan.firebasestorage.app/o/Logo.png?alt=media&token=1d4af563-f0f7-466b-9184-77d005204d7a" alt="Logo" />
          </h2>

          <div className="feature-item">
            ✉️ Vérifiez votre adresse email
          </div>
          <div className="feature-item">
            🔐 Entrez le code reçu par email
          </div>
          <div className="feature-item">
            ✅ Accédez à votre compte
          </div>
        </div>

        {/* Section formulaire */}
        <div className="login-form-section">
          {!isVerified ? (
            <>
              <h1 className="login-title">Vérification Email ✉️</h1>

              {email && (
                <p className="text-center mb-4 text-gray-600">
                  Un code de vérification a été envoyé à <strong>{email}</strong>
                </p>
              )}

              <form onSubmit={handleVerify}>    

                <div className="form-group">
                  <Key className="input-icon" size={20} />
                  <input 
                    type="text" 
                    className="form-input" 
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    placeholder="Code de vérification" 
                    required 
                    maxLength={6}
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
                      Vérification en cours...
                    </>
                  ) : (
                    'Vérifier'
                  )}
                </button>

                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={handleResendCode}
                    disabled={resending || cooldown > 0}
                    className={`font-semibold bg-transparent border-none ${resending || cooldown > 0 ? 'text-gray-400 cursor-default hover:no-underline' : 'text-[#cc2229] cursor-pointer hover:underline'}`}
                  >
                    {resending ? (
                      <>
                        <Loader2 className="animate-spin inline mr-2" size={16} />
                        Envoi en cours...
                      </>
                    ) : cooldown > 0 ? (
                      <>Renvoyer le code ({cooldown}s)</>
                    ) : (
                      'Renvoyer le code'
                    )}
                  </button>
                </div>
                {cooldown > 0 && (
                  <div className="text-sm text-gray-500 mt-2">Vous pourrez renvoyer le code dans {cooldown} seconde{cooldown !== 1 ? 's' : ''}.</div>
                )}

                <p className="text-center mt-4">
                  Vous avez déjà vérifié votre compte ?{' '}
                  <Link href="/login" className="auth_btn">
                    <u>Se connecter</u>
                  </Link>
                </p>
              </form>
            </>
          ) : (
            <>
              <h1 className="login-title">Email Vérifié ✅</h1>

              <div className="flex flex-col items-center justify-center py-8">
                <CheckCircle className="text-green-500 mb-4" size={64} />
                
                <p className="text-center text-gray-700 text-lg mb-2 font-semibold">
                  Félicitations ! Votre email a été vérifié avec succès.
                </p>
                
                <p className="text-center text-gray-700 mb-6">
                  Votre compte nécessite une confirmation de l'administrateur avant de pouvoir accéder au tableau de bord.
                </p>
                
                <div className="mt-8">
                  <Link href="/login" className="auth_btn text-lg">
                    <u>Retour à la connexion</u>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

