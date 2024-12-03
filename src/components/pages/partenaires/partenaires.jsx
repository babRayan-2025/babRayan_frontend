import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./partenaires.css";
import indh from "../../../assets/indh.png";

const PartnerList = () => {
  // const partners = [
  //   { src: indh, alt: 'Partner 1' },
  // ];

  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchedLogos = [
      { src: indh, alt: "Partner 1" },
      { src: indh, alt: "Partner 2" },
      { src: indh, alt: "Partner 3" },
      { src: indh, alt: "Partner 4" },
      { src: indh, alt: "Partner 5" },
    ];
    setLogos(fetchedLogos);
  }, []);

  const settings = {
    infinite: true,
    speed: 500, // Duration of the slide animation
    slidesToShow: 4, // Number of slides shown at once
    slidesToScroll: 1, // Number of slides scrolled at once
    autoplay: true, // Automatically scroll the carousel
    autoplaySpeed: 2000, // Time delay between auto slides (2 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="General-page">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.div
            className="title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h1 className="hero-title">Partenaires</h1>
            <div className="divider"></div>
          </motion.div>
        </div>
      </motion.div>

      <div className="partner-list-page">
        <h1>Remerciement</h1>
        <p className="thanks-message">
          Nous tenons à remercier chaleureusement tous nos partenaires pour leur
          soutien continu et précieux. Leur contribution est essentielle à notre
          succès et nous permet de réaliser nos objectifs communs.
        </p>

        <h2>Liste des Partenaires:</h2>
        {/* <div className="partners-grid ">
          {partners.map((partner, index) => (
            <img key={index} src={partner.src} alt={partner.alt} className="partner-logo" />
          ))}
        </div> */}
        <div className="logo-carousel">
          <Slider {...settings}>
            {logos.length > 0 ? (
              logos.map((logo, index) => (
                <div key={index} className="logo-slide">
                  <img src={logo.src} alt={logo.alt} />
                </div>
              ))
            ) : (
              <div>Loading logos...</div> // A fallback if the logos haven't loaded yet
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PartnerList;
