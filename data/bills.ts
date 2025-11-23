export interface Bill {
    id: string;
    week: number;
    pplNumber?: string;
    title: string;
    description: string;
    category: string;
    keyPoints: string[];
    sourceUrl: string;
}

export const REALISTIC_FRENCH_BILLS: Bill[] = [
    // JANVIER
    {
        id: "ppl-2110",
        week: 1,
        pplNumber: "PPL n°2110",
        title: "Supprimer la prescription pour les viols sur mineurs",
        description: "Rendre imprescriptibles les crimes sexuels commis sur des mineurs.",
        category: "Justice",
        keyPoints: [
            "Suppression totale du délai de prescription pour les crimes sexuels sur mineurs.",
            "Possibilité pour les victimes de porter plainte à tout âge.",
            "Application rétroactive pour les crimes non encore prescrits."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/17/textes/l17b2110_proposition-loi"
    },
    {
        id: "ppl-2109",
        week: 2,
        pplNumber: "PPL n°2109",
        title: "Renforcer les peines pour sévices sur animaux",
        description: "Peines jusqu'à 5 ans de prison pour maltraitance animale.",
        category: "Société",
        keyPoints: [
            "Peine portée à 5 ans de prison et 75 000€ d'amende pour sévices graves.",
            "Circonstance aggravante si l'acte est commis en présence d'un mineur.",
            "Interdiction définitive de détenir un animal pour les condamnés."
        ],
        sourceUrl: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044387560"
    },
    {
        id: "ppl-cameras",
        week: 3,
        pplNumber: "PPL Sécurité",
        title: "Reconnaissance faciale dans l'espace public",
        description: "Autoriser l'usage de la reconnaissance faciale pour la lutte antiterroriste.",
        category: "Sécurité",
        keyPoints: [
            "Autorisation expérimentale pour les JO et grands événements.",
            "Utilisation limitée à la recherche de terroristes fichés S.",
            "Contrôle strict par la CNIL et un magistrat indépendant."
        ],
        sourceUrl: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047559478"
    },
    {
        id: "ppl-cyber",
        week: 4,
        pplNumber: "PPL Numérique",
        title: "Loi anti-anonymat sur internet",
        description: "Obligation de fournir une identité vérifiée pour créer un compte sur les réseaux sociaux.",
        category: "Numérique",
        keyPoints: [
            "Fin de l'anonymat complet lors de la création de compte.",
            "Obligation pour les plateformes de vérifier l'identité (CNI, FranceConnect).",
            "Levée de l'anonymat facilitée en cas de cyber-harcèlement."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/dossiers/securiser_et_reguler_l_espace_numerique"
    },

    // FÉVRIER
    {
        id: "ppl-bitcoin",
        week: 5,
        pplNumber: "Proposition Ciotti",
        title: "Bitcoin comme réserve de trésorerie publique",
        description: "Autoriser les collectivités à détenir du Bitcoin.",
        category: "Économie",
        keyPoints: [
            "Autorisation pour les collectivités locales d'investir jusqu'à 5% de leur trésorerie en Bitcoin.",
            "Création d'un fonds souverain numérique national.",
            "Exonération fiscale pour les plus-values réinvesties dans l'économie locale."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/17/textes/l17b2022_proposition-loi"
    },
    {
        id: "ppl-smic",
        week: 6,
        pplNumber: "PPL Sociale",
        title: "Revalorisation du SMIC à 1600€ net",
        description: "Augmentation immédiate du salaire minimum.",
        category: "Économie",
        keyPoints: [
            "Hausse immédiate du SMIC à 1600€ net mensuel.",
            "Indexation automatique sur l'inflation réelle.",
            "Aides aux TPE/PME pour absorber le coût la première année."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0328_proposition-loi"
    },
    {
        id: "ppl-superprofits",
        week: 7,
        pplNumber: "PPL Fiscal",
        title: "Taxe exceptionnelle sur les superprofits",
        description: "Taxation à 50% des bénéfices exceptionnels des grandes entreprises.",
        category: "Finance",
        keyPoints: [
            "Taxe de 50% sur les bénéfices supérieurs de 20% à la moyenne des 5 dernières années.",
            "Concerne les entreprises de plus de 750M€ de chiffre d'affaires.",
            "Recettes fléchées vers la transition écologique."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/17/dossiers/contribution_exceptionnelle_superprofits"
    },
    {
        id: "ppl-2029",
        week: 8,
        pplNumber: "PPL n°2029",
        title: "Garantir l'accès à l'argent liquide",
        description: "Obligation d'accepter les espèces partout.",
        category: "Économie",
        keyPoints: [
            "Interdiction de refuser le paiement en espèces pour tout commerce.",
            "Maintien obligatoire d'un distributeur automatique par commune de +1000 habitants.",
            "Sanctions administratives pour les banques fermant des agences rurales."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b2029_proposition-loi"
    },

    // MARS
    {
        id: "ppl-glyphosate",
        week: 9,
        pplNumber: "PPL Écologie",
        title: "Interdiction totale du glyphosate",
        description: "Interdiction immédiate sans dérogation.",
        category: "Écologie",
        keyPoints: [
            "Interdiction de vente et d'utilisation du glyphosate sur tout le territoire.",
            "Fonds d'indemnisation pour les agriculteurs impactés.",
            "Soutien à la recherche d'alternatives mécaniques."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/15/textes/l15b4745_proposition-loi"
    },
    {
        id: "ppl-chasse",
        week: 10,
        pplNumber: "PPL Nature",
        title: "Interdiction de la chasse le dimanche",
        description: "Réserver le dimanche aux promeneurs.",
        category: "Écologie",
        keyPoints: [
            "Interdiction de toute action de chasse le dimanche et les jours fériés.",
            "Création de zones de quiétude animale.",
            "Renforcement des contrôles d'alcoolémie pour les chasseurs."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0123_proposition-loi"
    },
    {
        id: "ppl-megabassines",
        week: 11,
        pplNumber: "PPL Eau",
        title: "Moratoire sur les méga-bassines",
        description: "Suspension de tous les projets de retenues d'eau agricoles.",
        category: "Agriculture",
        keyPoints: [
            "Suspension immédiate des travaux de construction de retenues de substitution.",
            "Lancement d'états généraux de l'eau dans chaque département.",
            "Priorité à l'eau potable sur l'irrigation agricole intensive."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0891_proposition-loi"
    },
    {
        id: "ppl-bio",
        week: 12,
        pplNumber: "PPL Cantines",
        title: "100% Bio dans les cantines scolaires",
        description: "Obligation de servir uniquement des produits bio à l'école.",
        category: "Éducation",
        keyPoints: [
            "Objectif 100% bio et local dans la restauration scolaire d'ici 3 ans.",
            "Interdiction des produits ultra-transformés.",
            "Soutien financier de l'État aux communes rurales."
        ],
        sourceUrl: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044416481"
    },

    // AVRIL
    {
        id: "ppl-2065",
        week: 13,
        pplNumber: "PPL n°2065",
        title: "Gratuité des soins dentaires",
        description: "Prise en charge à 100% par la Sécurité Sociale.",
        category: "Santé",
        keyPoints: [
            "Remboursement à 100% des prothèses et soins dentaires essentiels.",
            "Suppression du reste à charge pour les patients.",
            "Financement par une taxe sur les produits sucrés."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b2065_proposition-loi"
    },
    {
        id: "ppl-euthanasie",
        week: 14,
        pplNumber: "PPL Fin de Vie",
        title: "Légalisation de l'aide active à mourir",
        description: "Droit à l'euthanasie pour les maladies incurables.",
        category: "Santé",
        keyPoints: [
            "Droit à l'aide active à mourir pour les majeurs capables atteints de maladie incurable.",
            "Procédure collégiale avec avis de deux médecins.",
            "Clause de conscience pour les soignants."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b1100_proposition-loi"
    },
    {
        id: "ppl-cannabis",
        week: 15,
        pplNumber: "PPL Santé",
        title: "Légalisation du cannabis récréatif",
        description: "Vente encadrée par l'État dans des officines dédiées.",
        category: "Santé",
        keyPoints: [
            "Légalisation de la production, vente et consommation de cannabis pour les majeurs.",
            "Monopole d'État sur la distribution (modèle SEITA).",
            "Interdiction de la publicité et taxation forte pour financer la prévention."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0494_proposition-loi"
    },
    {
        id: "ppl-deserts",
        week: 16,
        pplNumber: "PPL Médecins",
        title: "Régulation de l'installation des médecins",
        description: "Interdiction de s'installer en zone sur-dotée.",
        category: "Santé",
        keyPoints: [
            "Conventionnement sélectif : 1 installation en zone sur-dotée pour 1 départ.",
            "Obligation de 2 ans d'exercice en zone sous-dotée pour les nouveaux diplômés.",
            "Suppression du numerus clausus (confirmée)."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0337_proposition-loi"
    },

    // MAI
    {
        id: "ppl-4-jours",
        week: 17,
        pplNumber: "PPL Travail",
        title: "Semaine de 4 jours (32h)",
        description: "Réduction du temps de travail sans perte de salaire.",
        category: "Social",
        keyPoints: [
            "Passage légal à 32 heures hebdomadaires.",
            "Maintien du salaire mensuel actuel.",
            "Flexibilité laissée aux entreprises sur l'organisation (4 jours ou 5 jours allégés)."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0388_proposition-loi"
    },
    {
        id: "ppl-retraites",
        week: 18,
        pplNumber: "PPL Retraites",
        title: "Retraite à 60 ans",
        description: "Abrogation de la réforme et retour aux 60 ans.",
        category: "Social",
        keyPoints: [
            "Abrogation de la réforme portant l'âge légal à 64 ans.",
            "Retour de l'âge légal de départ à 60 ans.",
            "40 annuités de cotisation pour le taux plein."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0714_proposition-loi"
    },
    {
        id: "ppl-rsa",
        week: 19,
        pplNumber: "PPL Solidarité",
        title: "RSA dès 18 ans",
        description: "Extension du RSA aux jeunes de 18-25 ans.",
        category: "Solidarité",
        keyPoints: [
            "Ouverture du RSA aux 18-25 ans sous conditions de ressources.",
            "Accompagnement renforcé vers l'emploi ou la formation.",
            "Suppression de la condition d'avoir déjà travaillé."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0330_proposition-loi"
    },
    {
        id: "ppl-teletravail",
        week: 20,
        pplNumber: "PPL Travail",
        title: "Droit opposable au télétravail",
        description: "Obligation pour l'employeur d'accepter le télétravail si le poste le permet.",
        category: "Travail",
        keyPoints: [
            "Droit pour le salarié de demander jusqu'à 3 jours de télétravail par semaine.",
            "Refus de l'employeur doit être motivé par des raisons impérieuses de service.",
            "Indemnité forfaitaire obligatoire pour frais de télétravail."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0412_proposition-loi"
    },

    // JUIN
    {
        id: "ppl-2111",
        week: 21,
        pplNumber: "PPL n°2111",
        title: "Apprentissage obligatoire de la natation",
        description: "Garantir le savoir-nager pour tous les enfants.",
        category: "Éducation",
        keyPoints: [
            "Plan national 'Savoir Nager' : 100% des élèves de 6ème doivent savoir nager.",
            "Financement de la construction de piscines mobiles.",
            "Gratuité des cours de natation municipaux pour les mineurs."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b2111_proposition-loi"
    },
    {
        id: "ppl-uniforme",
        week: 22,
        pplNumber: "PPL École",
        title: "Uniforme obligatoire à l'école",
        description: "Port d'une tenue unique dans tous les établissements publics.",
        category: "Éducation",
        keyPoints: [
            "Tenue unique fournie gratuitement par les collectivités.",
            "Obligatoire de l'école primaire au lycée.",
            "Objectif : gommer les inégalités sociales visibles."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0254_proposition-loi"
    },
    {
        id: "ppl-erasmus",
        week: 23,
        pplNumber: "PPL Jeunesse",
        title: "Service Civique Européen obligatoire",
        description: "6 mois de service civique dans un autre pays de l'UE pour tous les jeunes.",
        category: "Europe",
        keyPoints: [
            "Obligation d'effectuer 6 mois de service civique dans un pays de l'UE entre 18 et 25 ans.",
            "Prise en charge complète (transport, logement, indemnité).",
            "Validation d'acquis universitaires ou professionnels."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0456_proposition-loi"
    },
    {
        id: "ppl-parcoursup",
        week: 24,
        pplNumber: "PPL Supérieur",
        title: "Suppression de Parcoursup",
        description: "Retour à une affectation basée sur le baccalauréat et le secteur géographique.",
        category: "Éducation",
        keyPoints: [
            "Fin de la sélection à l'entrée de l'université.",
            "Affectation prioritaire dans l'académie de résidence.",
            "Tirage au sort uniquement en cas de tension extrême (dernier recours)."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0329_proposition-loi"
    },

    // JUILLET
    {
        id: "ppl-2124",
        week: 25,
        pplNumber: "PPL n°2124",
        title: "Vote des étrangers aux locales",
        description: "Droit de vote aux municipales pour les résidents étrangers.",
        category: "Citoyenneté",
        keyPoints: [
            "Droit de vote et d'éligibilité aux élections municipales.",
            "Condition : résider légalement en France depuis au moins 5 ans.",
            "Ne concerne pas les élections nationales (législatives, présidentielle)."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b2124_proposition-loi"
    },
    {
        id: "ppl-proportionnelle",
        week: 26,
        pplNumber: "PPL Institutions",
        title: "Proportionnelle intégrale aux législatives",
        description: "Élection des députés au scrutin proportionnel.",
        category: "Institutions",
        keyPoints: [
            "Scrutin de liste national à la proportionnelle intégrale.",
            "Seuil de représentation à 5% des suffrages exprimés.",
            "Objectif : meilleure représentativité des courants politiques."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0331_proposition-loi"
    },
    {
        id: "ppl-ric",
        week: 27,
        pplNumber: "PPL Démocratie",
        title: "Référendum d'Initiative Citoyenne (RIC)",
        description: "Permettre aux citoyens de proposer et voter des lois par référendum.",
        category: "Démocratie",
        keyPoints: [
            "Déclenchement d'un référendum si 700 000 signatures sont réunies.",
            "Peut porter sur l'abrogation d'une loi, la proposition d'une loi ou la révision constitutionnelle.",
            "Contrôle de constitutionnalité préalable."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0332_proposition-loi"
    },
    {
        id: "ppl-vote-16ans",
        week: 28,
        pplNumber: "PPL Jeunesse",
        title: "Droit de vote à 16 ans",
        description: "Abaisser la majorité électorale à 16 ans.",
        category: "Citoyenneté",
        keyPoints: [
            "Droit de vote à toutes les élections dès 16 ans révolus.",
            "Inscription automatique sur les listes électorales.",
            "Cours d'éducation civique renforcés au lycée."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0333_proposition-loi"
    },

    // AOÛT
    {
        id: "ppl-train",
        week: 29,
        pplNumber: "PPL Transports",
        title: "Gratuité des trains régionaux (TER)",
        description: "Rendre les transports régionaux gratuits pour tous.",
        category: "Transports",
        keyPoints: [
            "Gratuité totale des TER pour tous les usagers.",
            "Financement par une hausse du Versement Mobilité des entreprises.",
            "Objectif : doubler la part du train dans les déplacements régionaux."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0789_proposition-loi"
    },
    {
        id: "ppl-jets",
        week: 30,
        pplNumber: "PPL Climat",
        title: "Interdiction des jets privés",
        description: "Bannir l'usage des jets privés sur le territoire.",
        category: "Écologie",
        keyPoints: [
            "Interdiction des vols non commerciaux en jets privés au départ ou à l'arrivée en France.",
            "Exceptions pour évacuations sanitaires et vols d'État.",
            "Taxation lourde du kérosène pour l'aviation d'affaires restante."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0790_proposition-loi"
    },
    {
        id: "ppl-autoroutes",
        week: 31,
        pplNumber: "PPL Transports",
        title: "Renationalisation des autoroutes",
        description: "Fin des concessions et retour à la gestion publique.",
        category: "Économie",
        keyPoints: [
            "Résiliation anticipée des contrats de concession autoroutière.",
            "Retour à la gestion directe par l'État ou un établissement public.",
            "Baisse des péages de 20% immédiate."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0791_proposition-loi"
    },
    {
        id: "ppl-zfe",
        week: 32,
        pplNumber: "PPL Climat",
        title: "Suppression des ZFE",
        description: "Arrêt du déploiement des Zones à Faibles Émissions.",
        category: "Transports",
        keyPoints: [
            "Moratoire immédiat sur l'extension des ZFE (Zones à Faibles Émissions).",
            "Suppression des interdictions de circulation basées sur les vignettes Crit'Air.",
            "Remplacement par des aides au changement de véhicule plus incitatives."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b1234_proposition-loi"
    },

    // SEPTEMBRE
    {
        id: "ppl-pub",
        week: 33,
        pplNumber: "PPL Médias",
        title: "Interdiction de la pub pour les produits polluants",
        description: "Bannir la publicité pour les SUV, l'aérien et la fast-fashion.",
        category: "Écologie",
        keyPoints: [
            "Interdiction de toute publicité pour les énergies fossiles, les véhicules lourds (SUV) et l'aérien.",
            "Régulation stricte de la publicité pour la fast-fashion.",
            "Sanctions financières dissuasives."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0792_proposition-loi"
    },
    {
        id: "ppl-concentration",
        week: 34,
        pplNumber: "PPL Médias",
        title: "Loi anti-concentration des médias",
        description: "Limiter drastiquement la possession de médias par des groupes industriels.",
        category: "Culture",
        keyPoints: [
            "Interdiction pour une entreprise sous contrat avec l'État de posséder un média.",
            "Limitation de l'actionnariat à 20% maximum par un même groupe.",
            "Droit de veto des rédactions sur la nomination des directeurs."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0793_proposition-loi"
    },
    {
        id: "ppl-pass-culture",
        week: 35,
        pplNumber: "PPL Culture",
        title: "Extension du Pass Culture",
        description: "Doubler le montant du Pass Culture pour les 18 ans.",
        category: "Culture",
        keyPoints: [
            "Montant du Pass Culture porté à 600€ à 18 ans.",
            "Extension aux 12-15 ans avec des montants progressifs.",
            "Inclusion des sorties scolaires culturelles dans le dispositif."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0794_proposition-loi"
    },
    {
        id: "ppl-patrimoine",
        week: 36,
        pplNumber: "PPL Patrimoine",
        title: "Taxe sur les résidences secondaires",
        description: "Surtaxe pour financer la rénovation du patrimoine.",
        category: "Logement",
        keyPoints: [
            "Majoration de 100% de la taxe d'habitation sur les résidences secondaires.",
            "Recettes affectées à un fonds de rénovation du patrimoine rural.",
            "Exonération si la résidence est louée à l'année."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0795_proposition-loi"
    },

    // OCTOBRE
    {
        id: "ppl-proprio",
        week: 37,
        pplNumber: "PPL Logement",
        title: "Encadrement national des loyers",
        description: "Plafonnement strict des loyers sur tout le territoire.",
        category: "Logement",
        keyPoints: [
            "Généralisation de l'encadrement des loyers à toutes les communes.",
            "Gel des loyers pour 3 ans.",
            "Interdiction de louer si le logement n'est pas aux normes énergétiques."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0796_proposition-loi"
    },
    {
        id: "ppl-2021",
        week: 38,
        pplNumber: "PPL n°2021",
        title: "Zéro sans-abri",
        description: "Réquisition des logements vacants pour les sans-abri.",
        category: "Solidarité",
        keyPoints: [
            "Pouvoir de réquisition du préfet sur les logements vacants depuis plus de 12 mois.",
            "Création de 50 000 places d'hébergement d'urgence supplémentaires.",
            "Accompagnement social obligatoire."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b2021_proposition-loi"
    },
    {
        id: "ppl-airbnb",
        week: 39,
        pplNumber: "PPL Tourisme",
        title: "Limitation drastique d'Airbnb",
        description: "Limiter la location touristique à 30 jours par an maximum.",
        category: "Logement",
        keyPoints: [
            "Abaissement du plafond de location touristique à 30 nuitées par an (contre 120 actuellement).",
            "Interdiction totale dans les zones ultra-tendues (Paris centre, etc.).",
            "Obligation d'enregistrement et sanctions lourdes."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0797_proposition-loi"
    },
    {
        id: "ppl-renov",
        week: 40,
        pplNumber: "PPL Climat",
        title: "Obligation de rénovation thermique",
        description: "Interdiction de vendre ou louer des passoires thermiques (G, F, E).",
        category: "Logement",
        keyPoints: [
            "Interdiction de mise en location des logements classés G, F et E dès 2026.",
            "Obligation de rénovation globale lors de toute mutation (vente).",
            "Prise en charge à 90% des travaux pour les ménages modestes."
        ],
        sourceUrl: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043956924"
    },

    // NOVEMBRE
    {
        id: "ppl-frexit",
        week: 41,
        pplNumber: "PPL Europe",
        title: "Référendum sur le Frexit",
        description: "Consulter les Français sur la sortie de l'UE.",
        category: "Europe",
        keyPoints: [
            "Organisation d'un référendum contraignant sur l'appartenance à l'UE.",
            "Débat national de 6 mois préalable.",
            "Préparation d'un plan de sortie de l'Euro en cas de victoire du OUI."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0798_proposition-loi"
    },
    {
        id: "ppl-otan",
        week: 42,
        pplNumber: "PPL Défense",
        title: "Sortie du commandement intégré de l'OTAN",
        description: "Retrouver une indépendance militaire totale.",
        category: "Défense",
        keyPoints: [
            "Retrait immédiat de la France du commandement intégré de l'OTAN.",
            "Fermeture des bases américaines éventuelles sur le sol français.",
            "Réorientation de la stratégie de défense vers l'indépendance nationale."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0799_proposition-loi"
    },
    {
        id: "ppl-service",
        week: 43,
        pplNumber: "PPL Armée",
        title: "Rétablissement du Service Militaire",
        description: "Service militaire obligatoire de 10 mois pour tous.",
        category: "Défense",
        keyPoints: [
            "Service national universel et militaire obligatoire de 10 mois.",
            "Mixité sociale et apprentissage des valeurs républicaines.",
            "Possibilité d'effectuer une partie en service civique (pompiers, hôpitaux)."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0800_proposition-loi"
    },
    {
        id: "ppl-dev",
        week: 44,
        pplNumber: "PPL International",
        title: "Aide au développement à 1% du PIB",
        description: "Augmenter massivement l'aide aux pays en développement.",
        category: "International",
        keyPoints: [
            "Porter l'Aide Publique au Développement (APD) à 1% du RNB (contre 0.55% actuellement).",
            "Priorité à l'Afrique francophone et à l'adaptation climatique.",
            "Annulation de la dette des pays les plus pauvres détenue par la France."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0801_proposition-loi"
    },

    // DÉCEMBRE
    {
        id: "ppl-voile",
        week: 45,
        pplNumber: "PPL Laïcité",
        title: "Interdiction du voile dans l'espace public",
        description: "Extension de la loi de 2004 à la rue et aux commerces.",
        category: "Société",
        keyPoints: [
            "Interdiction du port de signes religieux ostensibles dans tout l'espace public.",
            "Extension aux accompagnatrices scolaires et aux entreprises privées.",
            "Sanctions contraventionnelles pour les contrevenants."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0802_proposition-loi"
    },
    {
        id: "ppl-corrida",
        week: 46,
        pplNumber: "PPL Animaux",
        title: "Abolition de la corrida",
        description: "Interdiction des spectacles taurins avec mise à mort.",
        category: "Culture",
        keyPoints: [
            "Modification du Code pénal pour supprimer l'exception culturelle locale.",
            "Interdiction de la corrida et des combats de coqs sur tout le territoire.",
            "Reconversion des arènes en lieux culturels sans cruauté."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b1292_proposition-loi"
    },
    {
        id: "ppl-2018",
        week: 47,
        pplNumber: "PPL n°2018",
        title: "Sécurité sociale funéraire",
        description: "Prise en charge des obsèques par la collectivité.",
        category: "Solidarité",
        keyPoints: [
            "Création d'une branche 'décès' de la Sécurité Sociale.",
            "Prise en charge intégrale des frais d'obsèques de base.",
            "Garantie d'une cérémonie digne pour tous, sans reste à charge."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b2018_proposition-loi"
    },
    {
        id: "ppl-fetes",
        week: 48,
        pplNumber: "PPL Laïcité",
        title: "Suppression des jours fériés religieux",
        description: "Remplacement par des jours fériés laïques au choix.",
        category: "Société",
        keyPoints: [
            "Remplacement des jours fériés d'origine catholique (Lundi de Pâques, Ascension...) par des jours 'libres'.",
            "Chaque salarié choisit ses 5 jours fériés selon ses convictions ou souhaits.",
            "Maintien des jours fériés civils (1er mai, 14 juillet, 11 novembre)."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0803_proposition-loi"
    },
    {
        id: "ppl-final-1",
        week: 49,
        pplNumber: "PPL Constitution",
        title: "VIème République",
        description: "Convocation d'une assemblée constituante.",
        category: "Institutions",
        keyPoints: [
            "Élection d'une Assemblée Constituante au suffrage universel.",
            "Mandat de 2 ans pour rédiger une nouvelle Constitution.",
            "Adoption finale par référendum."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0804_proposition-loi"
    },
    {
        id: "ppl-final-2",
        week: 50,
        pplNumber: "PPL Écologie",
        title: "Reconnaissance du crime d'écocide",
        description: "Sanctionner pénalement les atteintes graves à l'environnement.",
        category: "Justice",
        keyPoints: [
            "Inscription du crime d'écocide dans le Code pénal.",
            "Peines de prison et amendes massives pour les dirigeants d'entreprises polluantes.",
            "Compétence universelle des tribunaux français."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0805_proposition-loi"
    },
    {
        id: "ppl-final-3",
        week: 51,
        pplNumber: "PPL Santé",
        title: "Nationalisation de l'industrie pharmaceutique",
        description: "Création d'un pôle public du médicament.",
        category: "Santé",
        keyPoints: [
            "Nationalisation des laboratoires stratégiques produisant des médicaments essentiels.",
            "Fixation des prix par l'État en fonction du coût de production réel.",
            "Transparence totale sur la recherche et développement."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0806_proposition-loi"
    },
    {
        id: "ppl-final-4",
        week: 52,
        pplNumber: "PPL Budget",
        title: "Budget de l'État 2026",
        description: "Adoption du budget général de la nation.",
        category: "Finance",
        keyPoints: [
            "Vote final sur l'ensemble des recettes et dépenses de l'État.",
            "Intégration des mesures votées au cours de l'année.",
            "Engagement sur la trajectoire de la dette publique."
        ],
        sourceUrl: "https://www.assemblee-nationale.fr/dyn/16/dossiers/plf_2026"
    }
];
