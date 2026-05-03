// Structured credits data for the /credits page.
// Keep this file as the single source of truth so the UI stays maintainable.

const componentItems = [
  {
    name: "vcpkg",
    description: {
      en: "Open source C/C++ library manager by Microsoft used to acquire and build many external dependencies.",
      nl: "Open-source C/C++-bibliotheekbeheerder van Microsoft om veel externe afhankelijkheden op te halen en te bouwen.",
      fr: "Gestionnaire open source de bibliotheques C/C++ de Microsoft utilise pour recuperer et compiler de nombreuses dependances externes.",
    },
    links: [{ label: "GitHub", url: "https://github.com/microsoft/vcpkg" }],
    version: "tool snapshot 2025-04-07",
    license: "MIT",
  },
  {
    name: "Skia",
    description: {
      en: "2D graphics library powering high-quality text, shape, and image rendering.",
      nl: "2D-grafische bibliotheek voor hoogwaardige weergave van tekst, vormen en afbeeldingen.",
      fr: "Bibliotheque graphique 2D pour le rendu haute qualite du texte, des formes et des images.",
    },
    links: [
      { label: "Site", url: "https://skia.org" },
      { label: "GitHub", url: "https://github.com/google/skia" },
    ],
    version: "milestone 133",
    license: "BSD-style",
  },
  {
    name: "Boost",
    description: {
      en: "Collection of peer-reviewed C++ libraries (program_options, uuid, random, bimap).",
      nl: "Verzameling peer-reviewed C++-bibliotheken (program_options, uuid, random, bimap).",
      fr: "Collection de bibliotheques C++ evaluees par les pairs (program_options, uuid, random, bimap).",
    },
    links: [{ label: "boost.org", url: "https://www.boost.org" }],
    version: "1.87.0",
    license: "Boost Software License 1.0",
  },
  {
    name: "Brotli",
    description: {
      en: "Compression library.",
      nl: "Compressiebibliotheek.",
      fr: "Bibliotheque de compression.",
    },
    links: [{ label: "GitHub", url: "https://github.com/google/brotli" }],
    version: "1.1.0",
    license: "MIT",
  },
  {
    name: "OpenCV",
    description: {
      en: "Computer vision and image processing.",
      nl: "Computer vision en beeldverwerking.",
      fr: "Vision par ordinateur et traitement d'image.",
    },
    links: [{ label: "opencv.org", url: "https://opencv.org" }],
    version: "4.11.0",
    license: "Apache 2.0",
  },
  {
    name: "magic_enum",
    description: {
      en: "Compile-time enum reflection.",
      nl: "Enum-reflectie tijdens compilatie.",
      fr: "Reflection d'enums a la compilation.",
    },
    links: [{ label: "GitHub", url: "https://github.com/Neargye/magic_enum" }],
    version: "0.9.7",
    license: "MIT",
  },
  {
    name: "Exiv2",
    description: {
      en: "Image metadata library.",
      nl: "Bibliotheek voor afbeeldingsmetadata.",
      fr: "Bibliotheque de metadonnees d'image.",
    },
    links: [{ label: "exiv2.org", url: "https://exiv2.org" }],
    version: "0.28.5",
    license: "BSD 3-Clause",
  },
  {
    name: "GoogleTest (gtest)",
    description: {
      en: "C++ testing framework.",
      nl: "C++-testframework.",
      fr: "Framework de test C++.",
    },
    links: [{ label: "GitHub", url: "https://github.com/google/googletest" }],
    version: "1.16.0",
    license: "BSD 3-Clause",
  },
  {
    name: "libharu",
    description: {
      en: "PDF generation.",
      nl: "PDF-generatie.",
      fr: "Generation de PDF.",
    },
    links: [
      { label: "Site", url: "http://libharu.org" },
      { label: "GitHub", url: "https://github.com/libharu/libharu" },
    ],
    version: "2.4.4",
    license: "ZLIB/LIBPNG",
  },
  {
    name: "SQLite",
    description: {
      en: "Embedded SQL database.",
      nl: "Embedded SQL-database.",
      fr: "Base de donnees SQL embarquee.",
    },
    links: [{ label: "sqlite.org", url: "https://sqlite.org" }],
    version: "3.49.1",
    license: "Public Domain",
  },
  {
    name: "nlohmann/json",
    description: {
      en: "JSON for Modern C++.",
      nl: "JSON voor Modern C++.",
      fr: "JSON pour Modern C++.",
    },
    links: [{ label: "GitHub", url: "https://github.com/nlohmann/json" }],
    version: "3.11.3",
    license: "MIT",
  },
  {
    name: "spdlog",
    description: {
      en: "Fast logging.",
      nl: "Snelle logging.",
      fr: "Journalisation rapide.",
    },
    links: [{ label: "GitHub", url: "https://github.com/gabime/spdlog" }],
    version: "1.15.2",
    license: "MIT",
  },
  {
    name: "inja",
    description: {
      en: "Template engine.",
      nl: "Template-engine.",
      fr: "Moteur de templates.",
    },
    links: [{ label: "GitHub", url: "https://github.com/pantor/inja" }],
    version: "3.4.0",
    license: "MIT",
  },
  {
    name: "PoDoFo",
    description: {
      en: "PDF parsing and creation.",
      nl: "PDF-parsing en -creatie.",
      fr: "Analyse et creation de PDF.",
    },
    links: [{ label: "GitHub", url: "https://github.com/podofo/podofo" }],
    version: "0.10.4",
    license: "LGPL v2.1+ / GPL (some tools)",
  },
  {
    name: "HarfBuzz",
    description: {
      en: "OpenType shaping.",
      nl: "OpenType-shaping.",
      fr: "Mise en forme OpenType.",
    },
    links: [
      { label: "Site", url: "https://harfbuzz.github.io" },
      { label: "GitHub", url: "https://github.com/harfbuzz/harfbuzz" },
    ],
    version: "10.2.0",
    license: "MIT-style",
  },
  {
    name: "ICU",
    description: {
      en: "Unicode and globalization.",
      nl: "Unicode en internationalisering.",
      fr: "Unicode et internationalisation.",
    },
    links: [{ label: "icu", url: "https://icu.unicode.org" }],
    version: "74.2",
    license: "ICU",
  },
  {
    name: "pkgconf",
    description: {
      en: "Package compiler/linker metadata helper.",
      nl: "Helper voor compiler/linker-metadata van pakketten.",
      fr: "Outil d'aide pour les metadonnees de compilation et d'edition de liens.",
    },
    links: [{ label: "GitHub", url: "https://github.com/pkgconf/pkgconf" }],
    version: "2.4.3",
    license: "ISC",
  },
  {
    name: "Vulkan (headers / loader)",
    description: {
      en: "Graphics and compute API headers/loader.",
      nl: "Headers/loader voor grafische en compute-API's.",
      fr: "En-tetes et chargeur pour API graphique et compute.",
    },
    links: [
      { label: "vulkan.org", url: "https://www.vulkan.org" },
      {
        label: "Headers",
        url: "https://github.com/KhronosGroup/Vulkan-Headers",
      },
    ],
    version: "headers v1.4.304.1",
    license: "Apache 2.0",
  },
  {
    name: "cpp-httplib",
    description: {
      en: "Single-header HTTP/HTTPS library.",
      nl: "HTTP/HTTPS-bibliotheek in een enkele header.",
      fr: "Bibliotheque HTTP/HTTPS en un seul header.",
    },
    links: [{ label: "GitHub", url: "https://github.com/yhirose/cpp-httplib" }],
    version: "0.20.0",
    license: "MIT",
  },
  {
    name: "minizip",
    description: {
      en: "ZIP compression/decompression.",
      nl: "ZIP-compressie en -decompressie.",
      fr: "Compression/decompression ZIP.",
    },
    links: [
      { label: "zlib", url: "https://github.com/madler/zlib" },
      {
        label: "minizip-ng",
        url: "https://github.com/zlib-ng/minizip-ng",
      },
    ],
    version: "1.3.1",
    license: "zlib",
  },
];

const peopleItems = [
  {
    name: "G'MIC Color Presets collection",
    url: "https://gmic.eu/color_presets/",
  },
  { name: "RawTherapee Film Simulation contributors (Creative Pack)" },
  {
    name: "Marc Roovers (PictureFX)",
    url: "https://marcrphoto.wordpress.com/specials/698-2/",
  },
  {
    name: "PIXLS.US contributors",
    url: "https://discuss.pixls.us/t/help-to-create-a-set-of-pixls-us-color-luts",
  },
  { name: "Abigail Gonzalez", url: "https://www.abigailgonzalez.com/" },
  { name: "Alex Jordan", url: "https://freshluts.com/users/1" },
  { name: "Berat", url: "https://freshluts.com/users/10185" },
  {
    name: "EditingCorp",
    url: "https://www.editingcorp.com/free-hand-picked-luts-for-cinematic-color-grading/",
  },
  {
    name: "Eric Ellerbrock",
    url: "https://www.facebook.com/eric.ellerbrockom",
  },
  { name: "InAvision", url: "https://freshluts.com/users/64078" },
  { name: "J.T. Semple", url: "https://freshluts.com/users/120" },
  { name: "Kyler Holland", url: "https://sellfy.com/p/SGnG/" },
  { name: "Ohad Peretz", url: "https://freshluts.com/users/992" },
  { name: "Shamoon Abbasi", url: "https://www.facebook.com/shamoon" },
  { name: "Todd Blankenship", url: "https://freshluts.com/users/52679" },
  {
    name: "Youssef Hossam",
    note: {
      en: "link not provided",
      nl: "geen link opgegeven",
      fr: "lien non fourni",
    },
  },
  { name: "Pat David", url: "https://patdavid.net/" },
  {
    name: "Stuart Sowerby (Fuji XTrans III set)",
    url: "https://patdavid.net/2013/08/film-emulation-presets-in-gmic-gimp.html",
  },
  {
    name: "Juan Melara (Print Films set)",
    url: "http://juanmelara.com.au/print-film-emulation-luts-for-download",
  },
];

const creditsLabels = {
  en: {
    intro: {
      title: "Credits",
      description:
        "Photobook Noir is built on the shoulders of many great projects. It relies on a diverse range of tools, libraries, and frameworks developed by talented communities and individuals. Their contributions are integral to the success of the product.",
    },
    backHome: "Back Home",
    showHide: "Show / hide list",
    versionLabel: "Version",
    licenseLabel: "License",
    sections: {
      componentsTitle: "Key Third-Party Components (Excerpt)",
      componentsHint:
        "This is a curated excerpt. Full attribution may also be included in distributed notices, installers, or source repositories.",
      lutsTitle: "Look Up Tables (LUTs)",
      lutsParagraphs: [
        "Certain color grading Look-Up Tables (LUTs) bundled with Photobook Noir are provided under the Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0) license:",
      ],
      lutsExtraParagraphs: [
        "Attribution: Original LUT authors retain all applicable rights. Where filenames or embedded metadata reference a creator, that constitutes the required attribution. Adapted LUTs (if any) are redistributed under the same CC BY-SA 2.0 terms; modifications may include format conversion, naming normalization, or minor value precision adjustments.",
        "No warranty is provided for these LUTs; they are supplied as is under the CC BY-SA 2.0 license terms.",
      ],
      authorsTitle: "Color Preset / HaldCLUT Authors",
      trademarksTitle: "Trademark Disclaimer",
      trademarksParagraphs: [
        "Any trademarked film or product names that may appear in LUT filenames are referenced solely for descriptive purposes; they remain the property of their respective owners.",
      ],
      thanksTitle: "Personal Thanks",
      thanksParagraphs: [
        "Not last, credits to the love of my life, who supported me in everything I did.",
      ],
    },
  },
  nl: {
    intro: {
      title: "Credits",
      description:
        "Photobook Noir bouwt voort op veel sterke projecten. Het product steunt op een brede mix van tools, bibliotheken en frameworks van getalenteerde communities en makers. Hun bijdragen zijn wezenlijk voor het succes van het product.",
    },
    backHome: "Terug naar home",
    showHide: "Lijst tonen / verbergen",
    versionLabel: "Versie",
    licenseLabel: "Licentie",
    sections: {
      componentsTitle: "Belangrijke third-party componenten (uittreksel)",
      componentsHint:
        "Dit is een samengestelde selectie. Volledige naamsvermelding kan ook voorkomen in verspreide notices, installers of bronrepositories.",
      lutsTitle: "Look Up Tables (LUT's)",
      lutsParagraphs: [
        "Bepaalde color grading Look-Up Tables (LUT's) die met Photobook Noir worden meegeleverd, vallen onder de Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0)-licentie:",
      ],
      lutsExtraParagraphs: [
        "Naamsvermelding: oorspronkelijke LUT-auteurs behouden alle toepasselijke rechten. Waar bestandsnamen of ingesloten metadata naar een maker verwijzen, geldt dat als vereiste naamsvermelding. Aangepaste LUT's worden, indien aanwezig, onder dezelfde CC BY-SA 2.0-voorwaarden verspreid; wijzigingen kunnen formaatconversie, naamharmonisatie of kleine aanpassingen in precisie omvatten.",
        "Voor deze LUT's wordt geen garantie gegeven; ze worden geleverd in de staat waarin ze zich bevinden onder de voorwaarden van CC BY-SA 2.0.",
      ],
      authorsTitle: "Auteurs van kleurpresets / HaldCLUT's",
      trademarksTitle: "Handelsmerkverklaring",
      trademarksParagraphs: [
        "Eventuele handelsnamen van film- of productnamen in LUT-bestandsnamen worden uitsluitend ter beschrijving gebruikt en blijven eigendom van hun respectieve rechthebbenden.",
      ],
      thanksTitle: "Persoonlijk dankwoord",
      thanksParagraphs: [
        "Tot slot dank aan de liefde van mijn leven, die me heeft gesteund in alles wat ik deed.",
      ],
    },
  },
  fr: {
    intro: {
      title: "Credits",
      description:
        "Photobook Noir s'appuie sur de nombreux excellents projets. Le produit repose sur un ensemble varie d'outils, de bibliotheques et de frameworks construits par des communautes et des personnes talentueuses. Leurs contributions sont essentielles a la reussite du produit.",
    },
    backHome: "Retour a l'accueil",
    showHide: "Afficher / masquer la liste",
    versionLabel: "Version",
    licenseLabel: "Licence",
    sections: {
      componentsTitle: "Principaux composants tiers (extrait)",
      componentsHint:
        "Il s'agit d'un extrait selectionne. L'attribution complete peut aussi figurer dans les notices distribuees, les installateurs ou les depots sources.",
      lutsTitle: "Look Up Tables (LUT)",
      lutsParagraphs: [
        "Certaines LUT de color grading distribuees avec Photobook Noir sont fournies sous licence Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0) :",
      ],
      lutsExtraParagraphs: [
        "Attribution : les auteurs originaux des LUT conservent tous les droits applicables. Lorsque des noms de fichiers ou des metadonnees integrent un createur, cela constitue l'attribution requise. Les LUT adaptees, le cas echeant, sont redistribuees selon les memes termes CC BY-SA 2.0 ; les modifications peuvent inclure une conversion de format, une normalisation des noms ou de legeres corrections de precision.",
        "Aucune garantie n'est fournie pour ces LUT ; elles sont proposees telles quelles selon les termes de la licence CC BY-SA 2.0.",
      ],
      authorsTitle: "Auteurs des presets couleur / HaldCLUT",
      trademarksTitle: "Avertissement sur les marques",
      trademarksParagraphs: [
        "Tout nom de film ou de produit protege par une marque qui apparaitrait dans un nom de fichier LUT est utilise uniquement a des fins descriptives et reste la propriete de son detenteur respectif.",
      ],
      thanksTitle: "Remerciement personnel",
      thanksParagraphs: [
        "Enfin, un merci tout particulier a l'amour de ma vie, qui m'a soutenu dans tout ce que j'ai entrepris.",
      ],
    },
  },
};

const localizeItems = (items, language) =>
  items.map((item) => ({
    ...item,
    description: item.description ? item.description[language] : undefined,
    note: item.note && typeof item.note === "object" ? item.note[language] : item.note,
  }));

const buildCreditsData = (language) => {
  const labels = creditsLabels[language];

  return {
    intro: labels.intro,
    backHome: labels.backHome,
    showHide: labels.showHide,
    versionLabel: labels.versionLabel,
    licenseLabel: labels.licenseLabel,
    sections: [
      {
        id: "third-party-components",
        title: labels.sections.componentsTitle,
        hint: labels.sections.componentsHint,
        type: "components",
        items: localizeItems(componentItems, language),
      },
      {
        id: "luts",
        title: labels.sections.lutsTitle,
        type: "text",
        paragraphs: labels.sections.lutsParagraphs,
        links: [
          {
            label: "https://creativecommons.org/licenses/by-sa/2.0/",
            url: "https://creativecommons.org/licenses/by-sa/2.0/",
          },
        ],
        extraParagraphs: labels.sections.lutsExtraParagraphs,
      },
      {
        id: "preset-authors",
        title: labels.sections.authorsTitle,
        type: "people",
        items: localizeItems(peopleItems, language),
      },
      {
        id: "trademarks",
        title: labels.sections.trademarksTitle,
        type: "text",
        paragraphs: labels.sections.trademarksParagraphs,
      },
      {
        id: "personal-thanks",
        title: labels.sections.thanksTitle,
        type: "text",
        paragraphs: labels.sections.thanksParagraphs,
      },
    ],
  };
};

export const creditsData = {
  en: buildCreditsData("en"),
  nl: buildCreditsData("nl"),
  fr: buildCreditsData("fr"),
};
