// Structured credits data for the /credits page.
// Keep this file as the single source of truth so the UI stays maintainable.

export const creditsData = {
  intro: {
    title: "Credits",
    description:
      "Photobook Noir is built on the shoulders of many great projects. It relies on a diverse range of tools, libraries, and frameworks developed by talented communities and individuals. Their contributions are integral to the success of the product.",
  },

  sections: [
    {
      id: "third-party-components",
      title: "Key Third‑Party Components (Excerpt)",
      hint:
        "This is a curated excerpt. Full attribution may also be included in distributed notices, installers, or source repositories.",
      type: "components",
      items: [
        {
          name: "vcpkg",
          description:
            "Open source C/C++ library manager by Microsoft used to acquire and build many external dependencies.",
          links: [{ label: "GitHub", url: "https://github.com/microsoft/vcpkg" }],
          version: "tool snapshot 2025-04-07",
          license: "MIT",
        },
        {
          name: "Skia",
          description:
            "2D graphics library powering high‑quality text, shape, and image rendering.",
          links: [
            { label: "Site", url: "https://skia.org" },
            { label: "GitHub", url: "https://github.com/google/skia" },
          ],
          version: "milestone 133",
          license: "BSD-style",
        },
        {
          name: "Boost",
          description:
            "Collection of peer‑reviewed C++ libraries (program_options, uuid, random, bimap).",
          links: [{ label: "boost.org", url: "https://www.boost.org" }],
          version: "1.87.0",
          license: "Boost Software License 1.0",
        },
        {
          name: "Brotli",
          description: "Compression library.",
          links: [{ label: "GitHub", url: "https://github.com/google/brotli" }],
          version: "1.1.0",
          license: "MIT",
        },
        {
          name: "OpenCV",
          description: "Computer vision & image processing.",
          links: [{ label: "opencv.org", url: "https://opencv.org" }],
          version: "4.11.0",
          license: "Apache 2.0",
        },
        {
          name: "magic_enum",
          description: "Compile‑time enum reflection.",
          links: [{ label: "GitHub", url: "https://github.com/Neargye/magic_enum" }],
          version: "0.9.7",
          license: "MIT",
        },
        {
          name: "Exiv2",
          description: "Image metadata library.",
          links: [{ label: "exiv2.org", url: "https://exiv2.org" }],
          version: "0.28.5",
          license: "BSD 3‑Clause",
        },
        {
          name: "GoogleTest (gtest)",
          description: "C++ testing framework.",
          links: [{ label: "GitHub", url: "https://github.com/google/googletest" }],
          version: "1.16.0",
          license: "BSD 3‑Clause",
        },
        {
          name: "libharu",
          description: "PDF generation.",
          links: [
            { label: "Site", url: "http://libharu.org" },
            { label: "GitHub", url: "https://github.com/libharu/libharu" },
          ],
          version: "2.4.4",
          license: "ZLIB/LIBPNG",
        },
        {
          name: "SQLite",
          description: "Embedded SQL database.",
          links: [{ label: "sqlite.org", url: "https://sqlite.org" }],
          version: "3.49.1",
          license: "Public Domain",
        },
        {
          name: "nlohmann/json",
          description: "JSON for Modern C++.",
          links: [{ label: "GitHub", url: "https://github.com/nlohmann/json" }],
          version: "3.11.3",
          license: "MIT",
        },
        {
          name: "spdlog",
          description: "Fast logging.",
          links: [{ label: "GitHub", url: "https://github.com/gabime/spdlog" }],
          version: "1.15.2",
          license: "MIT",
        },
        {
          name: "inja",
          description: "Template engine.",
          links: [{ label: "GitHub", url: "https://github.com/pantor/inja" }],
          version: "3.4.0",
          license: "MIT",
        },
        {
          name: "PoDoFo",
          description: "PDF parsing & creation.",
          links: [{ label: "GitHub", url: "https://github.com/podofo/podofo" }],
          version: "0.10.4",
          license: "LGPL v2.1+ / GPL (some tools)",
        },
        {
          name: "HarfBuzz",
          description: "OpenType shaping.",
          links: [
            { label: "Site", url: "https://harfbuzz.github.io" },
            { label: "GitHub", url: "https://github.com/harfbuzz/harfbuzz" },
          ],
          version: "10.2.0",
          license: "MIT‑style",
        },
        {
          name: "ICU",
          description: "Unicode & globalization.",
          links: [{ label: "icu", url: "https://icu.unicode.org" }],
          version: "74.2",
          license: "ICU",
        },
        {
          name: "pkgconf",
          description: "Package compiler/linker metadata helper.",
          links: [{ label: "GitHub", url: "https://github.com/pkgconf/pkgconf" }],
          version: "2.4.3",
          license: "ISC",
        },
        {
          name: "Vulkan (headers / loader)",
          description: "Graphics & compute API headers/loader.",
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
          description: "Single‑header HTTP/HTTPS library.",
          links: [{ label: "GitHub", url: "https://github.com/yhirose/cpp-httplib" }],
          version: "0.20.0",
          license: "MIT",
        },
        {
          name: "minizip",
          description: "ZIP compression/decompression.",
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
      ],
    },

    {
      id: "luts",
      title: "Look Up Tables (LUTs)",
      type: "text",
      paragraphs: [
        "Certain color grading Look‑Up Tables (LUTs) bundled with Photobook Noir are provided under the Creative Commons Attribution‑ShareAlike 2.0 Generic (CC BY‑SA 2.0) license:",
      ],
      links: [
        {
          label: "https://creativecommons.org/licenses/by-sa/2.0/",
          url: "https://creativecommons.org/licenses/by-sa/2.0/",
        },
      ],
      extraParagraphs: [
        "Attribution: Original LUT authors retain all applicable rights. Where filenames or embedded metadata reference a creator, that constitutes the required attribution. Adapted LUTs (if any) are redistributed under the same CC BY‑SA 2.0 terms; modifications may include format conversion, naming normalization, or minor value precision adjustments.",
        "No warranty is provided for these LUTs; they are supplied “as is” under the CC BY‑SA 2.0 license terms.",
      ],
    },

    {
      id: "preset-authors",
      title: "Color Preset / HaldCLUT Authors",
      type: "people",
      items: [
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
        { name: "Youssef Hossam", note: "link not provided" },
        { name: "Pat David", url: "https://patdavid.net/" },
        {
          name: "Stuart Sowerby (Fuji XTrans III set)",
          url: "https://patdavid.net/2013/08/film-emulation-presets-in-gmic-gimp.html",
        },
        {
          name: "Juan Melara (Print Films set)",
          url: "http://juanmelara.com.au/print-film-emulation-luts-for-download",
        },
      ],
    },

    {
      id: "trademarks",
      title: "Trademark Disclaimer",
      type: "text",
      paragraphs: [
        "Any trademarked film or product names that may appear in LUT filenames are referenced solely for descriptive purposes; they remain the property of their respective owners.",
      ],
    },

    {
      id: "personal-thanks",
      title: "Personal Thanks",
      type: "text",
      paragraphs: [
        "Not last, credits to the love of my life, who supported me in everything I did.",
      ],
    },
  ],
};
