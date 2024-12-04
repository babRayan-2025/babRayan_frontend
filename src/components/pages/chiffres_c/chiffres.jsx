import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './chiffres.css';
import CFI from '../../../assets/3rubrique/CFI.jpg';

const ChiffresPage = () => {

  const ref = useRef(null);

  return (
    <div className="foyer-page">
      {/* Hero Section */}
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="hero-content">
          <motion.div className="title" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
            <h1 className="hero-title">Chiffres clés</h1>
            <div className="divider"></div>

          </motion.div>
        </div>
      </motion.div>


      {/* Introduction Section */}
      <section className="introduction-section">
        <div className="image-container">
          <img src={CFI} alt="Historical overview image" />
        </div>
        <div className="text-container">
          <h2>Il faudrait retracer l'historique depuis le début :</h2>
          <p>
            Il faudrait retracer l’historique depuis le début : combien d’enfants ont
            été accompagnés depuis la création de l’association, quels a été l’évolution ? 
            Combien d’enfants ont intégré chaque année ? quelle est la durée moyenne de 
            prise en charge : 3-5 ans ? Combien d’autres personnes âgées les foyers de 
            province partenaires etc. Il faudra recenser l’ensemble des chiffres ensemble 
            pour compléter ceux-ci-dessous.
          </p>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="statistics-section">
        <div className="background-overlay">
          <h2>Le foyer en chiffres</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>2,6</h3>
              <p>MMAD DE BUDGET ANNUEL</p>
            </div>
            <div className="stat-item">
              <h3>105</h3>
              <p>ENFANTS LOGÉS, NOURRIS, SOIGNÉS ET ÉDUQUÉS</p>
            </div>
            <div className="stat-item">
              <h3>16</h3>
              <p>ENCADRANTS</p>
            </div>
            <div className="stat-item">
              <h3>500</h3>
              <p>BÉNÉVOLES</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      
      <div class="timeline-main">
      <div class="timeline-yellow"></div>
      <div class="timeline-orange"></div>
      <div class="timeline-orange1"></div>
      <div class="timeline-red"></div>
      <div class="timeline-bleu"></div>
      <div class="timeline-purple"></div>
      <div class="timeline-start">
        <img src="./don800.jpg" alt="" srcset="" />
      </div>
      <div class="timeline-a">
        <img src="./don800.jpg" alt="" srcset="" />
      </div>
      <div class="timeline-b">
        <img src="./don800.jpg" alt="" srcset="" />
      </div>
      <div class="timeline-c">
        <img src="./don800.jpg" alt="" srcset="" />
      </div>
      <div class="timeline-d">
        <img src="./don800.jpg" alt="" srcset="" />
      </div>
      <div class="timeline-e">
        <img src="./don800.jpg" alt="" srcset="" />
      </div>
      <div class="timeline-finish">
        <img src="./don800.jpg" alt="" srcset="" />
      </div>
      {/* <!-- description --> */}
      
      <div class="timeline-a1">
        <div class="timeline-date"></div>
        <div class="timeline-desc"></div>
      </div>
      <div class="line-a1">
      </div>
      <div class="timeline-b1">
        <div class="timeline-date"></div>
        <div class="timeline-desc"></div>
      </div>
      <div class="timeline-c1">
        <div class="timeline-date"></div>
        <div class="timeline-desc"></div>
      </div>
      <div class="timeline-d1">
        <div class="timeline-date"></div>
        <div class="timeline-desc"></div>
      </div>
      <div class="timeline-e1">
        <div class="timeline-date"></div>
        <div class="timeline-desc"></div>
      </div>
    </div>

      {/* Gallery Section */}
      <section className="gallery-section">
          <img src={CFI} alt="Gallery image 1" />
          <img src={CFI} alt="Gallery image 2" />
          <img src={CFI} alt="Gallery image 3" />
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <p>Rejoignez le combat, pour la protection de l'enfance</p>
        <button onClick={() => window.location.href = "/donation"} className="donate-button">
          Faire un <b>DON !</b>
        </button>
      </section>
    </div>
  );
};

export default ChiffresPage;
