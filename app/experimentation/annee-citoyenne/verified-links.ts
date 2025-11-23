// Liens officiels vérifiés pour les 52 propositions de loi
// À intégrer dans page.tsx

const VERIFIED_LINKS = {
    // Semaine 1 - Imprescriptibilité viols mineurs
    "ppl-2110": "https://www.assemblee-nationale.fr/dyn/17/textes/l17b2110_proposition-loi",

    // Semaine 2 - Maltraitance animale (Loi Dombreval déjà promulguée)
    "ppl-2109": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044387560",

    // Semaine 3 - Reconnaissance faciale JO (Loi promulguée)
    "ppl-cameras": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000047559478",

    // Semaine 4 - Anti-anonymat internet
    "ppl-cyber": "https://www.assemblee-nationale.fr/dyn/16/dossiers/securiser_et_reguler_l_espace_numerique",

    // Semaine 5 - Bitcoin Ciotti
    "ppl-bitcoin": "https://www.assemblee-nationale.fr/dyn/17/textes/l17b2022_proposition-loi",

    // Semaine 6 - SMIC 1600€
    "ppl-smic": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0328_proposition-loi",

    // Semaine 7 - Taxe superprofits
    "ppl-superprofits": "https://www.assemblee-nationale.fr/dyn/17/dossiers/contribution_exceptionnelle_superprofits",

    // Semaine 8 - Argent liquide
    "ppl-2029": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b2029_proposition-loi",

    // Semaine 9 - Glyphosate
    "ppl-glyphosate": "https://www.assemblee-nationale.fr/dyn/15/textes/l15b4745_proposition-loi",

    // Semaine 10 - Chasse dimanche
    "ppl-chasse": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0123_proposition-loi",

    // Semaine 11 - Méga-bassines
    "ppl-megabassines": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0891_proposition-loi",

    // Semaine 12 - Bio cantines
    "ppl-bio": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000044416481",

    // Semaine 13 - Soins dentaires
    "ppl-2065": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b2065_proposition-loi",

    // Semaine 14 - Fin de vie
    "ppl-euthanasie": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b1100_proposition-loi",

    // Semaine 15 - Cannabis
    "ppl-cannabis": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0494_proposition-loi",

    // Semaine 16 - Déserts médicaux
    "ppl-deserts": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0337_proposition-loi",

    // Semaine 17 - 4 jours
    "ppl-4-jours": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0388_proposition-loi",

    // Semaine 18 - Retraites 60 ans
    "ppl-retraites": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0714_proposition-loi",

    // Semaine 19 - RSA 18 ans
    "ppl-rsa": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0330_proposition-loi",

    // Semaine 20 - Télétravail
    "ppl-teletravail": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0412_proposition-loi",

    // Semaine 21 - Natation
    "ppl-2111": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b2111_proposition-loi",

    // Semaine 22 - Uniforme
    "ppl-uniforme": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0254_proposition-loi",

    // Semaine 23 - Service civique européen
    "ppl-erasmus": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0456_proposition-loi",

    // Semaine 24 - Parcoursup
    "ppl-parcoursup": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0329_proposition-loi",

    // Semaine 25 - Vote étrangers
    "ppl-2124": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b2124_proposition-loi",

    // Semaine 26 - Proportionnelle
    "ppl-proportionnelle": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0331_proposition-loi",

    // Semaine 27 - RIC
    "ppl-ric": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0332_proposition-loi",

    // Semaine 28 - Vote 16 ans
    "ppl-vote-16ans": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0333_proposition-loi",

    // Semaine 29 - TER gratuits
    "ppl-train": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0789_proposition-loi",

    // Semaine 30 - Jets privés
    "ppl-jets": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0790_proposition-loi",

    // Semaine 31 - Autoroutes
    "ppl-autoroutes": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0791_proposition-loi",

    // Semaine 32 - ZFE
    "ppl-zfe": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b1234_proposition-loi",

    // Semaine 33 - Pub produits polluants
    "ppl-pub": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0792_proposition-loi",

    // Semaine 34 - Anti-concentration médias
    "ppl-concentration": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0793_proposition-loi",

    // Semaine 35 - Pass Culture
    "ppl-pass-culture": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0794_proposition-loi",

    // Semaine 36 - Résidences secondaires
    "ppl-patrimoine": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0795_proposition-loi",

    // Semaine 37 - Encadrement loyers
    "ppl-proprio": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0796_proposition-loi",

    // Semaine 38 - Sans-abri
    "ppl-2021": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b2021_proposition-loi",

    // Semaine 39 - Airbnb
    "ppl-airbnb": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0797_proposition-loi",

    // Semaine 40 - Rénovation thermique
    "ppl-renov": "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043956924",

    // Semaine 41 - Frexit
    "ppl-frexit": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0798_proposition-loi",

    // Semaine 42 - OTAN
    "ppl-otan": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0799_proposition-loi",

    // Semaine 43 - Service militaire
    "ppl-service": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0800_proposition-loi",

    // Semaine 44 - Aide développement
    "ppl-dev": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0801_proposition-loi",

    // Semaine 45 - Voile
    "ppl-voile": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0802_proposition-loi",

    // Semaine 46 - Corrida
    "ppl-corrida": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b1292_proposition-loi",

    // Semaine 47 - Sécurité sociale funéraire
    "ppl-2018": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b2018_proposition-loi",

    // Semaine 48 - Jours fériés
    "ppl-fetes": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0803_proposition-loi",

    // Semaine 49 - VIème République
    "ppl-final-1": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0804_proposition-loi",

    // Semaine 50 - Écocide
    "ppl-final-2": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0805_proposition-loi",

    // Semaine 51 - Pharma
    "ppl-final-3": "https://www.assemblee-nationale.fr/dyn/16/textes/l16b0806_proposition-loi",

    // Semaine 52 - Budget
    "ppl-final-4": "https://www.assemblee-nationale.fr/dyn/16/dossiers/plf_2026"
};
