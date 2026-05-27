const privacyPage = {
  en: {
    title: "Privacy Policy",
    effectiveDateLabel: "Effective Date",
    effectiveDate: "27 May 2026",
    intro:
      "Photobook Noir respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile and desktop application and website, in accordance with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).",
    backHome: "Back Home",
    articleAria: "Privacy Policy",
    tocAria: "Table of contents",
    tocTitle: "On this page",
  },
  nl: {
    title: "Privacybeleid",
    effectiveDateLabel: "Ingangsdatum",
    effectiveDate: "27 mei 2026",
    intro:
      "Photobook Noir respecteert je privacy en zet zich in om je persoonsgegevens te beschermen. Dit privacybeleid legt uit hoe we je informatie verzamelen, gebruiken en beschermen wanneer je onze mobiele en desktopapplicatie en website gebruikt, in overeenstemming met de General Data Protection Regulation (GDPR) en de California Consumer Privacy Act (CCPA).",
    backHome: "Terug naar home",
    articleAria: "Privacybeleid",
    tocAria: "Inhoudsopgave",
    tocTitle: "Op deze pagina",
  },
  fr: {
    title: "Politique de confidentialite",
    effectiveDateLabel: "Date d'effet",
    effectiveDate: "27 mai 2026",
    intro:
      "Photobook Noir respecte votre vie privee et s'engage a proteger vos donnees personnelles. Cette politique de confidentialite explique comment nous collectons, utilisons et protegons vos informations lorsque vous utilisez notre application mobile, notre application desktop et notre site web, conformement au RGPD et au California Consumer Privacy Act (CCPA).",
    backHome: "Retour a l'accueil",
    articleAria: "Politique de confidentialite",
    tocAria: "Table des matieres",
    tocTitle: "Sur cette page",
  },
};

const privacySections = [
  {
    id: "information-we-collect",
    number: "1",
    title: {
      en: "Information We Collect",
      nl: "Welke informatie we verzamelen",
      fr: "Informations que nous collectons",
    },
    paragraphs: {
      en: [
        "We collect only the minimum necessary user-related information to provide and maintain your account and essential app features.",
        "What we collect:",
      ],
      nl: [
        "We verzamelen alleen de minimaal noodzakelijke gebruikersinformatie om je account en essentiële appfuncties te leveren en te onderhouden.",
        "Wat we verzamelen:",
      ],
      fr: [
        "Nous collectons uniquement les informations strictement necessaires pour fournir et maintenir votre compte ainsi que les fonctionnalites essentielles de l'application.",
        "Ce que nous collectons :",
      ],
    },
    bulletGroups: {
      en: [
        {
          label: "Account information",
          items: [
            "Email address for login and account management",
            "Username or display name",
            "Encrypted password (we do not store plaintext passwords)",
          ],
        },
        {
          label: "Device information",
          items: ["Device type and operating system version used for app compatibility"],
        },
        {
          label: "Newsletter subscription",
          items: ["Email address and consent timestamp when you subscribe to website updates"],
        },
      ],
      nl: [
        {
          label: "Accountgegevens",
          items: [
            "E-mailadres voor login en accountbeheer",
            "Gebruikersnaam of schermnaam",
            "Versleuteld wachtwoord (we slaan geen platte tekst wachtwoorden op)",
          ],
        },
        {
          label: "Apparaatgegevens",
          items: ["Type apparaat en besturingssysteemversie voor compatibiliteit van de app"],
        },
        {
          label: "Nieuwsbriefaanmelding",
          items: ["E-mailadres en toestemmingstijdstip wanneer je je aanmeldt voor website-updates"],
        },
      ],
      fr: [
        {
          label: "Informations de compte",
          items: [
            "Adresse e-mail pour la connexion et la gestion du compte",
            "Nom d'utilisateur ou nom affiche",
            "Mot de passe chiffre (nous ne stockons pas les mots de passe en clair)",
          ],
        },
        {
          label: "Informations sur l'appareil",
          items: ["Type d'appareil et version du systeme d'exploitation pour la compatibilite de l'application"],
        },
        {
          label: "Inscription aux nouvelles",
          items: ["Adresse e-mail et horodatage du consentement lorsque vous vous inscrivez aux nouvelles du site"],
        },
      ],
    },
    callout: {
      en: {
        label: "Important",
        text: "We do not collect or upload your photos or media in any way.",
      },
      nl: {
        label: "Belangrijk",
        text: "We verzamelen of uploaden je foto's of media op geen enkele manier.",
      },
      fr: {
        label: "Important",
        text: "Nous ne collectons ni ne telechargeons vos photos ou vos medias d'aucune facon.",
      },
    },
  },
  {
    id: "how-we-use-your-information",
    number: "2",
    title: {
      en: "How We Use Your Information",
      nl: "Hoe we je informatie gebruiken",
      fr: "Comment nous utilisons vos informations",
    },
    paragraphs: {
      en: ["We may use your information for the following purposes once these features are enabled:"],
      nl: ["We kunnen je informatie voor de volgende doelen gebruiken zodra deze functies zijn ingeschakeld:"],
      fr: ["Nous pouvons utiliser vos informations aux fins suivantes une fois ces fonctionnalites activees :"],
    },
    bullets: {
      en: [
        "Create and manage your account",
        "Provide access to app features",
        "Respond to support requests",
        "Send optional product updates when you subscribe",
        "Comply with legal obligations when applicable",
      ],
      nl: [
        "Je account aanmaken en beheren",
        "Toegang geven tot appfuncties",
        "Reageren op supportverzoeken",
        "Optionele productupdates sturen wanneer je je aanmeldt",
        "Voldoen aan wettelijke verplichtingen indien van toepassing",
      ],
      fr: [
        "Creer et gerer votre compte",
        "Fournir l'acces aux fonctionnalites de l'application",
        "Repondre aux demandes de support",
        "Envoyer des nouvelles produit optionnelles lorsque vous vous inscrivez",
        "Respecter les obligations legales si necessaire",
      ],
    },
    trailingParagraphs: {
      en: ["We do not sell or share your data for marketing or advertising purposes."],
      nl: ["We verkopen of delen je gegevens niet voor marketing- of advertentiedoeleinden."],
      fr: ["Nous ne vendons ni ne partageons vos donnees a des fins marketing ou publicitaires."],
    },
  },
  {
    id: "legal-basis-gdpr",
    number: "3",
    title: {
      en: "Legal Basis for Processing (GDPR)",
      nl: "Rechtsgrond voor verwerking (GDPR)",
      fr: "Base legale du traitement (RGPD)",
    },
    paragraphs: {
      en: ["Under GDPR, we rely on the following legal bases:"],
      nl: ["Onder de GDPR steunen we op de volgende rechtsgronden:"],
      fr: ["Au titre du RGPD, nous nous appuyons sur les bases legales suivantes :"],
    },
    bullets: {
      en: [
        { label: "Performance of a contract", text: "To deliver app services." },
        { label: "Consent", text: "For optional features such as cloud backup or newsletters." },
        { label: "Legitimate interest", text: "To improve and secure the app experience." },
      ],
      nl: [
        { label: "Uitvoering van een overeenkomst", text: "Om appdiensten te leveren." },
        { label: "Toestemming", text: "Voor optionele functies zoals cloudback-up of nieuwsbrieven." },
        { label: "Gerechtvaardigd belang", text: "Om de app-ervaring te verbeteren en te beveiligen." },
      ],
      fr: [
        { label: "Execution d'un contrat", text: "Pour fournir les services de l'application." },
        { label: "Consentement", text: "Pour les fonctionnalites optionnelles telles que la sauvegarde cloud ou les newsletters." },
        { label: "Interet legitime", text: "Pour ameliorer et securiser l'experience de l'application." },
      ],
    },
  },
  {
    id: "ccpa-disclosures",
    number: "4",
    title: {
      en: "CCPA Disclosures (for California Residents)",
      nl: "CCPA-mededelingen (voor inwoners van Californie)",
      fr: "Informations CCPA (pour les residents de Californie)",
    },
    paragraphs: {
      en: [
        "Under the CCPA, California residents have specific rights regarding their personal information.",
        "Your CCPA rights:",
      ],
      nl: [
        "Onder de CCPA hebben inwoners van Californie specifieke rechten met betrekking tot hun persoonsgegevens.",
        "Je CCPA-rechten:",
      ],
      fr: [
        "En vertu du CCPA, les residents de Californie disposent de droits specifiques concernant leurs informations personnelles.",
        "Vos droits CCPA :",
      ],
    },
    bullets: {
      en: [
        { label: "Right to Know", text: "Request disclosure of the categories and specific pieces of personal information we have collected about you." },
        { label: "Right to Delete", text: "Request deletion of your personal information, subject to exceptions." },
        { label: "Right to Opt-Out", text: "We do not sell your data, so there is no need to opt out of data sales." },
        { label: "Right to Non-Discrimination", text: "You will not receive discriminatory treatment for exercising your privacy rights." },
      ],
      nl: [
        { label: "Recht om te weten", text: "Vraag om inzicht in de categorieen en concrete persoonsgegevens die we over je hebben verzameld." },
        { label: "Recht op verwijdering", text: "Vraag om verwijdering van je persoonsgegevens, behoudens uitzonderingen." },
        { label: "Recht op opt-out", text: "We verkopen je gegevens niet, dus een opt-out van gegevensverkoop is niet nodig." },
        { label: "Recht op non-discriminatie", text: "Je wordt niet discriminerend behandeld wanneer je je privacyrechten uitoefent." },
      ],
      fr: [
        { label: "Droit de savoir", text: "Demander la divulgation des categories et des elements precis d'informations personnelles que nous avons collectes a votre sujet." },
        { label: "Droit a la suppression", text: "Demander la suppression de vos informations personnelles, sous reserve des exceptions applicables." },
        { label: "Droit d'opposition a la vente", text: "Nous ne vendons pas vos donnees ; il n'est donc pas necessaire d'exercer une opposition a la vente de donnees." },
        { label: "Droit a la non-discrimination", text: "Vous ne subirez aucun traitement discriminatoire pour avoir exerce vos droits a la vie privee." },
      ],
    },
    emailLine: {
      en: { prefix: "To exercise any of these rights, please contact us at", email: "office@photobook-noir.com" },
      nl: { prefix: "Om een van deze rechten uit te oefenen, neem contact met ons op via", email: "office@photobook-noir.com" },
      fr: { prefix: "Pour exercer l'un de ces droits, veuillez nous contacter a", email: "office@photobook-noir.com" },
    },
  },
  {
    id: "data-security",
    number: "5",
    title: {
      en: "Data Security",
      nl: "Gegevensbeveiliging",
      fr: "Securite des donnees",
    },
    paragraphs: {
      en: [
        "Data is stored in Microsoft Azure Cloud. We take reasonable technical and organizational measures to protect your data from unauthorized access, alteration, or destruction. All user data, including login credentials, is securely stored and encrypted.",
      ],
      nl: [
        "Gegevens worden opgeslagen in Microsoft Azure Cloud. We nemen redelijke technische en organisatorische maatregelen om je gegevens te beschermen tegen ongeautoriseerde toegang, wijziging of vernietiging. Alle gebruikersgegevens, inclusief inloggegevens, worden veilig opgeslagen en versleuteld.",
      ],
      fr: [
        "Les donnees sont stockees dans Microsoft Azure Cloud. Nous appliquons des mesures techniques et organisationnelles raisonnables pour proteger vos donnees contre l'acces non autorise, l'alteration ou la destruction. Toutes les donnees utilisateur, y compris les identifiants de connexion, sont stockees de maniere securisee et chiffrees.",
      ],
    },
  },
  {
    id: "data-retention",
    number: "6",
    title: {
      en: "Data Retention",
      nl: "Bewaartermijn van gegevens",
      fr: "Conservation des donnees",
    },
    paragraphs: {
      en: [
        "We retain your personal information only as long as necessary to provide our services or comply with legal requirements. You can request data deletion at any time.",
        "Newsletter subscriber emails are retained until you unsubscribe or request deletion.",
      ],
      nl: [
        "We bewaren je persoonsgegevens alleen zolang als nodig is om onze diensten te leveren of aan wettelijke verplichtingen te voldoen. Je kunt op elk moment om verwijdering van gegevens vragen.",
        "E-mailadressen voor de nieuwsbrief bewaren we totdat je je afmeldt of om verwijdering vraagt.",
      ],
      fr: [
        "Nous conservons vos informations personnelles uniquement pendant la duree necessaire a la fourniture de nos services ou au respect de nos obligations legales. Vous pouvez demander la suppression de vos donnees a tout moment.",
        "Les e-mails d'inscription aux nouvelles sont conserves jusqu'a votre desinscription ou votre demande de suppression.",
      ],
    },
  },
  {
    id: "third-party-services",
    number: "7",
    title: {
      en: "Third-Party Services",
      nl: "Diensten van derden",
      fr: "Services tiers",
    },
    paragraphs: {
      en: [
        "Photobook Noir may integrate optional services such as cloud backup. Those services are governed by their own privacy policies, and we recommend reviewing them before enabling such features.",
      ],
      nl: [
        "Photobook Noir kan optionele diensten integreren, zoals cloudback-up. Die diensten vallen onder hun eigen privacybeleid en we raden aan die te bekijken voordat je zulke functies inschakelt.",
      ],
      fr: [
        "Photobook Noir peut integrer des services optionnels tels que la sauvegarde cloud. Ces services sont regis par leurs propres politiques de confidentialite, et nous vous recommandons de les consulter avant d'activer ces fonctionnalites.",
      ],
    },
  },
  {
    id: "international-data-transfers",
    number: "8",
    title: {
      en: "International Data Transfers",
      nl: "Internationale doorgifte van gegevens",
      fr: "Transferts internationaux de donnees",
    },
    paragraphs: {
      en: ["For users in the European Economic Area, data will not be transferred outside the EU."],
      nl: ["Voor gebruikers in de Europese Economische Ruimte worden gegevens niet buiten de EU doorgegeven."],
      fr: ["Pour les utilisateurs de l'Espace economique europeen, les donnees ne seront pas transferees hors de l'Union europeenne."],
    },
  },
  {
    id: "children-privacy",
    number: "9",
    title: {
      en: "Children's Privacy",
      nl: "Privacy van kinderen",
      fr: "Vie privee des enfants",
    },
    paragraphs: {
      en: [
        "Photobook Noir is not intended for children under 13, and we do not knowingly collect personal information from children.",
      ],
      nl: [
        "Photobook Noir is niet bedoeld voor kinderen jonger dan 13 jaar en we verzamelen niet bewust persoonsgegevens van kinderen.",
      ],
      fr: [
        "Photobook Noir n'est pas destine aux enfants de moins de 13 ans, et nous ne collectons pas sciemment d'informations personnelles concernant des enfants.",
      ],
    },
  },
  {
    id: "website-cookies",
    number: "10",
    title: {
      en: "Website Cookies",
      nl: "Websitecookies",
      fr: "Cookies du site web",
    },
    paragraphs: {
      en: [
        "Our website uses a small cookie to remember whether you accepted cookies or chose essential-only storage. This cookie does not track you across other websites and is only used to avoid showing the consent banner on every visit.",
      ],
      nl: [
        "Onze website gebruikt een kleine cookie om te onthouden of je cookies hebt geaccepteerd of alleen essentiële opslag hebt gekozen. Deze cookie volgt je niet over andere websites en wordt alleen gebruikt om te voorkomen dat de toestemmingsbanner bij elk bezoek opnieuw verschijnt.",
      ],
      fr: [
        "Notre site utilise un petit cookie pour memoriser si vous avez accepte les cookies ou choisi un stockage strictement essentiel. Ce cookie ne vous suit pas sur d'autres sites et sert uniquement a eviter d'afficher la banniere de consentement a chaque visite.",
      ],
    },
    keyValues: {
      en: [
        { label: "Cookie name", value: "photobook_cookie_consent" },
        { label: "Purpose", value: "Store your cookie preference" },
        { label: "Duration", value: "Up to 180 days" },
      ],
      nl: [
        { label: "Cookienaam", value: "photobook_cookie_consent" },
        { label: "Doel", value: "Je cookievoorkeur opslaan" },
        { label: "Duur", value: "Tot 180 dagen" },
      ],
      fr: [
        { label: "Nom du cookie", value: "photobook_cookie_consent" },
        { label: "Finalite", value: "Memoriser votre preference en matiere de cookies" },
        { label: "Duree", value: "Jusqu'a 180 jours" },
      ],
    },
  },
  {
    id: "changes-to-policy",
    number: "11",
    title: {
      en: "Changes to This Policy",
      nl: "Wijzigingen in dit beleid",
      fr: "Modifications de cette politique",
    },
    paragraphs: {
      en: [
        "We may update this Privacy Policy from time to time. Changes will be posted in the app or on our website. Continued use of the app means you accept any changes.",
      ],
      nl: [
        "We kunnen dit privacybeleid van tijd tot tijd wijzigen. Wijzigingen worden gepubliceerd in de app of op onze website. Voortgezet gebruik van de app betekent dat je die wijzigingen accepteert.",
      ],
      fr: [
        "Nous pouvons mettre a jour cette politique de confidentialite de temps a autre. Les modifications seront publiees dans l'application ou sur notre site web. L'utilisation continue de l'application signifie que vous acceptez ces changements.",
      ],
    },
  },
  {
    id: "contact-us",
    number: "12",
    title: {
      en: "Contact Us",
      nl: "Contact opnemen",
      fr: "Nous contacter",
    },
    paragraphs: {
      en: ["If you have questions or want to exercise your data rights under GDPR or CCPA, contact us at:"],
      nl: ["Als je vragen hebt of je gegevensrechten onder de GDPR of CCPA wilt uitoefenen, neem dan contact met ons op via:"],
      fr: ["Si vous avez des questions ou souhaitez exercer vos droits en matiere de donnees au titre du RGPD ou du CCPA, contactez-nous a :"],
    },
    contactDetails: {
      en: [
        { label: "Email", value: "office@photobook-noir.com", href: "mailto:office@photobook-noir.com" },
        { label: "Website", value: "www.photobook-noir.com", href: "https://www.photobook-noir.com", external: true },
      ],
      nl: [
        { label: "E-mail", value: "office@photobook-noir.com", href: "mailto:office@photobook-noir.com" },
        { label: "Website", value: "www.photobook-noir.com", href: "https://www.photobook-noir.com", external: true },
      ],
      fr: [
        { label: "E-mail", value: "office@photobook-noir.com", href: "mailto:office@photobook-noir.com" },
        { label: "Site web", value: "www.photobook-noir.com", href: "https://www.photobook-noir.com", external: true },
      ],
    },
  },
];

const localizeSection = (section, language) => ({
  id: section.id,
  number: section.number,
  title: section.title[language],
  paragraphs: section.paragraphs?.[language] || [],
  trailingParagraphs: section.trailingParagraphs?.[language] || [],
  bullets: section.bullets?.[language] || [],
  bulletGroups: section.bulletGroups?.[language] || [],
  callout: section.callout?.[language] || null,
  keyValues: section.keyValues?.[language] || [],
  emailLine: section.emailLine?.[language] || null,
  contactDetails: section.contactDetails?.[language] || [],
});

export const getPrivacyContent = (language) => {
  const page = privacyPage[language] || privacyPage.en;

  return {
    ...page,
    sections: privacySections.map((section) => localizeSection(section, language)),
  };
};