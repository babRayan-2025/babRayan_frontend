"use client";

// import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { useState } from 'react';

export default function Parrainage() {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main>
      <div className="mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="p-4 text-2xl md:text-4xl font-bold text-center mb-16 relative">
        PARRAINER UN ENFANT
        <div className="w-24 md:w-48 h-2 bg-yellow-300 absolute left-1/2 transform -translate-x-1/2 mt-2"></div>
        </h1>

        {/* Main section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left side - Image */}
          <div className="relative h-[500px] overflow-hidden rounded-lg">
            <Image
              src="/Parrainer/1.jpg"
              alt="Children smiling"
              width={900}
              height={500}
              className="object-cover"
            />
          </div>

          {/* Right side - Text content */}
          <div className="space-y-4">
            <h2 className="text-6xl font-bold">
              Pourquoi parrainer <br/>
              un enfant ?
            </h2>

            <p className="text-gray-600 text-2xl">
              Trop d&apos;enfants souffrent encore... <br/> 
              Le parrainage est un moyen
              efficace pour lutter contre l&apos;abandon.
            </p>

            <p className="text-gray-600 text-2xl">
              En parrainant un enfant, vous lui donnez la chance d&apos;accéder à ses
              droits fondamentaux : Éducation, Santé, Nutrition,
              Scolarisation...
            </p>

            <p className="text-gray-600 text-2xl">
              L&apos;enfant peut ainsi grandir dans de bonnes conditions et acquérir
              des compétences pour son autonomie future.
            </p>
          </div>
        </div>

        {/* Contribution section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="w-48 p-6 mb-12">
          <h3 className="text-xl font-semibold mb-4">
            Votre contribution mensuelle permettra de donner à un enfant :
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>- Un foyer aimant</li>
            <li>- Un accès à l&apos;éducation</li>
            <li>- Une alimentation saine et équilibrée</li>
            <li>- Une équipe médicale dédiée</li>
            <li>- Des vêtements d&apos;été, d&apos;hiver, des tenues sportives</li>
            <li>
              - Des activités sportives et artistiques tout au long de l&apos;année
            </li>
            <li>
              - Un accompagnement personnalisé pour se préparer à sa vie
              d&apos;adulte
            </li>
          </ul>
        {/* Benefits section */}
          <h3 className="text-xl font-semibold mb-4">
            En tant que parrain, vous recevrez :
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              - Un rapport semestriel sur la scolarité de l&apos;enfant, ses progrès
            </li>
            <li>- L&#39;état d&apos;avancement des activités de l&apos;association</li>
            <li>- Des lettres et des dessins de l&apos;enfant</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">De plus :</h4>
          <p className="text-gray-600">
            - Vous participerez à des événements au sein du Foyer pour
            rencontrer les enfants et partager de bons moments ensemble
          </p>
          {/* <div className="text-center space-y-4"> */}
          <p className="font-semibold">
            Vous pouvez parrainer selon le montant que vous souhaitez :
          </p>

          {/* <div className="max-w-xl mx-auto"> */}
            <p className="text-gray-600 font-semibold">
              Veuillez remplir le formulaire ci-dessous afin que nous puissions
              vous contacter rapidement pour soumettre votre demande de
              parrainage.
            </p>
            <p className="text-gray-600 font-semibold">(voir schéma demande don)</p>
        </div>

        {/* Image grid */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Image
              src="/Parrainer/1.jpg"
              alt="Children playing"
              width={300}
              height={300}
          className="rounded-lg shadow-md"
        />
        <Image
              src="/Parrainer/1.jpg"
              alt="Art supplies"
              width={300}
              height={300}
          className="rounded-lg shadow-md"
        />
        <Image
              src="/Parrainer/1.jpg"
              alt="Smiling child"
              width={300}
              height={300}
          className="rounded-lg shadow-md"
        />
        <Image
              src="/Parrainer/1.jpg"
              alt="Teacher with children"
              width={300}
              height={300}
          className="rounded-lg shadow-md"
        />
      </div> 
      </div>       
      </div>

      {/* Form section */}
      <div className="bg-red-600 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-4xl font-bold mb-2">
            Je parraine un enfant
          </h1>
          <h2 className="text-white text-4xl font-bold mb-8">
            maintenant.
            <div className="w-24 md:w-48 h-1 bg-yellow-300  transform  mt-2"></div>

          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="nom"
                placeholder="Nom *"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-full text-gray-700 text-lg"
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="telephone"
                placeholder="Téléphone *"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-full text-gray-700 text-lg"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-full text-gray-700 text-lg"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 rounded-3xl text-gray-700 text-lg"
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="px-8 py-2 bg-yellow-300 hover:bg-yellow-400 text-red-700 rounded-full text-lg font-bold transition-colors duration-200"
              >
                envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}