"use client";

import React, { useState } from 'react';

export default function Donation() {
    const [selectedAmount, setSelectedAmount] = useState('1900 DH');
    const [donationType, setDonationType] = useState('Mensuel');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleAmountChange = (amount) => {
        setSelectedAmount(amount);
    };

    const handleDonationTypeChange = (type) => {
        setDonationType(type);
    };

    const handleDonation = () => {
        // Logic to process donation (e.g., send to a payment gateway)
        setShowSuccessMessage(true);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-[url('/donation/background.png')] bg-cover">
            
            <header className="text-center">
                <h3 className="text-3xl font-bold underline decoration-amber-200 underline-offset-8 decoration-4">FAIRE UN DON</h3>
                <h1 className="text-5xl font-bold mt-2">
                    <span className="text-black">Votre soutien </span>
                    <span className="text-yellow-300">changera la vie d'un enfant.</span>
                </h1>
                <img src="/donation/bas.png" alt="Gauche" className="w-48 h-24 mt-4 self-start" />
            </header>

            <section className="flex flex-col gap-10 p-8 rounded-lg mb-5 max-w-screen-xl mx-auto">
                <div className="flex gap-10">
                    {/* Montant Section */}
                    <div className="bg-red-600 p-8 rounded-lg shadow-lg w-1/3 border border-black">
                        <h2 className="text-3xl text-white font-semibold mb-4">Choisissez le montant</h2>

                        <div className="mb-4">
                            <div className="flex gap-4">
                                <button 
                                    className={`py-2 px-4 rounded-lg ${donationType === 'Mensuel' ? 'bg-white text-red-600' : 'bg-white text-red-600 border border-red-600'}`} 
                                    onClick={() => handleDonationTypeChange('Mensuel')}
                                >
                                    Mensuel
                                </button>
                                <button 
                                    className={`py-2 px-4 rounded ${donationType === 'Ponctuel' ? 'bg-white text-red-600' : 'bg-white text-red-600 border border-red-600'}`} 
                                    onClick={() => handleDonationTypeChange('Ponctuel')}
                                >
                                    Ponctuel
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4 mb-4">
                            {['100 DH', '500 DH', '1000 DH'].map((amount) => (
                                <button 
                                    key={amount} 
                                    className={`py-2 px-4 rounded border border-yellow-500 ${selectedAmount === amount ? 'bg-yellow-500 text-white' : 'bg-red-600 text-white'}`} 
                                    onClick={() => handleAmountChange(amount)}
                                >
                                    {amount}
                                </button>
                            ))}
                        </div>

                        <button 
                            className="bg-white text-black py-2 px-4 rounded w-full mt-4" 
                            onClick={handleDonation}
                        >
                            Procéder au don
                        </button>

                        {showSuccessMessage && <p className="text-green-500 mt-4">Merci pour votre don!</p>}

                        <div className="flex flex-wrap gap-4 mt-4 justify-center">
                            {[1, 2, 3, 4, 5, 6, 9].map((img) => (
                                <button key={img} className="bg-white border border-black p-1 rounded-lg">
                                    <img src={`/donation/${img}.png`} alt={`Image ${img}`} className="w-16 h-12" />
                                </button>
                            ))}
                        </div>

                        <button 
                            className="bg-black text-yellow-300 py-2 px-4 rounded-full w-full mt-4 border border-yellow-300" 
                            onClick={handleDonation}
                        >
                            Procéder au don
                        </button>
                    </div>

                    {/* Parrainage Section */}
                    <div className="bg-amber-300 p-8 rounded-lg shadow-lg w-1/3 border border-black">
                        <h2 className="text-3xl text-red-600 font-semibold mb-4 text-center">Parrainage "Essentiel"</h2>
                        <p>Apportez un soutien vital à un enfant :</p>
                        <ul className="list-none ml-5 mb-4">
                            {[
                                { label: 'Alimentation saine', description: 'pour lui permettre de bien grandir.' },
                                { label: 'Soin médicaux', description: 'pour garantir sa bonne santé.' },
                                { label: 'Hygiène adaptée', description: 'pour préserver sa dignité.' }
                            ].map((item, index) => (
                                <li key={index} className="mb-2 flex items-start">
                                    <img src="/donation/check.png" alt="Check" className="w-4 h-4 mr-2 mt-1" />
                                    <span>
                                        <span className="text-red-600 font-bold">{item.label} :</span> <br/> {item.description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <img src="/donation/Parrainage1.png" alt="Essentiel" className="mb-4 rounded-lg h-48" />
                        <div className="flex items-center mb-4 justify-end">
                            <span className="text-black font-bold mr-2">Type de don</span>
                            <button className="bg-red-600 text-yellow-300 py-1 px-4 rounded-lg ml-3 border border-black">Mensuel</button>
                        </div>
                        <div className="flex items-center justify-end">
                            <img src="/donation/gauche.png" alt="Money" className="w-16 h-8 mr-2 "  />
                            <span className="text-black font-bold mr-2">Montant</span>
                            <button className="bg-red-600 text-yellow-300 py-1 px-4 rounded-lg ml-3 border border-black">500 DH</button>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className=" p-8 rounded-lg shadow-lg w-1/3 bg-[url('/donation/photo1.png')] border border-black">
                        
                        
                    </div>
                </div>
            </section>

            <footer className="text-center bg-red-600 text-white p-20 w-full ">
            <h2 className="text-3xl font-bold underline decoration-amber-200 underline-offset-8 decoration-4">CONTACT</h2>
<div className="flex justify-center items-center space-x-8">
    <ul className="list-none mb-6 flex flex-col mt-4">
        <li className="mb-4 flex items-start">
            <img src="/donation/call.png" alt="Contact 1" className="w-8 h-8 mr-4" />
            <span className="text-yellow-300 font-medium">La Direction :</span> 
            <span className="ml-2">+212 610 02 35 55</span>
        </li>
        <li className="mb-4 flex items-start">
            <img src="/donation/email.png" alt="Contact 2" className="w-8 h-8 mr-4" />
            direction@babrayan.ma
        </li>
        <li className="mb-4 flex items-start">
            <img src="/donation/local.png" alt="Contact 3" className="w-8 h-8 mr-4" />
            <span>4 rue Bayt Lham, Quartier Palmier, Casablanca</span>
        </li>
    </ul>
    <img src="/donation/cell.png" alt="Cell" className="w-50 h-50 self-center" />
</div>


            </footer>
        </main>
    );
}
