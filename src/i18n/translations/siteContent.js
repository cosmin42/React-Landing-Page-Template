import { DEFAULT_LANGUAGE, languageOptions } from "../localeConfig";
import { contextualSiteLocales } from "./contextualSiteLocales";

export { languageOptions };

const contactLinks = {
  email: "office@photobook-noir.com",
  discord: "https://discord.gg/WJPDWy3Sfh",
};

const creditLine = "© 2023 Issaaf Kattan React Land Page Template.";
const appStoreBaseHref = "https://apps.apple.com/nl/app/photo-book-noir/id6749212233";

const mergeDeep = (baseValue, overrideValue) => {
  if (overrideValue === undefined) {
    return baseValue;
  }

  if (Array.isArray(baseValue)) {
    return overrideValue;
  }

  if (baseValue && typeof baseValue === "object") {
    const merged = { ...baseValue };

    Object.entries(overrideValue || {}).forEach(([key, value]) => {
      merged[key] = key in baseValue ? mergeDeep(baseValue[key], value) : value;
    });

    return merged;
  }

  return overrideValue;
};

const buildAppStoreHref = (storeLanguage) => `${appStoreBaseHref}?l=${storeLanguage}`;

const baseLocale = {
  navigation: {
    brand: "Photo Book Noir",
    toggleLabel: "Toggle navigation",
    screenshots: "Screenshots",
    about: "About",
    subscribe: "Subscribe",
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
        "Design clean photo albums and collage layouts with captions, LUT filters, and export-ready files.",
      appStoreAlt: "View on the App Store",
      appStoreHref: buildAppStoreHref("en-GB"),
      downloadLabel: "Download DMG",
    },
    demo: {
      title: "Demo",
      paragraph: "A demo of the Auto Staging feature",
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
        { src: "/img/screenshots/screenshot06.avif", title: "Scrapbook Design" },
      ],
    },
    about: {
      title: "About the App",
      paragraph:
        "Photo Book Noir is a photo book app for designing albums and collage layouts. Organize memories, add text, and prepare clean export files for print or sharing.",
      philosophy:
        "App addiction has become more and more of a problem - many apps today are built to keep us hooked rather than to help us. I built this app with the belief that technology should enrich life, not consume it.",
      goalsTitle: "What are the goals?",
      primaryGoals: [
        "Large photo books and albums",
        "Multiple export formats",
        "LUT filters and creative looks",
        "Fast photo import",
      ],
      secondaryGoals: [
        "Add captions, text, and visual storytelling",
        "Scrapbook and collage design",
      ],
    },
    subscribe: {
      kicker: "Updates",
      title: "Stay close",
      lead:
        "Get concise product updates, TestFlight notes, and release news. No tracking pixels, no spam.",
      bullets: [
        "Feature progress and release notes",
        "Private beta and TestFlight updates",
        "Unsubscribe anytime by email",
      ],
      emailLabel: "Email address",
      emailPlaceholder: "you@example.com",
      consentLabel:
        "I agree to receive occasional Photo Book Noir updates by email and understand I can ask to unsubscribe at any time.",
      privacyPrefix: "Your email is stored securely in Azure and used only for these updates.",
      privacyLinkLabel: "Privacy Policy",
      buttonLabel: "Subscribe",
      submittingLabel: "Subscribing...",
      successMessage: "Thanks, you are on the list.",
      errorMessage: "Subscription failed. Please try again later.",
      validationEmail: "Enter a valid email address.",
      validationConsent: "Confirm that you want to receive updates.",
      captchaMissing: "Complete the security check before subscribing.",
    },
    contact: {
      address: "Den Haag, Laan van Roos en Doorn",
      phone: "",
      email: contactLinks.email,
      kicker: "Contact",
      title: "Get In Touch",
      lead:
        "Questions, support, or feature ideas? Send an email, or join Discord for quick community updates.",
      actionsAria: "Contact options",
      cards: [
        {
          eyebrow: "Support",
          title: "Email Photo Book Noir",
          body: "Ask about the app, exporting, or anything blocking your next photo book.",
          href: `mailto:${contactLinks.email}`,
          cta: "Email support",
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
      directDetailsTitle: "Contact details",
      details: {
        address: "Based in",
        phone: "Phone",
        email: "Email",
      },
    },
  },
  footer: {
    creditLine,
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
};

const buildContactCards = (cards = baseLocale.home.contact.cards) =>
  cards.map((card, index) => ({
    ...baseLocale.home.contact.cards[index],
    ...card,
    href: index === 0 ? `mailto:${contactLinks.email}` : contactLinks.discord,
    external: index === 1,
  }));

const createLocale = (storeLanguage, overrides = {}) => {
  const merged = mergeDeep(baseLocale, overrides);

  return {
    ...merged,
    navigation: {
      brand: "Photo Book Noir",
      ...merged.navigation,
    },
    home: {
      ...merged.home,
      header: {
        ...merged.home.header,
        title: "Photo Book Noir",
        appStoreHref: buildAppStoreHref(storeLanguage),
      },
      contact: {
        ...merged.home.contact,
        address: merged.home.contact.address || baseLocale.home.contact.address,
        phone: "",
        email: contactLinks.email,
        cards: buildContactCards(merged.home.contact.cards),
      },
    },
    footer: {
      ...merged.footer,
      creditLine,
    },
  };
};

export const siteContent = {
  en: createLocale("en-GB"),
  nl: createLocale("nl-NL", {
    navigation: {
      toggleLabel: "Navigatie openen",
      screenshots: "Screenshots",
      about: "Over",
      subscribe: "Updates",
      contact: "Contact en support",
      more: "Meer",
      credits: "Credits",
      privacy: "Privacybeleid",
      languageLabel: "Taal",
    },
    home: {
      header: {
        paragraph:
          "Maak minimalistische fotoboeken, fotoalbums en collage-layouts op macOS en iPad met bijschriften, LUT-filters en exportbestanden die klaar zijn voor gebruik.",
        appStoreAlt: "Bekijk in de App Store",
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
      subscribe: {
        title: "Blijf op de hoogte",
        lead:
          "Ontvang korte productupdates, TestFlight-notities en release-nieuws. Geen trackingpixels, geen spam.",
        bullets: [
          "Voortgang van functies en release-notities",
          "Private beta- en TestFlight-updates",
          "Op elk moment afmelden via e-mail",
        ],
        emailLabel: "E-mailadres",
        emailPlaceholder: "jij@example.com",
        consentLabel:
          "Ik ga akkoord met af en toe Photo Book Noir-updates per e-mail en begrijp dat ik op elk moment kan vragen om afmelding.",
        privacyPrefix: "Je e-mailadres wordt veilig in Azure opgeslagen en alleen voor deze updates gebruikt.",
        privacyLinkLabel: "Privacybeleid",
        buttonLabel: "Aanmelden",
        submittingLabel: "Aanmelden...",
        successMessage: "Dank je, je staat op de lijst.",
        errorMessage: "Aanmelden lukte niet. Probeer het later opnieuw.",
        validationEmail: "Vul een geldig e-mailadres in.",
        validationConsent: "Bevestig dat je updates wilt ontvangen.",
        captchaMissing: "Rond de beveiligingscontrole af voordat je je aanmeldt.",
      },
      contact: {
        title: "Neem contact op",
        lead:
          "Vragen, support of feature-ideeën? Stuur een e-mail of kom op Discord voor snelle community-updates.",
        actionsAria: "Contactopties",
        cards: [
          {
            eyebrow: "Support",
            title: "Mail Photo Book Noir",
            body: "Vraag naar de app, de exportworkflow of iets dat je volgende fotoboek tegenhoudt.",
            cta: "Mail support",
          },
          {
            eyebrow: "Community",
            title: "Kom in de Discord-room",
            body: "Volg productupdates, stel snelle vragen en blijf dicht bij de roadmap.",
            cta: "Open Discord",
          },
        ],
        directDetailsTitle: "Contactgegevens",
        details: {
          address: "Gevestigd in",
          phone: "Telefoon",
          email: "E-mail",
        },
      },
    },
    footer: {
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
      accept: "Cookies accepteren",
      essential: "Alleen essentieel",
    },
  }),
  fr: createLocale("fr-FR", {
    navigation: {
      toggleLabel: "Afficher la navigation",
      screenshots: "Captures",
      about: "A propos",
      subscribe: "S'abonner",
      contact: "Contact et support",
      more: "Plus",
      credits: "Credits",
      privacy: "Politique de confidentialite",
      languageLabel: "Langue",
    },
    home: {
      header: {
        paragraph:
          "Creez des livres photo minimalistes, des albums photo et des mises en page de collage sur macOS et iPad avec des legendes, des filtres LUT et des fichiers prets a exporter.",
        appStoreAlt: "Voir dans l'App Store",
        downloadLabel: "Telecharger le DMG",
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
      subscribe: {
        title: "Restez informe",
        lead:
          "Recevez des mises a jour produit, des notes TestFlight et les nouvelles versions. Pas de pixels de suivi, pas de spam.",
        bullets: [
          "Avancement des fonctionnalites et notes de version",
          "Actualites beta privee et TestFlight",
          "Desinscription possible par e-mail",
        ],
        emailLabel: "Adresse e-mail",
        emailPlaceholder: "vous@example.com",
        consentLabel:
          "J'accepte de recevoir occasionnellement des nouvelles de Photo Book Noir par e-mail et je comprends que je peux demander la desinscription a tout moment.",
        privacyPrefix: "Votre e-mail est stocke de maniere securisee dans Azure et utilise uniquement pour ces nouvelles.",
        privacyLinkLabel: "Politique de confidentialite",
        buttonLabel: "S'abonner",
        submittingLabel: "Inscription...",
        successMessage: "Merci, vous etes sur la liste.",
        errorMessage: "L'inscription a echoue. Reessayez plus tard.",
        validationEmail: "Saisissez une adresse e-mail valide.",
        validationConsent: "Confirmez que vous souhaitez recevoir des nouvelles.",
        captchaMissing: "Terminez le controle de securite avant de vous inscrire.",
      },
      contact: {
        address: "La Haye, Laan van Roos en Doorn",
        title: "Entrer en contact",
        lead:
          "Questions, support ou idees de fonctionnalites ? Envoyez un e-mail ou rejoignez Discord pour les nouvelles de la communaute.",
        actionsAria: "Options de contact",
        cards: [
          {
            eyebrow: "Support",
            title: "Ecrire a Photo Book Noir",
            body: "Posez vos questions sur l'application, le flux d'export ou tout blocage sur votre prochain livre photo.",
            cta: "Contacter le support",
          },
          {
            eyebrow: "Communaute",
            title: "Rejoindre le salon Discord",
            body: "Suivez les mises a jour produit, posez des questions rapides et restez proche de la feuille de route.",
            cta: "Ouvrir Discord",
          },
        ],
        directDetailsTitle: "Coordonnees",
        details: {
          address: "Base a",
          phone: "Telephone",
          email: "E-mail",
        },
      },
    },
    footer: {
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
      accept: "Accepter les cookies",
      essential: "Essentiels seulement",
    },
  }),
  zh: createLocale("zh-CN", {
    navigation: {
      toggleLabel: "切换导航",
      screenshots: "截图",
      about: "关于",
      subscribe: "订阅",
      contact: "联系与支持",
      more: "更多",
      credits: "鸣谢",
      privacy: "隐私政策",
      languageLabel: "语言",
    },
    home: {
      header: {
        paragraph: "使用说明文字、LUT 滤镜和可直接导出的文件，设计简洁的照片书和拼贴版式。",
        appStoreAlt: "在 App Store 查看",
        downloadLabel: "下载 DMG",
      },
      about: {
        title: "关于应用",
        paragraph:
          "Photo Book Noir 是一款用于设计相册和拼贴版式的照片书应用。整理回忆、添加文字，并准备适合打印或分享的整洁导出文件。",
        philosophy:
          "应用成瘾正变得越来越严重，如今很多应用的目标是让人停留更久，而不是真正提供帮助。我开发这款应用，是因为我相信技术应该丰富生活，而不是吞噬生活。",
        goalsTitle: "目标是什么？",
        primaryGoals: ["大型照片书和相册", "多种导出格式", "LUT 滤镜和创意风格", "快速导入照片"],
        secondaryGoals: ["添加说明文字、正文和视觉叙事", "剪贴簿与拼贴设计"],
      },
      subscribe: {
        kicker: "更新",
        title: "保持关注",
        lead: "接收简洁的产品更新、TestFlight 说明和发布消息。不使用跟踪像素，不发送垃圾邮件。",
        bullets: ["功能进展与版本说明", "私人测试版和 TestFlight 更新", "可随时通过电子邮件退订"],
        emailLabel: "电子邮箱",
        consentLabel: "我同意偶尔通过电子邮件接收 Photo Book Noir 更新，并理解我可以随时要求退订。",
        privacyPrefix: "你的电子邮箱会安全存储在 Azure 中，并且仅用于这些更新。",
        privacyLinkLabel: "隐私政策",
        buttonLabel: "订阅",
        submittingLabel: "提交中...",
        successMessage: "感谢，您已加入名单。",
        errorMessage: "订阅失败。请稍后再试。",
        validationEmail: "请输入有效的电子邮箱地址。",
        validationConsent: "请确认你希望接收更新。",
        captchaMissing: "订阅前请完成安全验证。",
      },
      contact: {
        kicker: "联系",
        title: "联系我们",
        lead: "有问题、需要支持或想分享功能想法？欢迎发邮件，或加入 Discord 获取快速社区更新。",
        actionsAria: "联系选项",
        cards: [
          {
            eyebrow: "支持",
            title: "邮件联系 Photo Book Noir",
            body: "咨询应用、导出流程，或任何阻碍你制作下一本照片书的问题。",
            cta: "邮件支持",
          },
          {
            eyebrow: "社区",
            title: "加入 Discord 频道",
            body: "关注产品更新、快速提问，并与路线图保持同步。",
            cta: "打开 Discord",
          },
        ],
        directDetailsTitle: "联系方式",
        details: {
          address: "所在地",
          phone: "电话",
          email: "邮箱",
        },
      },
    },
    footer: {
      designBy: "设计来自",
      linksAria: "页脚链接",
      languageLabel: "语言",
      credits: "鸣谢",
      privacy: "隐私政策",
    },
    cookie: {
      ariaLabel: "Cookie 同意",
      textBefore:
        "我们使用一个小型 Cookie 来记住你的隐私选择，并确保网站正常运行。你可以在我们的 ",
      linkLabel: "隐私政策",
      textAfter: " 中了解更多。",
      accept: "接受 Cookie",
      essential: "仅限必要 Cookie",
    },
  }),
  ja: createLocale("ja-JP", {
    navigation: {
      toggleLabel: "ナビゲーションを切り替える",
      screenshots: "スクリーンショット",
      about: "アプリについて",
      subscribe: "登録",
      contact: "お問い合わせとサポート",
      more: "その他",
      credits: "クレジット",
      privacy: "プライバシーポリシー",
      languageLabel: "言語",
    },
    home: {
      header: {
        paragraph: "キャプション、LUT フィルター、書き出し用ファイルを使って、すっきりしたフォトアルバムやコラージュレイアウトを作成できます。",
        appStoreAlt: "App Store で見る",
        downloadLabel: "DMG をダウンロード",
      },
      about: {
        title: "アプリについて",
        paragraph:
          "Photo Book Noir は、アルバムやコラージュレイアウトを作るためのフォトブックアプリです。思い出を整理し、テキストを加え、印刷や共有に向けたきれいな書き出しファイルを準備できます。",
        philosophy:
          "アプリ依存はますます大きな問題になっており、多くのアプリは本当に役立つためではなく、使い続けさせるために作られています。私は、テクノロジーは人生を消費するのではなく豊かにするべきだという考えでこのアプリを作りました。",
        goalsTitle: "目標は？",
        primaryGoals: ["大きなフォトブックとアルバム", "複数の書き出し形式", "LUT フィルターと創造的な表現", "写真の高速取り込み"],
        secondaryGoals: ["キャプション、テキスト、ビジュアルストーリーを追加", "スクラップブックとコラージュのデザイン"],
      },
      subscribe: {
        kicker: "更新情報",
        title: "最新情報を受け取る",
        lead: "簡潔な製品アップデート、TestFlight メモ、リリース情報を受け取れます。追跡ピクセルなし、スパムなし。",
        bullets: ["機能の進捗とリリースノート", "プライベートベータと TestFlight の更新", "メールでいつでも配信停止可能"],
        emailLabel: "メールアドレス",
        consentLabel: "Photo Book Noir からの更新をときどきメールで受け取ることに同意し、いつでも配信停止を依頼できることを理解しています。",
        privacyPrefix: "あなたのメールアドレスは Azure に安全に保管され、これらの更新にのみ使用されます。",
        privacyLinkLabel: "プライバシーポリシー",
        buttonLabel: "登録する",
        submittingLabel: "送信中...",
        successMessage: "ありがとうございます。リストに追加されました。",
        errorMessage: "登録に失敗しました。後でもう一度お試しください。",
        validationEmail: "有効なメールアドレスを入力してください。",
        validationConsent: "更新の受信を希望することを確認してください。",
        captchaMissing: "登録する前にセキュリティチェックを完了してください。",
      },
      contact: {
        kicker: "お問い合わせ",
        title: "ご連絡ください",
        lead: "質問、サポート、機能のアイデアがありますか。メールを送るか、Discord に参加してすばやいコミュニティ更新を受け取れます。",
        actionsAria: "連絡方法",
        cards: [
          {
            eyebrow: "サポート",
            title: "Photo Book Noir にメールする",
            body: "アプリや書き出しについて、または次のフォトブック作成を妨げていることについて相談してください。",
            cta: "サポートにメール",
          },
          {
            eyebrow: "コミュニティ",
            title: "Discord ルームに参加",
            body: "製品アップデートを追い、気軽に質問し、ロードマップの動きを確認できます。",
            cta: "Discord を開く",
          },
        ],
        directDetailsTitle: "連絡先情報",
        details: {
          address: "所在地",
          phone: "電話",
          email: "メール",
        },
      },
    },
    footer: {
      designBy: "デザイン",
      linksAria: "フッターリンク",
      languageLabel: "言語",
      credits: "クレジット",
      privacy: "プライバシーポリシー",
    },
    cookie: {
      ariaLabel: "Cookie 同意",
      textBefore: "プライバシー設定を記憶し、サイトを正しく動作させるために小さな Cookie を使用しています。詳しくは ",
      linkLabel: "プライバシーポリシー",
      textAfter: " をご覧ください。",
      accept: "Cookie を許可",
      essential: "必須のみ",
    },
  }),
  ro: createLocale("ro-RO", {
    navigation: {
      toggleLabel: "Comuta navigatia",
      screenshots: "Capturi de ecran",
      about: "Despre",
      subscribe: "Abonare",
      contact: "Contact si suport",
      more: "Mai mult",
      credits: "Credite",
      privacy: "Politica de confidentialitate",
      languageLabel: "Limba",
    },
    home: {
      header: {
        paragraph: "Creeaza albume foto curate si machete de colaj cu legende, filtre LUT si fisiere gata de export.",
        appStoreAlt: "Vezi in App Store",
        downloadLabel: "Descarca DMG",
      },
      about: {
        title: "Despre aplicatie",
        paragraph:
          "Photo Book Noir este o aplicatie de albume foto pentru proiectarea albumelor si a machetelor de colaj. Organizeaza amintiri, adauga text si pregateste fisiere curate pentru tipar sau distribuire.",
        philosophy:
          "Dependenta de aplicatii a devenit o problema tot mai mare - multe aplicatii de astazi sunt construite ca sa ne tina captivi, nu ca sa ne ajute. Am creat aceasta aplicatie pornind de la convingerea ca tehnologia ar trebui sa imbogateasca viata, nu sa o consume.",
        goalsTitle: "Care sunt obiectivele?",
        primaryGoals: ["Albume foto mari", "Mai multe formate de export", "Filtre LUT si stiluri creative", "Import rapid de fotografii"],
        secondaryGoals: ["Adauga legende, text si povestire vizuala", "Design de scrapbook si colaj"],
      },
      subscribe: {
        kicker: "Noutati",
        title: "Ramai aproape",
        lead: "Primeste actualizari concise despre produs, note TestFlight si noutati de lansare. Fara pixeli de urmarire, fara spam.",
        bullets: ["Progresul functiilor si note de lansare", "Actualizari pentru beta privata si TestFlight", "Te poti dezabona oricand prin e-mail"],
        emailLabel: "Adresa de e-mail",
        consentLabel: "Sunt de acord sa primesc ocazional actualizari Photo Book Noir prin e-mail si inteleg ca pot solicita dezabonarea in orice moment.",
        privacyPrefix: "Adresa ta de e-mail este stocata in siguranta in Azure si folosita doar pentru aceste actualizari.",
        privacyLinkLabel: "Politica de confidentialitate",
        buttonLabel: "Aboneaza-te",
        submittingLabel: "Se trimite...",
        successMessage: "Multumim, esti pe lista.",
        errorMessage: "Abonarea a esuat. Incearca din nou mai tarziu.",
        validationEmail: "Introdu o adresa de e-mail valida.",
        validationConsent: "Confirma ca doresti sa primesti actualizari.",
        captchaMissing: "Completeaza verificarea de securitate inainte de abonare.",
      },
      contact: {
        title: "Ia legatura cu noi",
        lead: "Intrebari, suport sau idei de functii? Trimite un e-mail sau intra pe Discord pentru actualizari rapide din comunitate.",
        actionsAria: "Optiuni de contact",
        cards: [
          {
            eyebrow: "Suport",
            title: "Trimite un e-mail catre Photo Book Noir",
            body: "Intreaba despre aplicatie, export sau orice iti blocheaza urmatorul album foto.",
            cta: "Trimite e-mail",
          },
          {
            eyebrow: "Comunitate",
            title: "Intra in camera Discord",
            body: "Urmareste actualizarile produsului, pune intrebari rapide si ramai aproape de roadmap.",
            cta: "Deschide Discord",
          },
        ],
        directDetailsTitle: "Detalii de contact",
        details: {
          address: "Locatie",
          phone: "Telefon",
          email: "E-mail",
        },
      },
    },
    footer: {
      designBy: "Design de",
      linksAria: "Linkuri in subsol",
      languageLabel: "Limba",
      credits: "Credite",
      privacy: "Politica de confidentialitate",
    },
    cookie: {
      ariaLabel: "Consimtamant pentru cookie-uri",
      textBefore: "Folosim un cookie mic pentru a retine alegerea ta de confidentialitate si pentru a pastra site-ul functional. Poti citi mai mult in ",
      linkLabel: "Politica de confidentialitate",
      accept: "Accept cookie-urile",
      essential: "Doar esentiale",
    },
  }),
  de: createLocale("de-DE", {
    navigation: {
      toggleLabel: "Navigation umschalten",
      screenshots: "Screenshots",
      about: "Uber die App",
      subscribe: "Abonnieren",
      contact: "Kontakt und Support",
      more: "Mehr",
      credits: "Danksagungen",
      privacy: "Datenschutzerklarung",
      languageLabel: "Sprache",
    },
    home: {
      header: {
        paragraph: "Gestalte klare Fotoalben und Collage-Layouts mit Bildunterschriften, LUT-Filtern und exportfertigen Dateien.",
        appStoreAlt: "Im App Store ansehen",
        downloadLabel: "DMG herunterladen",
      },
      about: {
        title: "Uber die App",
        paragraph:
          "Photo Book Noir ist eine Fotobuch-App zum Gestalten von Alben und Collage-Layouts. Ordne Erinnerungen, fuge Text hinzu und bereite saubere Exportdateien fur Druck oder Teilen vor.",
        philosophy:
          "App-Abhangigkeit wird immer mehr zum Problem - viele Apps sind heute darauf ausgelegt, uns festzuhalten, statt uns zu helfen. Ich habe diese App mit der Uberzeugung gebaut, dass Technologie das Leben bereichern und nicht aufzehren sollte.",
        goalsTitle: "Was sind die Ziele?",
        primaryGoals: ["Grosse Fotobucher und Alben", "Mehrere Exportformate", "LUT-Filter und kreative Looks", "Schneller Fotoimport"],
        secondaryGoals: ["Bildunterschriften, Text und visuelles Storytelling hinzufugen", "Scrapbook- und Collage-Design"],
      },
      subscribe: {
        title: "Bleib informiert",
        lead: "Erhalte kurze Produktupdates, TestFlight-Hinweise und Release-News. Keine Tracking-Pixel, kein Spam.",
        bullets: ["Funktionsfortschritt und Versionshinweise", "Private Beta- und TestFlight-Updates", "Jederzeit per E-Mail abbestellbar"],
        emailLabel: "E-Mail-Adresse",
        consentLabel: "Ich stimme zu, gelegentlich Photo Book Noir Updates per E-Mail zu erhalten, und verstehe, dass ich jederzeit eine Abmeldung verlangen kann.",
        privacyPrefix: "Deine E-Mail-Adresse wird sicher in Azure gespeichert und nur fur diese Updates verwendet.",
        privacyLinkLabel: "Datenschutzerklarung",
        buttonLabel: "Abonnieren",
        submittingLabel: "Wird gesendet...",
        successMessage: "Danke, du stehst auf der Liste.",
        errorMessage: "Die Anmeldung ist fehlgeschlagen. Bitte versuche es spater erneut.",
        validationEmail: "Gib eine gultige E-Mail-Adresse ein.",
        validationConsent: "Bestatige, dass du Updates erhalten mochtest.",
        captchaMissing: "Schliesse die Sicherheitsprufung vor der Anmeldung ab.",
      },
      contact: {
        title: "Nimm Kontakt auf",
        lead: "Fragen, Support oder Funktionsideen? Schreib eine E-Mail oder komm zu Discord fur schnelle Community-Updates.",
        actionsAria: "Kontaktoptionen",
        cards: [
          {
            eyebrow: "Support",
            title: "Photo Book Noir per E-Mail kontaktieren",
            body: "Frage nach der App, dem Export oder allem, was dein nachstes Fotobuch blockiert.",
            cta: "Support kontaktieren",
          },
          {
            eyebrow: "Community",
            title: "Dem Discord-Raum beitreten",
            body: "Verfolge Produktupdates, stelle schnelle Fragen und bleibe nah an der Roadmap.",
            cta: "Discord offnen",
          },
        ],
        directDetailsTitle: "Kontaktdaten",
        details: {
          address: "Standort",
          phone: "Telefon",
          email: "E-Mail",
        },
      },
    },
    footer: {
      designBy: "Design von",
      linksAria: "Footer-Links",
      languageLabel: "Sprache",
      credits: "Danksagungen",
      privacy: "Datenschutzerklarung",
    },
    cookie: {
      ariaLabel: "Cookie-Einwilligung",
      textBefore: "Wir verwenden ein kleines Cookie, um deine Datenschutzeinstellung zu speichern und die Website wie erwartet funktionieren zu lassen. Mehr dazu findest du in unserer ",
      linkLabel: "Datenschutzerklarung",
      accept: "Cookies akzeptieren",
      essential: "Nur notwendige",
    },
  }),
  ko: createLocale("ko-KR", {
    navigation: {
      toggleLabel: "탐색 전환",
      screenshots: "스크린샷",
      about: "앱 소개",
      subscribe: "구독",
      contact: "문의 및 지원",
      more: "더보기",
      credits: "크레딧",
      privacy: "개인정보 처리방침",
      languageLabel: "언어",
    },
    home: {
      header: {
        paragraph: "캡션, LUT 필터, 내보내기용 파일로 깔끔한 포토 앨범과 콜라주 레이아웃을 디자인하세요.",
        appStoreAlt: "App Store에서 보기",
        downloadLabel: "DMG 다운로드",
      },
      about: {
        title: "앱 소개",
        paragraph:
          "Photo Book Noir는 앨범과 콜라주 레이아웃을 디자인하기 위한 포토북 앱입니다. 추억을 정리하고 텍스트를 추가하며 인쇄나 공유를 위한 깔끔한 내보내기 파일을 준비하세요.",
        philosophy:
          "앱 중독은 점점 더 큰 문제가 되고 있습니다. 오늘날 많은 앱은 우리를 돕기보다 붙잡아 두기 위해 만들어집니다. 저는 기술이 삶을 소모하는 것이 아니라 풍요롭게 해야 한다는 믿음으로 이 앱을 만들었습니다.",
        goalsTitle: "목표는 무엇인가요?",
        primaryGoals: ["대형 포토북과 앨범", "다양한 내보내기 형식", "LUT 필터와 창의적인 룩", "빠른 사진 가져오기"],
        secondaryGoals: ["캡션, 텍스트, 시각적 스토리텔링 추가", "스크랩북 및 콜라주 디자인"],
      },
      subscribe: {
        title: "계속 소식 받기",
        lead: "간결한 제품 업데이트, TestFlight 메모, 출시 소식을 받아보세요. 추적 픽셀도 없고 스팸도 없습니다.",
        bullets: ["기능 진행 상황과 릴리스 노트", "비공개 베타 및 TestFlight 업데이트", "언제든지 이메일로 구독 해지 가능"],
        emailLabel: "이메일 주소",
        consentLabel: "가끔 Photo Book Noir 업데이트를 이메일로 받는 데 동의하며, 언제든지 구독 해지를 요청할 수 있음을 이해합니다.",
        privacyPrefix: "이 이메일 주소는 Azure에 안전하게 저장되며 이 업데이트에만 사용됩니다.",
        privacyLinkLabel: "개인정보 처리방침",
        buttonLabel: "구독하기",
        submittingLabel: "구독 중...",
        successMessage: "감사합니다. 목록에 추가되었습니다.",
        errorMessage: "구독에 실패했습니다. 나중에 다시 시도해 주세요.",
        validationEmail: "유효한 이메일 주소를 입력하세요.",
        validationConsent: "업데이트 수신 의사를 확인해 주세요.",
        captchaMissing: "구독하기 전에 보안 확인을 완료해 주세요.",
      },
      contact: {
        title: "연락하기",
        lead: "질문, 지원, 기능 아이디어가 있나요? 이메일을 보내거나 Discord에 참여해 빠른 커뮤니티 업데이트를 받아보세요.",
        actionsAria: "연락 옵션",
        cards: [
          {
            eyebrow: "지원",
            title: "Photo Book Noir에 이메일 보내기",
            body: "앱, 내보내기 또는 다음 포토북 작업을 막는 어떤 문제든 문의하세요.",
            cta: "지원팀에 이메일",
          },
          {
            eyebrow: "커뮤니티",
            title: "Discord 룸 참여",
            body: "제품 업데이트를 확인하고, 빠르게 질문하고, 로드맵과 가까이 지내세요.",
            cta: "Discord 열기",
          },
        ],
        directDetailsTitle: "연락처 정보",
        details: {
          address: "위치",
          phone: "전화",
          email: "이메일",
        },
      },
    },
    footer: {
      designBy: "디자인",
      linksAria: "푸터 링크",
      languageLabel: "언어",
      credits: "크레딧",
      privacy: "개인정보 처리방침",
    },
    cookie: {
      ariaLabel: "쿠키 동의",
      textBefore: "개인정보 선택을 기억하고 사이트가 올바르게 동작하도록 작은 쿠키를 사용합니다. 자세한 내용은 ",
      linkLabel: "개인정보 처리방침",
      textAfter: "에서 확인할 수 있습니다.",
      accept: "쿠키 허용",
      essential: "필수만",
    },
  }),
  ar: createLocale("ar-SA", {
    navigation: {
      toggleLabel: "تبديل التنقل",
      screenshots: "لقطات الشاشة",
      about: "حول التطبيق",
      subscribe: "اشترك",
      contact: "التواصل والدعم",
      more: "المزيد",
      credits: "الاعتمادات",
      privacy: "سياسة الخصوصية",
      languageLabel: "اللغة",
    },
    home: {
      header: {
        paragraph: "صمم ألبومات صور نظيفة وتخطيطات كولاج مع تسميات توضيحية وفلاتر LUT وملفات جاهزة للتصدير.",
        appStoreAlt: "عرض في App Store",
        downloadLabel: "تنزيل DMG",
      },
      about: {
        title: "حول التطبيق",
        paragraph:
          "Photo Book Noir هو تطبيق لكتب الصور لتصميم الألبومات وتخطيطات الكولاج. نظّم الذكريات وأضف النصوص وجهّز ملفات تصدير نظيفة للطباعة أو المشاركة.",
        philosophy:
          "أصبح إدمان التطبيقات مشكلة متزايدة، فالكثير من التطبيقات اليوم تُبنى لإبقائنا متعلقين بها بدلاً من مساعدتنا. أنشأت هذا التطبيق لأنني أؤمن بأن التقنية يجب أن تثري الحياة لا أن تستهلكها.",
        goalsTitle: "ما الأهداف؟",
        primaryGoals: ["كتب صور وألبومات كبيرة", "تنسيقات تصدير متعددة", "فلاتر LUT ولمسات إبداعية", "استيراد سريع للصور"],
        secondaryGoals: ["إضافة التسميات والنصوص والسرد البصري", "تصميم القصاصات والكولاج"],
      },
      subscribe: {
        kicker: "التحديثات",
        title: "ابق قريبًا",
        lead: "احصل على تحديثات موجزة عن المنتج وملاحظات TestFlight وأخبار الإصدارات. بلا بكسلات تتبع ولا رسائل مزعجة.",
        bullets: ["تقدم الميزات وملاحظات الإصدار", "تحديثات النسخة التجريبية الخاصة و TestFlight", "إلغاء الاشتراك في أي وقت عبر البريد الإلكتروني"],
        emailLabel: "البريد الإلكتروني",
        consentLabel: "أوافق على تلقي تحديثات Photo Book Noir أحيانًا عبر البريد الإلكتروني وأفهم أنه يمكنني طلب إلغاء الاشتراك في أي وقت.",
        privacyPrefix: "يُخزن بريدك الإلكتروني بأمان في Azure ويُستخدم فقط لهذه التحديثات.",
        privacyLinkLabel: "سياسة الخصوصية",
        buttonLabel: "اشترك",
        submittingLabel: "جارٍ الإرسال...",
        successMessage: "شكرًا، لقد تمت إضافتك إلى القائمة.",
        errorMessage: "فشل الاشتراك. يرجى المحاولة مرة أخرى لاحقًا.",
        validationEmail: "أدخل عنوان بريد إلكتروني صالحًا.",
        validationConsent: "أكد أنك تريد تلقي التحديثات.",
        captchaMissing: "أكمل فحص الأمان قبل الاشتراك.",
      },
      contact: {
        kicker: "التواصل",
        title: "تواصل معنا",
        lead: "هل لديك أسئلة أو تحتاج إلى دعم أو لديك أفكار لميزات جديدة؟ أرسل بريدًا إلكترونيًا أو انضم إلى Discord للحصول على تحديثات سريعة من المجتمع.",
        actionsAria: "خيارات التواصل",
        cards: [
          {
            eyebrow: "الدعم",
            title: "راسل Photo Book Noir",
            body: "اسأل عن التطبيق أو التصدير أو أي شيء يعيق كتاب الصور التالي لديك.",
            cta: "مراسلة الدعم",
          },
          {
            eyebrow: "المجتمع",
            title: "انضم إلى غرفة Discord",
            body: "تابع تحديثات المنتج واطرح أسئلة سريعة وابق قريبًا من خارطة الطريق.",
            cta: "افتح Discord",
          },
        ],
        directDetailsTitle: "بيانات التواصل",
        details: {
          address: "الموقع",
          phone: "الهاتف",
          email: "البريد الإلكتروني",
        },
      },
    },
    footer: {
      designBy: "تصميم",
      linksAria: "روابط التذييل",
      languageLabel: "اللغة",
      credits: "الاعتمادات",
      privacy: "سياسة الخصوصية",
    },
    cookie: {
      ariaLabel: "موافقة ملفات تعريف الارتباط",
      textBefore: "نستخدم ملف تعريف ارتباط صغيرًا لتذكر اختيارك للخصوصية والحفاظ على عمل الموقع كما ينبغي. يمكنك قراءة المزيد في ",
      linkLabel: "سياسة الخصوصية",
      accept: "قبول ملفات تعريف الارتباط",
      essential: "الأساسية فقط",
    },
  }),
  hi: createLocale("hi-IN", {
    navigation: {
      toggleLabel: "नेविगेशन बदलें",
      screenshots: "स्क्रीनशॉट",
      about: "ऐप के बारे में",
      subscribe: "सब्सक्राइब करें",
      contact: "संपर्क और सहायता",
      more: "और",
      credits: "श्रेय",
      privacy: "गोपनीयता नीति",
      languageLabel: "भाषा",
    },
    home: {
      header: {
        paragraph: "कैप्शन, LUT फ़िल्टर और निर्यात-तैयार फ़ाइलों के साथ साफ़ फोटो एल्बम और कोलाज लेआउट डिज़ाइन करें।",
        appStoreAlt: "App Store में देखें",
        downloadLabel: "DMG डाउनलोड करें",
      },
      about: {
        title: "ऐप के बारे में",
        paragraph:
          "Photo Book Noir एल्बम और कोलाज लेआउट डिज़ाइन करने के लिए एक फोटो बुक ऐप है। यादों को व्यवस्थित करें, टेक्स्ट जोड़ें और प्रिंट या शेयर करने के लिए साफ़ एक्सपोर्ट फ़ाइलें तैयार करें।",
        philosophy:
          "ऐप की लत एक बढ़ती हुई समस्या बन गई है। आज कई ऐप हमारी मदद करने के बजाय हमें बांधे रखने के लिए बनाए जाते हैं। मैंने यह ऐप इस विश्वास के साथ बनाया है कि तकनीक जीवन को समृद्ध करे, उसे निगले नहीं।",
        goalsTitle: "लक्ष्य क्या हैं?",
        primaryGoals: ["बड़े फोटो बुक और एल्बम", "कई एक्सपोर्ट फ़ॉर्मेट", "LUT फ़िल्टर और रचनात्मक लुक", "तेज़ फोटो इम्पोर्ट"],
        secondaryGoals: ["कैप्शन, टेक्स्ट और विज़ुअल स्टोरीटेलिंग जोड़ें", "स्क्रैपबुक और कोलाज डिज़ाइन"],
      },
      subscribe: {
        kicker: "अपडेट",
        title: "जुड़े रहें",
        lead: "संक्षिप्त प्रोडक्ट अपडेट, TestFlight नोट्स और रिलीज़ समाचार पाएं। न कोई ट्रैकिंग पिक्सेल, न स्पैम।",
        bullets: ["फ़ीचर प्रगति और रिलीज़ नोट्स", "प्राइवेट बीटा और TestFlight अपडेट", "कभी भी ईमेल से अनसब्सक्राइब करें"],
        emailLabel: "ईमेल पता",
        consentLabel: "मैं कभी-कभी ईमेल द्वारा Photo Book Noir अपडेट प्राप्त करने के लिए सहमत हूँ और समझता हूँ कि मैं कभी भी अनसब्सक्राइब करने का अनुरोध कर सकता हूँ।",
        privacyPrefix: "आपका ईमेल Azure में सुरक्षित रूप से संग्रहीत होता है और केवल इन अपडेट के लिए उपयोग किया जाता है।",
        privacyLinkLabel: "गोपनीयता नीति",
        buttonLabel: "सब्सक्राइब करें",
        submittingLabel: "भेजा जा रहा है...",
        successMessage: "धन्यवाद, आप सूची में शामिल हो गए हैं।",
        errorMessage: "सब्सक्रिप्शन विफल रहा। कृपया बाद में फिर प्रयास करें।",
        validationEmail: "एक मान्य ईमेल पता दर्ज करें।",
        validationConsent: "पुष्टि करें कि आप अपडेट प्राप्त करना चाहते हैं।",
        captchaMissing: "सब्सक्राइब करने से पहले सुरक्षा जांच पूरी करें।",
      },
      contact: {
        title: "संपर्क करें",
        lead: "कोई सवाल, सहायता या फीचर आइडिया है? ईमेल भेजें या तेज़ समुदाय अपडेट के लिए Discord से जुड़ें।",
        actionsAria: "संपर्क विकल्प",
        cards: [
          {
            eyebrow: "सहायता",
            title: "Photo Book Noir को ईमेल करें",
            body: "ऐप, एक्सपोर्ट या किसी भी ऐसी चीज़ के बारे में पूछें जो आपकी अगली फोटो बुक को रोक रही हो।",
            cta: "सहायता को ईमेल करें",
          },
          {
            eyebrow: "समुदाय",
            title: "Discord रूम में शामिल हों",
            body: "प्रोडक्ट अपडेट देखें, जल्दी सवाल पूछें और रोडमैप के करीब रहें।",
            cta: "Discord खोलें",
          },
        ],
        directDetailsTitle: "संपर्क विवरण",
        details: {
          address: "स्थान",
          phone: "फ़ोन",
          email: "ईमेल",
        },
      },
    },
    footer: {
      designBy: "डिज़ाइन",
      linksAria: "फुटर लिंक",
      languageLabel: "भाषा",
      credits: "श्रेय",
      privacy: "गोपनीयता नीति",
    },
    cookie: {
      ariaLabel: "कुकी सहमति",
      textBefore: "हम आपकी गोपनीयता पसंद को याद रखने और साइट को ठीक तरह से चलाने के लिए एक छोटी कुकी का उपयोग करते हैं। अधिक जानकारी के लिए हमारी ",
      linkLabel: "गोपनीयता नीति",
      textAfter: " पढ़ें।",
      accept: "कुकी स्वीकार करें",
      essential: "केवल आवश्यक",
    },
  }),
  pt: createLocale("pt-BR", {
    navigation: {
      toggleLabel: "Alternar navegacao",
      screenshots: "Capturas",
      about: "Sobre",
      subscribe: "Inscrever-se",
      contact: "Contato e suporte",
      more: "Mais",
      credits: "Creditos",
      privacy: "Politica de privacidade",
      languageLabel: "Idioma",
    },
    home: {
      header: {
        paragraph: "Crie albuns de fotos limpos e layouts de colagem com legendas, filtros LUT e arquivos prontos para exportacao.",
        appStoreAlt: "Ver na App Store",
        downloadLabel: "Baixar DMG",
      },
      about: {
        title: "Sobre o app",
        paragraph:
          "Photo Book Noir e um app de fotolivros para criar albuns e layouts de colagem. Organize memorias, adicione texto e prepare arquivos limpos para imprimir ou compartilhar.",
        philosophy:
          "O vicio em aplicativos se tornou um problema cada vez maior - muitos apps hoje sao feitos para nos prender, em vez de nos ajudar. Criei este app com a conviccao de que a tecnologia deve enriquecer a vida, nao consumi-la.",
        goalsTitle: "Quais sao os objetivos?",
        primaryGoals: ["Fotolivros e albuns grandes", "Multiplos formatos de exportacao", "Filtros LUT e visuais criativos", "Importacao rapida de fotos"],
        secondaryGoals: ["Adicionar legendas, texto e narrativa visual", "Design de scrapbook e colagem"],
      },
      subscribe: {
        kicker: "Atualizacoes",
        title: "Fique por perto",
        lead: "Receba atualizacoes curtas do produto, notas do TestFlight e novidades de lancamento. Sem pixels de rastreamento, sem spam.",
        bullets: ["Progresso de recursos e notas de versao", "Atualizacoes da beta privada e do TestFlight", "Cancele a inscricao a qualquer momento por e-mail"],
        emailLabel: "Endereco de e-mail",
        consentLabel: "Concordo em receber ocasionalmente atualizacoes do Photo Book Noir por e-mail e entendo que posso pedir o cancelamento a qualquer momento.",
        privacyPrefix: "Seu e-mail e armazenado com seguranca no Azure e usado apenas para essas atualizacoes.",
        privacyLinkLabel: "Politica de privacidade",
        buttonLabel: "Inscrever-se",
        submittingLabel: "Enviando...",
        successMessage: "Obrigado, voce entrou na lista.",
        errorMessage: "A inscricao falhou. Tente novamente mais tarde.",
        validationEmail: "Digite um endereco de e-mail valido.",
        validationConsent: "Confirme que voce deseja receber atualizacoes.",
        captchaMissing: "Conclua a verificacao de seguranca antes de se inscrever.",
      },
      contact: {
        title: "Entre em contato",
        lead: "Duvidas, suporte ou ideias de recursos? Envie um e-mail ou entre no Discord para atualizacoes rapidas da comunidade.",
        actionsAria: "Opcoes de contato",
        cards: [
          {
            eyebrow: "Suporte",
            title: "Envie um e-mail para o Photo Book Noir",
            body: "Pergunte sobre o app, a exportacao ou qualquer coisa que esteja bloqueando seu proximo fotolivro.",
            cta: "Enviar e-mail",
          },
          {
            eyebrow: "Comunidade",
            title: "Entrar na sala do Discord",
            body: "Acompanhe atualizacoes do produto, faca perguntas rapidas e fique perto do roadmap.",
            cta: "Abrir Discord",
          },
        ],
        directDetailsTitle: "Detalhes de contato",
        details: {
          address: "Localizacao",
          phone: "Telefone",
          email: "E-mail",
        },
      },
    },
    footer: {
      designBy: "Design por",
      linksAria: "Links do rodape",
      languageLabel: "Idioma",
      credits: "Creditos",
      privacy: "Politica de privacidade",
    },
    cookie: {
      ariaLabel: "Consentimento de cookies",
      textBefore: "Usamos um pequeno cookie para lembrar sua escolha de privacidade e manter o site funcionando como esperado. Voce pode ler mais na nossa ",
      linkLabel: "Politica de privacidade",
      accept: "Aceitar cookies",
      essential: "Somente essenciais",
    },
  }),
  ru: createLocale("ru-RU", {
    navigation: {
      toggleLabel: "Переключить навигацию",
      screenshots: "Скриншоты",
      about: "О приложении",
      subscribe: "Подписка",
      contact: "Контакты и поддержка",
      more: "Еще",
      credits: "Благодарности",
      privacy: "Политика конфиденциальности",
      languageLabel: "Язык",
    },
    home: {
      header: {
        paragraph: "Создавайте аккуратные фотоальбомы и коллажи с подписями, LUT-фильтрами и файлами, готовыми к экспорту.",
        appStoreAlt: "Открыть в App Store",
        downloadLabel: "Скачать DMG",
      },
      about: {
        title: "О приложении",
        paragraph:
          "Photo Book Noir - это приложение для фотокниг, в котором можно создавать альбомы и коллажные макеты. Организуйте воспоминания, добавляйте текст и готовьте аккуратные файлы для печати или обмена.",
        philosophy:
          "Зависимость от приложений становится все более серьезной проблемой - многие приложения сегодня создаются для того, чтобы удерживать нас, а не помогать. Я сделал это приложение, исходя из убеждения, что технологии должны обогащать жизнь, а не поглощать ее.",
        goalsTitle: "Какие цели?",
        primaryGoals: ["Большие фотокниги и альбомы", "Несколько форматов экспорта", "LUT-фильтры и творческие стили", "Быстрый импорт фотографий"],
        secondaryGoals: ["Добавление подписей, текста и визуального повествования", "Дизайн скрапбуков и коллажей"],
      },
      subscribe: {
        title: "Будьте рядом",
        lead: "Получайте короткие обновления продукта, заметки TestFlight и новости релизов. Никаких пикселей отслеживания и спама.",
        bullets: ["Ход разработки и заметки о релизах", "Обновления закрытой беты и TestFlight", "Отписка по электронной почте в любое время"],
        emailLabel: "Адрес электронной почты",
        consentLabel: "Я согласен время от времени получать обновления Photo Book Noir по электронной почте и понимаю, что могу в любой момент попросить об отписке.",
        privacyPrefix: "Ваш адрес электронной почты надежно хранится в Azure и используется только для этих обновлений.",
        privacyLinkLabel: "Политика конфиденциальности",
        buttonLabel: "Подписаться",
        submittingLabel: "Подписка...",
        successMessage: "Спасибо, вы в списке.",
        errorMessage: "Не удалось подписаться. Попробуйте позже.",
        validationEmail: "Введите корректный адрес электронной почты.",
        validationConsent: "Подтвердите, что хотите получать обновления.",
        captchaMissing: "Перед подпиской пройдите проверку безопасности.",
      },
      contact: {
        title: "Свяжитесь с нами",
        lead: "Есть вопросы, нужна поддержка или идеи для функций? Напишите письмо или присоединяйтесь к Discord, чтобы быстро получать новости сообщества.",
        actionsAria: "Варианты связи",
        cards: [
          {
            eyebrow: "Поддержка",
            title: "Написать в Photo Book Noir",
            body: "Спросите о приложении, экспорте или о том, что мешает вашей следующей фотокниге.",
            cta: "Написать в поддержку",
          },
          {
            eyebrow: "Сообщество",
            title: "Присоединиться к комнате Discord",
            body: "Следите за обновлениями продукта, задавайте быстрые вопросы и оставайтесь ближе к дорожной карте.",
            cta: "Открыть Discord",
          },
        ],
        directDetailsTitle: "Контактные данные",
        details: {
          address: "Местоположение",
          phone: "Телефон",
          email: "Эл. почта",
        },
      },
    },
    footer: {
      designBy: "Дизайн",
      linksAria: "Ссылки в подвале",
      languageLabel: "Язык",
      credits: "Благодарности",
      privacy: "Политика конфиденциальности",
    },
    cookie: {
      ariaLabel: "Согласие на cookie",
      textBefore: "Мы используем небольшой cookie-файл, чтобы запомнить ваш выбор конфиденциальности и поддерживать работу сайта. Подробнее читайте в нашей ",
      linkLabel: "Политике конфиденциальности",
      accept: "Принять cookie",
      essential: "Только необходимые",
    },
  }),
  es: createLocale("es-ES", {
    navigation: {
      toggleLabel: "Cambiar navegacion",
      screenshots: "Capturas",
      about: "Acerca de",
      subscribe: "Suscribirse",
      contact: "Contacto y soporte",
      more: "Mas",
      credits: "Creditos",
      privacy: "Politica de privacidad",
      languageLabel: "Idioma",
    },
    home: {
      header: {
        paragraph: "Disena albumes de fotos limpios y composiciones de collage con leyendas, filtros LUT y archivos listos para exportar.",
        appStoreAlt: "Ver en App Store",
        downloadLabel: "Descargar DMG",
      },
      about: {
        title: "Acerca de la app",
        paragraph:
          "Photo Book Noir es una app de fotolibros para disenar albumes y composiciones de collage. Organiza recuerdos, anade texto y prepara archivos limpios para imprimir o compartir.",
        philosophy:
          "La adiccion a las apps se ha convertido en un problema cada vez mayor. Muchas aplicaciones actuales estan hechas para engancharnos en lugar de ayudarnos. Cree esta app con la idea de que la tecnologia debe enriquecer la vida, no consumirla.",
        goalsTitle: "Cuales son los objetivos?",
        primaryGoals: ["Fotolibros y albumes grandes", "Multiples formatos de exportacion", "Filtros LUT y estilos creativos", "Importacion rapida de fotos"],
        secondaryGoals: ["Anadir leyendas, texto y narrativa visual", "Diseno de scrapbook y collage"],
      },
      subscribe: {
        title: "Mantente cerca",
        lead: "Recibe actualizaciones breves del producto, notas de TestFlight y noticias de lanzamiento. Sin pixeles de seguimiento ni spam.",
        bullets: ["Progreso de funciones y notas de version", "Actualizaciones de beta privada y TestFlight", "Date de baja por correo en cualquier momento"],
        emailLabel: "Correo electronico",
        consentLabel: "Acepto recibir ocasionalmente actualizaciones de Photo Book Noir por correo electronico y entiendo que puedo solicitar la baja en cualquier momento.",
        privacyPrefix: "Tu correo electronico se almacena de forma segura en Azure y se usa solo para estas actualizaciones.",
        privacyLinkLabel: "Politica de privacidad",
        buttonLabel: "Suscribirse",
        submittingLabel: "Suscribiendo...",
        successMessage: "Gracias, ya estas en la lista.",
        errorMessage: "La suscripcion fallo. Intentalo de nuevo mas tarde.",
        validationEmail: "Introduce un correo electronico valido.",
        validationConsent: "Confirma que quieres recibir actualizaciones.",
        captchaMissing: "Completa la verificacion de seguridad antes de suscribirte.",
      },
      contact: {
        title: "Ponte en contacto",
        lead: "Tienes preguntas, necesitas soporte o tienes ideas de funciones? Envia un correo o unete a Discord para recibir actualizaciones rapidas de la comunidad.",
        actionsAria: "Opciones de contacto",
        cards: [
          {
            eyebrow: "Soporte",
            title: "Escribir a Photo Book Noir",
            body: "Pregunta sobre la app, la exportacion o cualquier cosa que bloquee tu siguiente fotolibro.",
            cta: "Enviar correo",
          },
          {
            eyebrow: "Comunidad",
            title: "Unirse a la sala de Discord",
            body: "Sigue las actualizaciones del producto, haz preguntas rapidas y mantente cerca de la hoja de ruta.",
            cta: "Abrir Discord",
          },
        ],
        directDetailsTitle: "Datos de contacto",
        details: {
          address: "Ubicacion",
          phone: "Telefono",
          email: "Correo",
        },
      },
    },
    footer: {
      designBy: "Diseno",
      linksAria: "Enlaces del pie",
      languageLabel: "Idioma",
      credits: "Creditos",
      privacy: "Politica de privacidad",
    },
    cookie: {
      ariaLabel: "Consentimiento de cookies",
      textBefore: "Usamos una pequena cookie para recordar tu eleccion de privacidad y mantener el sitio funcionando como se espera. Puedes leer mas en nuestra ",
      linkLabel: "Politica de privacidad",
      accept: "Aceptar cookies",
      essential: "Solo esenciales",
    },
  }),
  it: createLocale("it-IT", {
    navigation: {
      toggleLabel: "Apri navigazione",
      screenshots: "Schermate",
      about: "Informazioni",
      subscribe: "Iscriviti",
      contact: "Contatto e supporto",
      more: "Altro",
      credits: "Crediti",
      privacy: "Informativa sulla privacy",
      languageLabel: "Lingua",
    },
    home: {
      header: {
        paragraph: "Progetta fotolibri puliti e layout di collage con didascalie, filtri LUT e file pronti per l'esportazione.",
        appStoreAlt: "Vedi su App Store",
        downloadLabel: "Scarica DMG",
      },
      about: {
        title: "Informazioni sull'app",
        paragraph:
          "Photo Book Noir e un'app per fotolibri pensata per creare album fotografici e layout di collage. Organizza i ricordi, aggiungi testo e prepara file ordinati per la stampa o la condivisione.",
        philosophy:
          "La dipendenza dalle app sta diventando un problema sempre piu serio. Molte app oggi sono progettate per tenerci agganciati invece di aiutarci davvero. Ho creato questa app partendo dall'idea che la tecnologia debba arricchire la vita, non consumarla.",
        goalsTitle: "Quali sono gli obiettivi?",
        primaryGoals: ["Fotolibri e album di grandi dimensioni", "Formati di esportazione multipli", "Filtri LUT e look creativi", "Importazione rapida delle foto"],
        secondaryGoals: ["Aggiungere didascalie, testo e narrazione visiva", "Design scrapbook e collage"],
      },
      subscribe: {
        title: "Resta vicino",
        lead: "Ricevi aggiornamenti sintetici sul prodotto, note TestFlight e novita sulle versioni. Niente pixel di tracciamento, niente spam.",
        bullets: ["Avanzamento delle funzioni e note di rilascio", "Aggiornamenti su beta privata e TestFlight", "Disiscriviti in qualsiasi momento via e-mail"],
        emailLabel: "Indirizzo e-mail",
        consentLabel: "Accetto di ricevere occasionalmente aggiornamenti di Photo Book Noir via e-mail e capisco di poter chiedere la disiscrizione in qualsiasi momento.",
        privacyPrefix: "La tua e-mail viene archiviata in modo sicuro in Azure ed e usata solo per questi aggiornamenti.",
        privacyLinkLabel: "Informativa sulla privacy",
        buttonLabel: "Iscriviti",
        submittingLabel: "Iscrizione in corso...",
        successMessage: "Grazie, sei nella lista.",
        errorMessage: "Iscrizione non riuscita. Riprova piu tardi.",
        validationEmail: "Inserisci un indirizzo e-mail valido.",
        validationConsent: "Conferma di voler ricevere aggiornamenti.",
        captchaMissing: "Completa il controllo di sicurezza prima di iscriverti.",
      },
      contact: {
        title: "Mettiti in contatto",
        lead: "Domande, supporto o idee per nuove funzioni? Invia un'e-mail oppure entra su Discord per aggiornamenti rapidi dalla community.",
        actionsAria: "Opzioni di contatto",
        cards: [
          {
            eyebrow: "Supporto",
            title: "Scrivi a Photo Book Noir",
            body: "Chiedi dell'app, dell'esportazione o di qualsiasi cosa blocchi il tuo prossimo fotolibro.",
            cta: "Invia e-mail",
          },
          {
            eyebrow: "Community",
            title: "Entra nella stanza Discord",
            body: "Segui gli aggiornamenti del prodotto, fai domande rapide e resta vicino alla roadmap.",
            cta: "Apri Discord",
          },
        ],
        directDetailsTitle: "Dettagli di contatto",
        details: {
          address: "Sede",
          phone: "Telefono",
          email: "E-mail",
        },
      },
    },
    footer: {
      designBy: "Design di",
      linksAria: "Link del footer",
      languageLabel: "Lingua",
      credits: "Crediti",
      privacy: "Informativa sulla privacy",
    },
    cookie: {
      ariaLabel: "Consenso ai cookie",
      textBefore: "Usiamo un piccolo cookie per ricordare la tua scelta sulla privacy e mantenere il sito funzionante come previsto. Puoi leggere di piu nella nostra ",
      linkLabel: "Informativa sulla privacy",
      accept: "Accetta i cookie",
      essential: "Solo essenziali",
    },
  }),
  tr: createLocale("tr-TR", {
    navigation: {
      toggleLabel: "Gezinmeyi degistir",
      screenshots: "Ekran goruntuleri",
      about: "Uygulama hakkinda",
      subscribe: "Abone ol",
      contact: "Iletisim ve destek",
      more: "Daha fazla",
      credits: "Katkilar",
      privacy: "Gizlilik politikasi",
      languageLabel: "Dil",
    },
    home: {
      header: {
        paragraph: "Aciklamalar, LUT filtreleri ve disa aktarmaya hazir dosyalarla temiz foto albumleri ve kolaj duzenleri tasarlayin.",
        appStoreAlt: "App Store'da gor",
        downloadLabel: "DMG indir",
      },
      about: {
        title: "Uygulama hakkinda",
        paragraph:
          "Photo Book Noir, albumler ve kolaj duzenleri tasarlamak icin bir fotokitap uygulamasidir. Anilari duzenleyin, metin ekleyin ve baski veya paylasim icin temiz disa aktarma dosyalari hazirlayin.",
        philosophy:
          "Uygulama bagimliligi giderek buyuyen bir sorun haline geldi. Bugun bircok uygulama bize yardim etmek yerine bizi icinde tutmak icin tasarlaniyor. Bu uygulamayi, teknolojinin hayati tuketmek yerine zenginlestirmesi gerektigine inanarak yaptim.",
        goalsTitle: "Hedefler neler?",
        primaryGoals: ["Buyuk fotokitaplar ve albumler", "Birden fazla disa aktarma formati", "LUT filtreleri ve yaratici gorunumler", "Hizli fotograf ice aktarma"],
        secondaryGoals: ["Aciklamalar, metin ve gorsel hikaye anlatimi ekleyin", "Scrapbook ve kolaj tasarimi"],
      },
      subscribe: {
        title: "Yakin kalin",
        lead: "Kisa urun guncellemeleri, TestFlight notlari ve surum haberleri alin. Takip pikselleri yok, spam yok.",
        bullets: ["Ozellik ilerlemesi ve surum notlari", "Ozel beta ve TestFlight guncellemeleri", "Isteginiz zaman e-postayla ayrilin"],
        emailLabel: "E-posta adresi",
        consentLabel: "Ara sira e-postayla Photo Book Noir guncellemeleri almayi kabul ediyorum ve istedigim zaman abonelikten cikma talebinde bulunabilecegimi anliyorum.",
        privacyPrefix: "E-posta adresiniz Azure'da guvenli sekilde saklanir ve yalnizca bu guncellemeler icin kullanilir.",
        privacyLinkLabel: "Gizlilik politikasi",
        buttonLabel: "Abone ol",
        submittingLabel: "Abone olunuyor...",
        successMessage: "Tesekkurler, listeye eklendiniz.",
        errorMessage: "Abonelik basarisiz oldu. Lutfen daha sonra tekrar deneyin.",
        validationEmail: "Gecerli bir e-posta adresi girin.",
        validationConsent: "Guncellemeleri almak istediginizi onaylayin.",
        captchaMissing: "Abone olmadan once guvenlik kontrolunu tamamlayin.",
      },
      contact: {
        title: "Bize ulasin",
        lead: "Sorulariniz, destek ihtiyaciniz veya ozellik fikirleriniz mi var? E-posta gonderin ya da hizli topluluk guncellemeleri icin Discord'a katilin.",
        actionsAria: "Iletisim secenekleri",
        cards: [
          {
            eyebrow: "Destek",
            title: "Photo Book Noir'a e-posta gonder",
            body: "Uygulama, disa aktarma ya da bir sonraki fotokitabinizi engelleyen herhangi bir seyi sorun.",
            cta: "Destek ekibine yaz",
          },
          {
            eyebrow: "Topluluk",
            title: "Discord odasina katil",
            body: "Urun guncellemelerini takip edin, hizli sorular sorun ve yol haritasina yakin kalin.",
            cta: "Discord'u ac",
          },
        ],
        directDetailsTitle: "Iletisim bilgileri",
        details: {
          address: "Konum",
          phone: "Telefon",
          email: "E-posta",
        },
      },
    },
    footer: {
      designBy: "Tasarim",
      linksAria: "Alt bilgi baglantilari",
      languageLabel: "Dil",
      credits: "Katkilar",
      privacy: "Gizlilik politikasi",
    },
    cookie: {
      ariaLabel: "Cerez izni",
      textBefore: "Gizlilik seciminizi hatirlamak ve sitenin beklendigi gibi calismasini saglamak icin kucuk bir cerez kullaniyoruz. Daha fazlasini ",
      linkLabel: "Gizlilik politikasinda",
      textAfter: " okuyabilirsiniz.",
      accept: "Cerezleri kabul et",
      essential: "Yalnizca gerekli",
    },
  }),
};

Object.entries(contextualSiteLocales).forEach(([language, locale]) => {
  siteContent[language] = createLocale(locale.storeLanguage, locale.overrides);
});

export const getSiteContent = (language) => siteContent[language] || siteContent[DEFAULT_LANGUAGE];