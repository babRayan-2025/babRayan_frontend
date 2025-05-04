import { useState } from 'react';

export const privacyPolicyText = `
  <div>
    <h1 class="text-2xl font-bold text-center">Politique de Confidentialité de l'Association <span class="font-bold italic">Bab Rayan</span></h1>
    <p class="text-sm text-gray-500 text-center">Dernière mise à jour : 22 avril 2025</p>

    <div class="mb-3 mt-3">
      <h2 class="text-lg font-semibold">Préambule</h2>
      <p>L'Association <span class="font-bold">Bab Rayan</span>, association de droit marocain dont le siège social est situé à 4 Rue Bayt Lahm, Quartier Palmier 20100 Casablanca Maroc (ci-après dénommée « <span class="font-bold">Bab Rayan</span> » ou « nous »), est responsable du traitement des données personnelles collectées via son site internet www.babrayan.ma. Conformément à la loi n° 09-08 promulguée par le Dahir 1-09-15 du 18 février 2009 et aux directives de la Commission Nationale de Contrôle de la Protection des Données à Caractère Personnel (CNDP), nous nous engageons à protéger vos données avec transparence, sécurité et respect de vos droits.</p>
    </div>

    <div class="mb-3">
      <h2 class="text-lg font-semibold">1. Objet de la Politique de Confidentialité</h2>
      <span>Cette politique a pour objectif de :</span>
      <ul class="list-disc pl-6">
        <li>Décrire les types de données collectées via notre site www.babrayan.ma.</li>
        <li>Expliquer leur utilisation, leur protection et leur conservation.</li>
        <li>Vous informer de vos droits légaux et des modalités pour les exercer.</li>
      </ul>
    </div>

    <div class="mb-3">
      <h2 class="text-lg font-semibold">2. Bases légales du Traitement</h2>
      <span>Les données sont traitées sur la base :</span>
      <ul class="list-disc pl-6">
        <li>De votre consentement explicite (ex : newsletter).</li>
        <li>De l'exécution d'une demande (ex : gestion de dons, inscriptions).</li>
        <li>De nos intérêts légitimes (ex : amélioration du site, sécurité).</li>
      </ul>
    </div>

    <div class="mb-3">
      <h2 class="text-lg font-semibold">3. Données Collectées</h2>
      <span>Sur www.babrayan.ma, nous collectons :</span>
      <ul class="list-disc pl-6">
        <li>Données d'identification : Nom, prénom.</li>
        <li>Coordonnées : Adresse email, numéro de téléphone.</li>
        <li>Données financières : Informations relatives aux dons (via des plateformes sécurisées).</li>
        <li>Données de participation : Inscriptions aux événements ou activités.</li>
        <li>Données techniques : Cookies, adresse IP, historique de navigation.</li>
      </ul>
    </div>

    <div class="mb-3">
      <h2 class="text-lg font-semibold">4. Finalités du Traitement</h2>
      <span>Vos données sont utilisées pour :</span>
      <ul class="list-disc pl-6">
        <li>Gérer votre adhésion ou participation à nos activités.</li>
        <li>Traiter vos dons et vous envoyer des reçus.</li>
        <li>Répondre à vos demandes via le formulaire de contact.</li>
        <li>Vous informer de nos événements et projets (avec votre consentement).</li>
        <li>Améliorer le site et personnaliser votre expérience.</li>
      </ul>
    </div>

    <div class="mb-3">
      <h2 class="text-lg font-semibold">5. Destinataires des Données</h2>
      <span>Vos données sont accessibles à :</span>
      <ul class="list-disc pl-6">
        <li>L'équipe interne de <span class="font-bold">Bab Rayan</span> (membres habilités).</li>
        <li>Prestataires externes : Hébergeurs, outils de paiement, sous contrat de confidentialité.</li>
        <li>Autorités publiques : En cas d'obligation légale (ex : audits, requêtes judiciaires).</li>
      </ul>
    </div>

    <div class="mb-3">
      <h2 class="text-lg font-semibold">6. Durée de Conservation</h2>
      <span>Vos données sont conservées :</span>
      <ul class="list-disc pl-6">
        <li>Activités et dons : 5 ans après votre dernière interaction (conformité légale).</li>
        <li>Newsletters : Jusqu'à votre désinscription ou demande de suppression.</li>
        <li>Cookies : 12 mois maximum (sauf consentement renouvelé).</li>
      </ul>
    </div>

    <div class="mb-3">
      <h2 class="text-lg font-semibold">7. Protection des Données</h2>
      <span>Nous appliquons des mesures rigoureuses pour sécuriser vos données :</span>
      <ul class="list-disc pl-6">
        <li>Chiffrement SSL pour les échanges de données.</li>
        <li>Sauvegardes régulières sur des serveurs sécurisés.</li>
        <li>Accès restreint aux données sensibles (formation obligatoire des membres).</li>
      </ul>
    </div>

    <div class="mb-3">
      <h2 class="text-lg font-semibold">8. Vos Droits</h2>
      <span>Conformément à la loi n° 09-08, vous pouvez :</span>
      <ul class="list-disc pl-6">
        <li>Accéder à vos données ou les télécharger (droit à la portabilité).</li>
        <li>Rectifier ou supprimer les informations inexactes.</li>
        <li>Vous opposer à leur traitement ou demander une limitation.</li>
        <li>Retirer votre consentement (ex : désabonnement des newsletters).</li>
      </ul>
      <span class="mt-4">Pour exercer ces droits, contactez-nous via :</span>
      <ul class="list-disc pl-6">
        <li>Adresse postale : 4 Rue Bayt Lahm, Quartier Palmier 20100 Casablanca Maroc</li>
        <li>Email : contact@babrayan.ma</li>
        <li>Téléphone : +212 610 023 555</li>
      </ul>
      <span class="mt-4">Délai de réponse : 30 jours maximum. Preuve d'identité : Une copie de votre carte d'identité sera requise pour vérification.</span>
      <span>En cas de litige, vous pouvez saisir la CNDP via www.cndp.ma.</span>
    </div>

    <div class="mb-3">
      <h2 class="text-lg font-semibold">9. Notification à la CNDP</h2>
      <span>Ce traitement a été déclaré à la CNDP sous le récépissé n° [À compléter après notification] en date du [À compléter].</span>
    </div>

    <div class="mb-3">
      <h2 class="text-lg font-semibold">10. Modifications de la Politique</h2>
      <p>Nous nous réservons le droit de mettre à jour cette politique. Les changements seront publiés sur www.babrayan.ma avec mention de la date de dernière mise à jour.</p>
    </div>

    <div class="mt-8 p-4 bg-gray-100 rounded-lg">
      <p class="text-center"><span class="font-bold">Association Bab Rayan</span><br/>
      4 Rue Bayt Lahm, Quartier Palmier 20100 Casablanca Maroc<br/>
      Email : contact@babrayan.ma<br/>
      Téléphone : +212 610 023 555</p>
    </div>

    <p class="text-sm text-gray-500 text-center mt-8">Cette politique est rédigée en français. En cas de divergence avec une traduction, la version française prévaut.</p>
  </div>
`;

export const usePrivacyPolicy = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);
  const togglePrivacyAcceptance = () => setIsPrivacyAccepted(!isPrivacyAccepted);

  return {
    isPrivacyModalOpen,
    isPrivacyAccepted,
    openPrivacyModal,
    closePrivacyModal,
    togglePrivacyAcceptance,
    privacyPolicyText
  };
}; 