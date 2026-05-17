export const languageOptions = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "nl", label: "Nederlands", shortLabel: "NL" },
  { code: "fr", label: "Francais", shortLabel: "FR" },
];

const contactLinks = {
  email: "office@photobook-noir.com",
  discord: "https://discord.gg/WJPDWy3Sfh",
  linkedin: "https://www.linkedin.com/in/cosmin-mihai-46a7b147/",
  bluesky: "https://bsky.app/profile/cosmin42.bsky.social",
  tiktok: "https://www.tiktok.com/@photobooknoir",
  youtube: "https://www.youtube.com/@PhotoBookNoir",
};

export const siteContent = {
  en: {
    navigation: {
      brand: "Photo Book Noir",
      toggleLabel: "Toggle navigation",
      screenshots: "Screenshots",
      about: "About",
      contact: "Contact & Support",
      more: "More",
      credits: "Credits",
      privacy: "Privacy Policy",
      languageLabel: "Language",
    },
    home: {
      header: {
        title: "Photo Book Noir",
        paragraph:
          "Create minimalist photo books, photo albums, and collage layouts on iPhone and iPad with captions, LUT filters, and export-ready files.",
        appStoreAlt: "View on the App Store",
        appStoreHref:
          "https://apps.apple.com/nl/app/photo-book-noir/id6749212233?l=en-GB",
        downloadLabel: "Download DMG",
      },
      demo: {
        title: "Watch the app demo",
        paragraph:
          "A demo of the Auto Staging feature",
        videoLabel: "Photo Book Noir demo video",
      },
      screenshots: {
        title: "Screenshots",
        paragraph:
          "Preview the photo book maker, album editor, collage tools, and export workflow inside Photo Book Noir.",
        kicker: "Product tour",
        railLabel: "Choose a screenshot to feature",
        navLabel: "Featured screenshot navigation",
        previous: "Prev",
        next: "Next",
        previousAria: "Show previous screenshot",
        nextAria: "Show next screenshot",
        close: "Close",
        enlarge: "enlarge",
        featuredNow: "Featured now",
        clickToPreview: "Click to preview",
        fallbackLabel: "Screenshot",
        images: [
          { src: "/img/screenshots/screenshot0.avif", title: "Photo Book Gallery" },
          { src: "/img/screenshots/screenshot01.avif", title: "Photo Album Layouts" },
          { src: "/img/screenshots/screenshot02.avif", title: "Collage and Editing Tools" },
          { src: "/img/screenshots/screenshot03.avif", title: "Export for Print or Sharing" },
          { src: "/img/screenshots/screenshot04.avif", title: "Caption and Text Styling" },
          { src: "/img/screenshots/screenshot05.avif", title: "LUT Filter Presets" },
          { src: "/img/screenshots/screenshot06.avif", title: "Minimalist Scrapbook Workflow" },
        ],
      },
      about: {
        title: "About the App",
        paragraph:
          "Photo Book Noir is a photo book app built for designing photo albums and collage layouts without a complicated workflow. Organize memories, add text, and prepare clean export files for print or sharing.",
        philosophy:
          "App addiction has become more and more of a problem - many apps today are built to keep us hooked rather than to help us. I built this app with the belief that technology should enrich life, not consume it.",
        goalsTitle: "What are the goals?",
        primaryGoals: [
          "Large photo books and albums",
          "Multiple export formats",
          "LUT filters and creative looks",
          "Fast photo import workflow",
        ],
        secondaryGoals: [
          "Add captions, text, and visual storytelling",
          "Minimalist scrapbook and collage design",
        ],
      },
      contact: {
        address: "Den Haag, Laan van Roos en Doorn 2514BC",
        phone: "",
        email: contactLinks.email,
        kicker: "Start a conversation",
        title: "Get In Touch",
        lead:
          "Choose the fastest path depending on what you need: direct support, product feedback, or a quick chat with the community.",
        actionsAria: "Primary contact actions",
        cards: [
          {
            eyebrow: "Support",
            title: "Need help with a project?",
            body: "Ask about the app, export workflow, or anything blocking your next photo book.",
            href: `mailto:${contactLinks.email}`,
            cta: "Email support",
          },
          {
            eyebrow: "Feedback",
            title: "Have an idea worth building?",
            body: "Send feature requests, rough concepts, or friction points you want improved next.",
            href: `mailto:${contactLinks.email}?subject=Feature%20Suggestion`,
            cta: "Share a feature idea",
          },
          {
            eyebrow: "Community",
            title: "Join the Discord room",
            body: "Follow product updates, ask quick questions, and stay close to the roadmap.",
            href: contactLinks.discord,
            cta: "Open Discord",
            external: true,
          },
        ],
        noteLabel: "Best for longer questions",
        noteBody:
          "Email is the right channel for support threads, detailed bug reports, or requests that need screenshots and context.",
        directDetailsKicker: "Direct details",
        directDetailsTitle: "Reach Photo Book Noir directly",
        details: {
          address: "Based in",
          phone: "Phone",
          email: "Email",
        },
        responseTitle: "Response rhythm",
        responseBody:
          "Messages are reviewed regularly, with Discord best for quick check-ins and email best for deeper follow-up.",
        elsewhereKicker: "Elsewhere",
        elsewhereIntro:
          "Find Photo Book Noir across the channels best suited for quick updates, deep dives, and behind-the-scenes notes.",
        socialLinksAria: "Social links",
        socialLinks: [
          {
            name: "LinkedIn",
            note: "Product updates and professional context",
            href: contactLinks.linkedin,
          },
          {
            name: "Bluesky",
            note: "Quick notes, previews, and experiments",
            href: contactLinks.bluesky,
          },
          {
            name: "TikTok",
            note: "Short-form process clips and walkthroughs",
            href: contactLinks.tiktok,
          },
          {
            name: "YouTube",
            note: "Longer demos, guides, and feature tours",
            href: contactLinks.youtube,
          },
        ],
      },
    },
    footer: {
      creditLine: "© 2023 Issaaf Kattan React Land Page Template.",
      designBy: "Design by",
      linksAria: "Footer links",
      languageLabel: "Language",
      credits: "Credits",
      privacy: "Privacy Policy",
    },
    cookie: {
      ariaLabel: "Cookie consent",
      textBefore:
        "We use a small cookie to remember your privacy choice and keep the site working as expected. You can read more in our ",
      linkLabel: "Privacy Policy",
      textAfter: ".",
      accept: "Accept cookies",
      essential: "Essential only",
    },
  },
  nl: {
    navigation: {
      brand: "Photo Book Noir",
      toggleLabel: "Navigatie openen",
      screenshots: "Screenshots",
      about: "Over",
      contact: "Contact en support",
      more: "Meer",
      credits: "Credits",
      privacy: "Privacybeleid",
      languageLabel: "Taal",
    },
    home: {
      header: {
        title: "Photo Book Noir",
        paragraph:
          "Maak minimalistische fotoboeken, fotoalbums en collage-layouts op iPhone en iPad met bijschriften, LUT-filters en exportbestanden die klaar zijn voor gebruik.",
        appStoreAlt: "Bekijk in de App Store",
        appStoreHref:
          "https://apps.apple.com/nl/app/photo-book-noir/id6749212233?l=nl-NL",
        downloadLabel: "Download DMG",
      },
      demo: {
        title: "Bekijk de app-demo",
        paragraph:
          "Een demo van de Auto Staging-functie",
        videoLabel: "Photo Book Noir demo-video",
      },
      screenshots: {
        title: "Screenshots",
        paragraph:
          "Bekijk de fotoboekmaker, albumeditor, collage-tools en exportworkflow van Photo Book Noir.",
        kicker: "Producttour",
        railLabel: "Kies een screenshot om uit te lichten",
        navLabel: "Navigatie voor uitgelichte screenshot",
        previous: "Vorige",
        next: "Volgende",
        previousAria: "Toon de vorige screenshot",
        nextAria: "Toon de volgende screenshot",
        close: "Sluiten",
        enlarge: "vergroten",
        featuredNow: "Nu uitgelicht",
        clickToPreview: "Klik om te bekijken",
        fallbackLabel: "Screenshot",
        images: [
          { src: "/img/screenshots/screenshot0.avif", title: "Fotoboekgalerij" },
          { src: "/img/screenshots/screenshot01.avif", title: "Fotoalbum-layouts" },
          { src: "/img/screenshots/screenshot02.avif", title: "Collage- en bewerkingstools" },
          { src: "/img/screenshots/screenshot03.avif", title: "Exporteren voor print of delen" },
          { src: "/img/screenshots/screenshot04.avif", title: "Bijschrift- en tekststyling" },
          { src: "/img/screenshots/screenshot05.avif", title: "LUT-filterpresets" },
          { src: "/img/screenshots/screenshot06.avif", title: "Minimalistische scrapbookworkflow" },
        ],
      },
      about: {
        title: "Over de app",
        paragraph:
          "Photo Book Noir is een fotoboekapp voor het ontwerpen van fotoalbums en collage-layouts zonder een ingewikkelde workflow. Orden herinneringen, voeg tekst toe en maak nette exportbestanden voor print of delen.",
        philosophy:
          "Appverslaving wordt steeds meer een probleem - veel apps zijn vandaag gebouwd om ons vast te houden in plaats van ons echt te helpen. Ik heb deze app gemaakt vanuit het idee dat technologie het leven moet verrijken, niet opslokken.",
        goalsTitle: "Wat zijn de doelen?",
        primaryGoals: [
          "Grote fotoboeken en albums",
          "Meerdere exportformaten",
          "LUT-filters en creatieve looks",
          "Snelle workflow voor het importeren van foto's",
        ],
        secondaryGoals: [
          "Bijschriften, tekst en visuele storytelling toevoegen",
          "Minimalistisch scrapbook- en collagedesign",
        ],
      },
      contact: {
        address: "Den Haag, Laan van Roos en Doorn 2514BC",
        phone: "",
        email: contactLinks.email,
        kicker: "Start een gesprek",
        title: "Neem contact op",
        lead:
          "Kies de snelste route voor wat je nodig hebt: directe support, productfeedback of een kort gesprek met de community.",
        actionsAria: "Belangrijkste contactacties",
        cards: [
          {
            eyebrow: "Support",
            title: "Hulp nodig bij een project?",
            body: "Vraag naar de app, de exportworkflow of iets dat je volgende fotoboek tegenhoudt.",
            href: `mailto:${contactLinks.email}`,
            cta: "Mail support",
          },
          {
            eyebrow: "Feedback",
            title: "Heb je een idee dat gebouwd moet worden?",
            body: "Stuur functieverzoeken, ruwe concepten of frictiepunten die je als volgende verbeterd wilt zien.",
            href: `mailto:${contactLinks.email}?subject=Feature%20Suggestion`,
            cta: "Deel een feature-idee",
          },
          {
            eyebrow: "Community",
            title: "Kom in de Discord-room",
            body: "Volg productupdates, stel snelle vragen en blijf dicht bij de roadmap.",
            href: contactLinks.discord,
            cta: "Open Discord",
            external: true,
          },
        ],
        noteLabel: "Beste voor langere vragen",
        noteBody:
          "E-mail is het juiste kanaal voor supportgesprekken, uitgebreide bugmeldingen of verzoeken waarbij screenshots en context nodig zijn.",
        directDetailsKicker: "Directe gegevens",
        directDetailsTitle: "Neem direct contact op met Photo Book Noir",
        details: {
          address: "Gevestigd in",
          phone: "Telefoon",
          email: "E-mail",
        },
        responseTitle: "Reactieritme",
        responseBody:
          "Berichten worden regelmatig bekeken. Discord is het best voor snelle check-ins en e-mail voor diepere opvolging.",
        elsewhereKicker: "Elders",
        elsewhereIntro:
          "Vind Photo Book Noir op de kanalen die het best werken voor snelle updates, diepere uitleg en notities achter de schermen.",
        socialLinksAria: "Sociale links",
        socialLinks: [
          {
            name: "LinkedIn",
            note: "Productupdates en professionele context",
            href: contactLinks.linkedin,
          },
          {
            name: "Bluesky",
            note: "Snelle notities, previews en experimenten",
            href: contactLinks.bluesky,
          },
          {
            name: "TikTok",
            note: "Korte procesclips en walkthroughs",
            href: contactLinks.tiktok,
          },
          {
            name: "YouTube",
            note: "Langere demo's, handleidingen en producttours",
            href: contactLinks.youtube,
          },
        ],
      },
    },
    footer: {
      creditLine: "© 2023 Issaaf Kattan React Land Page Template.",
      designBy: "Ontwerp door",
      linksAria: "Footerlinks",
      languageLabel: "Taal",
      credits: "Credits",
      privacy: "Privacybeleid",
    },
    cookie: {
      ariaLabel: "Cookie-toestemming",
      textBefore:
        "We gebruiken een kleine cookie om je privacykeuze te onthouden en de site correct te laten werken. Lees meer in ons ",
      linkLabel: "Privacybeleid",
      textAfter: ".",
      accept: "Cookies accepteren",
      essential: "Alleen essentieel",
    },
  },
  fr: {
    navigation: {
      brand: "Photo Book Noir",
      toggleLabel: "Afficher la navigation",
      screenshots: "Captures",
      about: "A propos",
      contact: "Contact et support",
      more: "Plus",
      credits: "Credits",
      privacy: "Politique de confidentialite",
      languageLabel: "Langue",
    },
    home: {
      header: {
        title: "Photo Book Noir",
        paragraph:
          "Creez des livres photo minimalistes, des albums photo et des mises en page de collage sur iPhone et iPad avec des legendes, des filtres LUT et des fichiers prets a exporter.",
        appStoreAlt: "Voir dans l'App Store",
        appStoreHref:
          "https://apps.apple.com/nl/app/photo-book-noir/id6749212233?l=fr-FR",
        downloadLabel: "Telecharger le DMG",
      },
      demo: {
        title: "Voir la demo de l'application",
        paragraph:
          "Une demo de la fonctionnalite Auto Staging",
        videoLabel: "Video de demonstration Photo Book Noir",
      },
      screenshots: {
        title: "Captures",
        paragraph:
          "Decouvrez le createur de livres photo, l'editeur d'albums, les outils de collage et le flux d'export de Photo Book Noir.",
        kicker: "Visite du produit",
        railLabel: "Choisissez une capture a mettre en avant",
        navLabel: "Navigation de la capture mise en avant",
        previous: "Precedent",
        next: "Suivant",
        previousAria: "Afficher la capture precedente",
        nextAria: "Afficher la capture suivante",
        close: "Fermer",
        enlarge: "agrandir",
        featuredNow: "Mise en avant",
        clickToPreview: "Cliquer pour previsualiser",
        fallbackLabel: "Capture",
        images: [
          { src: "/img/screenshots/screenshot0.avif", title: "Galerie de livres photo" },
          { src: "/img/screenshots/screenshot01.avif", title: "Mises en page d'albums photo" },
          { src: "/img/screenshots/screenshot02.avif", title: "Outils de collage et d'edition" },
          { src: "/img/screenshots/screenshot03.avif", title: "Exporter pour l'impression ou le partage" },
          { src: "/img/screenshots/screenshot04.avif", title: "Styles de legendes et de texte" },
          { src: "/img/screenshots/screenshot05.avif", title: "Presets de filtres LUT" },
          { src: "/img/screenshots/screenshot06.avif", title: "Flux scrapbook minimaliste" },
        ],
      },
      about: {
        title: "A propos de l'application",
        paragraph:
          "Photo Book Noir est une application de livre photo concue pour creer des albums photo et des mises en page de collage sans flux de travail complique. Organisez vos souvenirs, ajoutez du texte et preparez des fichiers propres pour l'impression ou le partage.",
        philosophy:
          "L'addiction aux applications devient un probleme de plus en plus present - beaucoup d'apps sont aujourd'hui construites pour nous retenir plutot que pour nous aider. J'ai cree cette application avec l'idee que la technologie doit enrichir la vie, pas la devorer.",
        goalsTitle: "Quels sont les objectifs ?",
        primaryGoals: [
          "Grands livres photo et albums",
          "Plusieurs formats d'export",
          "Filtres LUT et rendus creatifs",
          "Importation rapide des photos",
        ],
        secondaryGoals: [
          "Ajouter des legendes, du texte et une narration visuelle",
          "Design de scrapbook et de collage minimaliste",
        ],
      },
      contact: {
        address: "La Haye, Laan van Roos en Doorn 2514BC",
        phone: "",
        email: contactLinks.email,
        kicker: "Lancer la conversation",
        title: "Entrer en contact",
        lead:
          "Choisissez le chemin le plus rapide selon votre besoin : support direct, retour produit ou echange rapide avec la communaute.",
        actionsAria: "Actions principales de contact",
        cards: [
          {
            eyebrow: "Support",
            title: "Besoin d'aide sur un projet ?",
            body: "Posez vos questions sur l'application, le flux d'export ou tout blocage sur votre prochain livre photo.",
            href: `mailto:${contactLinks.email}`,
            cta: "Contacter le support",
          },
          {
            eyebrow: "Feedback",
            title: "Une idee qui merite d'etre construite ?",
            body: "Envoyez vos demandes de fonctionnalites, concepts bruts ou points de friction a ameliorer ensuite.",
            href: `mailto:${contactLinks.email}?subject=Feature%20Suggestion`,
            cta: "Partager une idee",
          },
          {
            eyebrow: "Communaute",
            title: "Rejoindre le salon Discord",
            body: "Suivez les mises a jour produit, posez des questions rapides et restez proche de la feuille de route.",
            href: contactLinks.discord,
            cta: "Ouvrir Discord",
            external: true,
          },
        ],
        noteLabel: "Ideal pour les questions detaillees",
        noteBody:
          "L'e-mail reste le bon canal pour les demandes de support, les rapports de bug detailles ou les requetes qui exigent des captures et du contexte.",
        directDetailsKicker: "Coordonnees directes",
        directDetailsTitle: "Contacter directement Photo Book Noir",
        details: {
          address: "Base a",
          phone: "Telephone",
          email: "E-mail",
        },
        responseTitle: "Rythme de reponse",
        responseBody:
          "Les messages sont examines regulierement. Discord convient aux questions rapides, l'e-mail au suivi approfondi.",
        elsewhereKicker: "Ailleurs",
        elsewhereIntro:
          "Retrouvez Photo Book Noir sur les canaux les mieux adaptes aux mises a jour rapides, aux explications detaillees et aux notes en coulisses.",
        socialLinksAria: "Liens sociaux",
        socialLinks: [
          {
            name: "LinkedIn",
            note: "Mises a jour produit et contexte professionnel",
            href: contactLinks.linkedin,
          },
          {
            name: "Bluesky",
            note: "Notes rapides, apercus et experimentations",
            href: contactLinks.bluesky,
          },
          {
            name: "TikTok",
            note: "Clips courts du processus et walkthroughs",
            href: contactLinks.tiktok,
          },
          {
            name: "YouTube",
            note: "Demos longues, guides et visites de fonctionnalites",
            href: contactLinks.youtube,
          },
        ],
      },
    },
    footer: {
      creditLine: "© 2023 Issaaf Kattan React Land Page Template.",
      designBy: "Design par",
      linksAria: "Liens de pied de page",
      languageLabel: "Langue",
      credits: "Credits",
      privacy: "Politique de confidentialite",
    },
    cookie: {
      ariaLabel: "Consentement aux cookies",
      textBefore:
        "Nous utilisons un petit cookie pour memoriser votre choix de confidentialite et garder le site fonctionnel. Vous pouvez en savoir plus dans notre ",
      linkLabel: "Politique de confidentialite",
      textAfter: ".",
      accept: "Accepter les cookies",
      essential: "Essentiels seulement",
    },
  },
};

export const getSiteContent = (language) => siteContent[language] || siteContent.en;