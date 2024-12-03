import React, { useRef } from "react";
import "./EducationScolarite.css";
import { motion } from "framer-motion";
import { Collapse } from "antd";
import { Statistic } from "antd";
import CountUp from "react-countup";
// import Ftour from "../../../assets/ftour/ftour.jpeg"
import prot1 from "../../../assets/protection/pic1.jpg";
import prot2 from "../../../assets/protection/pic2.jpg";
import prot3 from "../../../assets/protection/pic3.jpg";
import prot4 from "../../../assets/protection/pic4.jpg";
import prot5 from "../../../assets/protection/pic5.jpg";

export default function EducationScolarite() {
  const ref = useRef(null);

  const protection = [
    {
      titre: `"Bab Rayan lutte contre le décrochage scolaire" `,
      img: [prot1, prot2, prot3, prot4, prot5],
      desc: `Bab Rayan lutte contre le décrochage scolaire en offrant un soutien scolaire
          personnalisé et en accompagnant les familles pour assurer la réussite de chaque enfant.
          En intégrant ces jeunes dans un parcours éducatif adapté à leurs besoins, nous leur donnons
          les outils nécessaires pour construire leur avenir.`,
    },
  ];

  const items = [
    {
      key: "1",
      label: <h2>Pédagogie 3.0</h2>,
      children: (
        <div>
          <p>
            L’école a opté pour la pédagogie 3.0, une approche adaptée aux
            besoins des enfants ayant des troubles de l’apprentissage. Elle
            responsabilise les élèves et leur permet de prendre conscience de la
            conséquence de leurs décisions. De plus, l’enfant est le seul à
            pouvoir réellement agir sur la réussite de son apprentissage.
          </p>
          <h4>Les trois piliers :</h4>
          <ul>
            <li>Pilier 1. Le développement de l’autonomie</li>
            <li>Pilier 2. La permanence de l’apprentissage</li>
            <li>Pilier 3. Le développement de la créativité</li>
          </ul>{" "}
        </div>
      ),
    },
    {
      key: "2",
      label: <h2>Services intégrés</h2>,
      children: (
        <div>
          {" "}
          <h4>Programme trilingue :</h4>
          <p>
            L’école prépare les enfants aux défis de demain dans un monde de
            plus en plus globalisé, le programme choisi par l’école est par
            conséquent trilingue :
          </p>
          <ul>
            <li>Programme national de la langue Arabe</li>
            <li>Programme FLM de la mission Française</li>
            <li>Programme Britannique de la langue Anglaise</li>
          </ul>
        </div>
      ),
    },
    {
      key: "3",
      label: <h2>Activités extrascolaires </h2>,
      children: (
        <div>
          <p>
            Le programme a la particularité d’inclure des activités
            parascolaires dans le cursus académique, à savoir, des ateliers
            d’expression libre de peinture, des stages de cuisine, du jardinage,
            des ateliers de robotique et de bricolage, des activités
            technologiques et un programme sportif d’éducation physique.
          </p>
          <ul>
            <li>Suivi psychologique personnalisé</li>
            <li>Accompagnement spécialisé des troubles Dys et TDA</li>
            <li>Accompagnement holistique</li>
            <li>Aménagement des espaces d’apprentissage de façon ludique</li>
            <li>Aire de développement psychomoteur</li>
            <li>
              Programme sportif pour l’éducation des valeurs et du leadership
            </li>
            <li>Cantine gratuite pour assurer une nutrition équilibrée</li>
            <li>Distribution de cartables et de matériel scolaire</li>
          </ul>
        </div>
      ),
    },
  ];

  const parte = [
    {
      key: "1",
      label: <h2>Promouvoir une communauté éducative</h2>,
      children: (
        <div>
        <ul>
          <li>EN AIDANT LES PARENTS, NOUS AIDONS LES ENFANTS</li>
          <li>Préserver le cadre familial et la qualité du lien parent-enfant</li>
        </ul>
        <p>
          L'école Palmier, tant pour le préscolaire que pour le primaire, s'adresse aux enfants du foyer Bab Rayan ainsi qu'aux externes issus de milieux défavorisés. Les parents de cette communauté bénéficient d'ateliers d'éducation parentale fondés sur le programme de la médiation familiale, élaborés par le Ministère de la Solidarité, de l'Insertion Sociale et de la Famille et visant à approfondir la culture de l’éducation  parentale  en  guidant  les  parents  à communiquer efficacement avec leurs enfants, les protégeant des risques et leur  transmettant  des  valeurs  positives.  
Nous bâtissons des  ponts  de communication  entre  parents,  écoles  et  éducateurs,  et  encourageons  le dialogue familial et les attitudes positives entre ses membres.

        </p>
         </div>
      ),
    },
  ];

  const formatter = (value) => <CountUp end={value} separator="," duration={8} />;

  const chiffres = [
    {
      label: "élèves",
      value: 225,
      icon: <i className="fa-solid fa-child"></i>,
    },
    {
      label: "encadrants",
      value: 23,
      icon: <i className="fa-solid fa-house-user"></i>,
    },
    {
      label: "bénévoles",
      value: 1200,
      icon: <i className="fa-solid fa-boxes-stacked"></i>,
    },
  ];

  return (
    <motion.div
      className="education-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <motion.div
        ref={ref}
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
            <h1 className="hero-title">Education et scolarité</h1>
            <div className="divider"></div>
          </motion.div>
        </div>
      </motion.div>

      <div className="mt-4 row w-90 d-flex justify-content-center m-auto">
        {protection.map((protection, index) => (
          <motion.div
            key={index}
            className="col-12 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.2, duration: 1 }}
          >
            <div className="card border-0" style={{ backgroundColor: "#f4f4f4" }}>
              <div className="row w-100">
                <div className="col-12 col-md-8">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={protection.img[0]}
                          className="d-block w-100"
                          style={{ height: "400px", objectFit: "cover" }}
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={protection.img[1]}
                          className="d-block w-100"
                          style={{ height: "400px", objectFit: "cover" }}
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={protection.img[2]}
                          className="d-block w-100"
                          style={{ height: "400px", objectFit: "cover" }}
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-12 col-md-4 my-auto">
                  <div className="card-body">
                    <h2
                      style={{ color: "#F77F00" }}
                      className="fw-bold fs-8 text-center"
                    >
                      {protection.titre}{" "}
                    </h2>
                    <hr />
                    <div style={{ color: "#003049" }}>{protection.desc}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="ecole-plamier">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          École Palmier
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          L’école Palmier est un établissement privé à caractère social,
          gratuit, agrée par le Ministère de l’Éducation Nationale, du
          préscolaire et des Sports.
        </motion.p>
      </div>

      <motion.div className="section-pedagogy">
        <Collapse defaultActiveKey={["1"]} ghost items={items} />
      </motion.div>

      <motion.div className="parental-title">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          ACCOMPAGNEMENT PARENTAL
        </motion.h2>
      </motion.div>

      <motion.div className="section-pedagogy">
        <Collapse defaultActiveKey={["1"]} ghost items={parte} />
      </motion.div>

      <div className="ecole-chiffres">
        <motion.h3
          style={{
            textAlign: "center",
            padding: "10px",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          L’école en chiffres
        </motion.h3>
        <motion.div className="stat-container">
          {chiffres.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.3, duration: 1 }}
            >
              <span style={{ color: "#003049", fontSize: "50px" }}>
                {stat.icon}
              </span>
              <br />
              <div className="d-flex justify-content-center">
                <span
                  className="me-1 fw-bold"
                  style={{ color: "#003049", fontSize: "30px" }}
                >
                  +
                </span>
                <Statistic
                  className="fw-bold stat-value"
                  valueStyle={{ color: "#003049", fontSize: "30px" }}
                  value={stat.value}
                  formatter={formatter}
                />
              </div>
              <span className="text-secondary">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
