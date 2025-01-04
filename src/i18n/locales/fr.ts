export const fr = {
  header: {
    about: 'À propos',
    experience: 'Expérience',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact'
  },
  hero: {
    title: 'Développeuse Web & Mobile',
    subtitle: 'Étudiante en Master – Spécialisation Développement Web et Mobile',
    cta: {
      projects: 'Voir mes projets',
      contact: 'Me contacter'
    }
  },
  about: {
    title: 'À Propos',
    description1: 'Étudiante en Master Ingénierie des Médias, avec une spécialisation en développement web et mobile.',
    description2: 'Passionnée par les technologies innovantes et l\'optimisation des expériences utilisateur.'
  },
  education: {
    title: 'Formation',
    period: 'Période',
    school: 'École',
    items: {
      master: {
        period: "2023-aujourd'hui",
        title: "Master professionnel en Ingénierie des Médias",
        school: "Institut Supérieur des Arts Multimédia de Manouba"
      },
      license: {
        period: "2020-2023",
        title: "Licence en Sciences Informatiques",
        school: "Institut Supérieur des Arts Multimédia de Manouba"
      },
      bac: {
        period: "2019-2020",
        title: "Baccalauréat en Sciences Expérimentales",
        school: "Lycée Al Farabi de Mornaguia Manouba"
      }
    }
  },
  experience: {
    title: 'Expérience Professionnelle',
    location: 'Lieu',
    technologies: 'Technologies utilisées',
    achievements: 'Réalisations clés',
    items: {
      polyOil: {
        period: "Juillet 2024-Août 2024",
        title: "Stage d'été chez Poly Oil",
        description: "Développement d'un site web pour l'exposition de produits lubrifiants pour voitures avec gestion administrative.",
        location: "Manouba, Tunisie"
      },
      medianet: {
        period: "Février 2024-mai 2024",
        title: "Stage d'initiation chez Medianet",
        description: "Conduite d'études utilisateur et création de wireframes et Développement d'interfaces web.",
        location: "Ariana, Tunisie"
      },
      tsunami: {
        period: "Février 2023-mai 2023",
        title: "Stage de fin d'étude chez Tsunami IT",
        description: "Développement d'une application mobile de gestion des bovins, leurs productions et leurs intégrations.",
        location: "Tunis, Tunisie"
      }
    }
  },
  projects: {
    title: 'Projets Académiques',
    technologies: 'Technologies',
    description: 'Description',
    modal: {
      challenge: 'Le Défi',
      solution: 'Notre Solution',
      features: 'Fonctionnalités',
      gallery: 'Galerie',
      viewDemo: 'Voir la Démo'
    },
    items: {
      proConnect: {
        title: "ProConnect : Plateforme de Freelance",
        description: "Une plateforme permettant aux freelances de trouver des projets et aux clients de trouver des talents.",
        challenge: "Créer une plateforme intuitive connectant freelances et clients tout en garantissant des transactions sécurisées.",
        solution: "Développement d'une interface utilisateur moderne avec un système de mise en relation intelligent et un système de paiement sécurisé.",
        features: [
          "Système de gestion des utilisateurs avec profils détaillés pour Freelances et Clients",
          "Recherche avancée avec filtres par compétences, localisation, et tarif horaire",
          "Publication de projets et gestion des offres",
          "Évaluations et avis après la réalisation des projets",
          "Système de notifications en temps réel pour les projets et offres"
        ]
        
      },
      autify: {
        title: "Autify : Application Mobile d'Assurance",
        description: "Application mobile permettant la gestion des contrats d'assurance automobile et le suivi des sinistres.",
        challenge: "Simplifier la gestion des contrats d'assurance automobile et le suivi des sinistres pour les utilisateurs mobiles.",
        solution: "Application mobile intuitive permettant la gestion complète des contrats et le suivi en temps réel des sinistres.",
        features: [
          "Gestion des adhérents : Création et gestion des profils adhérents avec formulaire d'inscription et informations personnelles ",
          "Historique et suivi des adhérents : Affichage de l'historique des demandes passées et en cours",
          "Gestion des constats : Interface permettant aux utilisateurs de créer des constats ",
          "Suivi de l'état des demandes : Suivi en temps réel de l'état des demandes avec mises à jour automatiques",
          "Notifications : Envoi de notifications par e-mail ou SMS pour tenir les adhérents informés des mises à jour",
          "Suivi de l'état du véhicule : Simulation de l'état du véhicule et estimation des coûts",
          "Gestion des voitures de remplacement : Gestion des demandes et de la disponibilité des véhicules de remplacement",
          "Remboursements : Soumission des demandes de remboursement avec les pièces justificatives requises",
          "Suivi des remboursements : Affichage de l'état des remboursements et historique des transactions"
        ]
        
      },
      novaTech: {
        title: "NovaTech : Dashboard RH",
        description: "Dashboard de gestion des employés avec suivi des performances et gestion des congés.",
        challenge: "Créer un outil centralisé pour la gestion des ressources humaines.",
        solution: "Développement d'un dashboard moderne et intuitif avec des fonctionnalités avancées de gestion RH.",
        features: [
          "Accès administrateur : Ajouter, modifier et supprimer des départements et des employés",
          "Gestion des demandes : Traiter et valider les demandes avec génération automatique de documents (template signé, états validés ou non)",
          "Documents administratifs : Générer des attestations, acquittements pour assurances et avances sur salaires",
          "Liste des demandes : Afficher par défaut les nouvelles demandes sur la page d'accueil, avec possibilité de filtrer toutes les demandes",
          "Accès employé : Permettre aux employés de modifier leur mot de passe et télécharger les documents validés",
          "Affichage des statuts : Les employés peuvent voir le statut de leurs demandes et annuler une demande non encore traitée",
          "Demandes spécifiques :",
          "  - Demande de congé :",
          "    - Calcul automatique du solde (2.5 jours par mois)",
          "    - Restrictions sur les congés si solde insuffisant ou absence critique dans le département",
          "    - Notification et délai minimum de 2 jours avant le début du congé",
          "  - Demande de fiche de paie : Limite d'une fiche par mois",
          "  - Demande de remboursement assurance : Formulaire dédié",
          "  - Demande d'avance sur salaire : Limite d'une fois par mois jusqu'à 1000 DT",
          "  - Demande d'attestation de travail : Génération automatique"
        ]
        
      },
      repasRes: {
        title: "RepasRes: Gestion Alimentaire",
        description: "Application mobile de gestion et partage des surplus alimentaires pour réduire le gaspillage.",
        challenge: "Réduire le gaspillage alimentaire en facilitant le partage des surplus.",
        solution: "Application mobile permettant de gérer et partager facilement les surplus alimentaires.",
        features: [
          "Gestion des utilisateurs : Profils pour restaurants, grandes surfaces, consommateurs, et gestionnaires de déchets",
          "Vente de plats à moindre coût : Plateforme pour vendre des plats préparés à partir de produits bientôt périmés",
          "Produits à bas prix : Mise en vente de produits alimentaires à prix réduit avant péremption",
          "Publication de déchets : Les utilisateurs peuvent poster leurs déchets alimentaires pour collecte",
          "Réduction du gaspillage : Encourager les utilisateurs à réduire leur empreinte alimentaire"
        ]
        
      },
      magon: {
        title: "Magon Farm: Gestion des bovins",
        description: "Solution intégrée pour la gestion des bovins, centralisation des données et optimisation des processus.",
        challenge: "Améliorer la gestion des élevages bovins, garantir la conformité réglementaire, et automatiser les tâches.",
        solution: "Une application mobile et web qui centralise la gestion des bovins, intègre des analyses de données et facilite la collaboration.",
        features: [
          "Gestion des utilisateurs : Contrôle d'accès à plusieurs niveaux (Administrateur, Propriétaire et Associé)",
          "Suivi des bovins : Traçabilité et suivi en temps réel des informations liées aux bovins",
          "Automatisation des tâches : Élimination des processus papier pour optimiser la production",
          "Contrôle qualité : Mise en place de normes rigoureuses pour garantir la conformité aux standards",
          "Centralisation des données : Système de gestion de stockage intégré avec synchronisation en temps réel",
          "Analyse des performances : Courbes et rapports automatiques pour faciliter la prise de décision",
          "Notifications en temps réel : Alertes instantanées pour informer des mises à jour et événements importants",
          "Système de conversation : Messagerie en temps réel pour faciliter la collaboration entre les membres",
          "Système de publications : Partage de nouveautés et d'informations avec les utilisateurs",
          "Gestion des ressources : Ajouter et consulter facilement des informations sur les aliments et les médicaments"
        ]
      }
      
    }
  },
  skills: {
    title: 'Compétences',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      database: 'Base de données'
    }
  },
  volunteer: {
    title: 'Bénévolat',
    period: 'Période',
    role: 'Rôle',
    description: 'Description',
    achievements: 'Réalisations'
  },
  languages: {
    title: 'Langues',
    native: 'Langue maternelle',
    fluent: 'Courant',
    intermediate: 'Intermédiaire',
    beginner: 'Débutant'
  },
  certifications: {
    title: 'Certifications',
    provider: 'Fournisseur',
    date: 'Date'
  },
  contact: {
    title: 'Contact',
    subtitle: 'Restons en contact',
    description: 'N\'hésitez pas à me contacter pour toute question ou opportunité de collaboration.',
    form: {
      name: 'Nom',
      email: 'Adresse e-mail',
      message: 'Message',
      send: 'Envoyer'
    }
  },
  footer: {
    madeWith: 'Fait avec',
    by: 'par',
    rights: 'Tous droits réservés'
  },
};