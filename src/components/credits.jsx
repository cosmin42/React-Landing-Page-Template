import React from "react";

// Static Credits section derived from user-provided content. Kept mostly textual.
export const Credits = () => {
  return (
    <div id="credits">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-title text-center">
            <h2>Credits</h2>
            <p>
              Photobook Noir is built on the shoulders of many great projects. It
              relies on a diverse range of tools, libraries, and frameworks
              developed by talented communities and individuals. Their
              contributions are integral to the success of the product.
            </p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <h3>Key Third‑Party Components (Excerpt)</h3>
            <ul className="list-unstyled small">
              <li><strong>vcpkg</strong> – Open source C/C++ library manager by Microsoft ( <a href="https://github.com/microsoft/vcpkg" target="_blank" rel="noopener noreferrer">github</a> ) used to acquire and build many external dependencies. Version: tool snapshot 2025-04-07. License: MIT.</li>
              <li><strong>Skia</strong> – 2D graphics library ( <a href="https://skia.org" target="_blank" rel="noopener noreferrer">site</a> / <a href="https://github.com/google/skia" target="_blank" rel="noopener noreferrer">github</a> ) powering high‑quality text, shape, and image rendering. Milestone: 133. License: BSD-style.</li>
              <li><strong>Boost</strong> (program_options 1.87.0, uuid 1.87.0, random 1.87.0, bimap 1.87.0) – Collection of peer‑reviewed C++ libraries ( <a href="https://www.boost.org" target="_blank" rel="noopener noreferrer">boost.org</a> ) under the Boost Software License 1.0.</li>
              <li><strong>Brotli</strong> – Compression library ( <a href="https://github.com/google/brotli" target="_blank" rel="noopener noreferrer">github</a> ) v1.1.0. License: MIT.</li>
              <li><strong>OpenCV</strong> – Computer vision & image processing ( <a href="https://opencv.org" target="_blank" rel="noopener noreferrer">opencv.org</a> ) v4.11.0. License: Apache 2.0.</li>
              <li><strong>magic_enum</strong> – Compile‑time enum reflection ( <a href="https://github.com/Neargye/magic_enum" target="_blank" rel="noopener noreferrer">github</a> ) v0.9.7. License: MIT.</li>
              <li><strong>Exiv2</strong> – Image metadata library ( <a href="https://exiv2.org" target="_blank" rel="noopener noreferrer">exiv2.org</a> ) v0.28.5. License: BSD 3‑Clause.</li>
              <li><strong>GoogleTest (gtest)</strong> – C++ testing framework ( <a href="https://github.com/google/googletest" target="_blank" rel="noopener noreferrer">github</a> ) v1.16.0. License: BSD 3‑Clause.</li>
              <li><strong>libharu</strong> – PDF generation ( <a href="http://libharu.org" target="_blank" rel="noopener noreferrer">site</a> / <a href="https://github.com/libharu/libharu" target="_blank" rel="noopener noreferrer">github</a>) v2.4.4. License: ZLIB/LIBPNG.</li>
              <li><strong>SQLite</strong> – Embedded SQL DB ( <a href="https://sqlite.org" target="_blank" rel="noopener noreferrer">sqlite.org</a> ) v3.49.1. Public Domain.</li>
              <li><strong>nlohmann/json</strong> – JSON for Modern C++ ( <a href="https://github.com/nlohmann/json" target="_blank" rel="noopener noreferrer">github</a> ) v3.11.3. License: MIT.</li>
              <li><strong>spdlog</strong> – Fast logging ( <a href="https://github.com/gabime/spdlog" target="_blank" rel="noopener noreferrer">github</a> ) v1.15.2. License: MIT.</li>
              <li><strong>inja</strong> – Template engine ( <a href="https://github.com/pantor/inja" target="_blank" rel="noopener noreferrer">github</a> ) v3.4.0. License: MIT.</li>
              <li><strong>PoDoFo</strong> – PDF parsing & creation ( <a href="https://github.com/podofo/podofo" target="_blank" rel="noopener noreferrer">github</a> ) v0.10.4. License: LGPL v2.1+ / GPL (some tools).</li>
              <li><strong>HarfBuzz</strong> – OpenType shaping ( <a href="https://harfbuzz.github.io" target="_blank" rel="noopener noreferrer">site</a> / <a href="https://github.com/harfbuzz/harfbuzz" target="_blank" rel="noopener noreferrer">github</a> ) v10.2.0. License: MIT‑style.</li>
              <li><strong>ICU</strong> – Unicode & globalization ( <a href="https://icu.unicode.org" target="_blank" rel="noopener noreferrer">icu</a> ) v74.2. License: ICU.</li>
              <li><strong>pkgconf</strong> – Package compiler/linker metadata helper ( <a href="https://github.com/pkgconf/pkgconf" target="_blank" rel="noopener noreferrer">github</a> ) v2.4.3. License: ISC.</li>
              <li><strong>Vulkan (headers / loader)</strong> – Graphics & compute API ( <a href="https://www.vulkan.org" target="_blank" rel="noopener noreferrer">vulkan.org</a> / <a href="https://github.com/KhronosGroup/Vulkan-Headers" target="_blank" rel="noopener noreferrer">headers</a> ) headers v1.4.304.1. License: Apache 2.0.</li>
              <li><strong>cpp-httplib</strong> – Single‑header HTTP/HTTPS ( <a href="https://github.com/yhirose/cpp-httplib" target="_blank" rel="noopener noreferrer">github</a> ) v0.20.0. License: MIT.</li>
              <li><strong>minizip</strong> – ZIP compression/decompression ( <a href="https://github.com/madler/zlib" target="_blank" rel="noopener noreferrer">zlib</a> / <a href="https://github.com/zlib-ng/minizip-ng" target="_blank" rel="noopener noreferrer">minizip-ng</a> ) v1.3.1. License: zlib.</li>
            </ul>
            <hr />
            <h3>Look Up Tables (LUTs)</h3>
            <p>
              Certain color grading Look‑Up Tables (LUTs) bundled with Photobook Noir are
              provided under the <strong>Creative Commons Attribution‑ShareAlike 2.0 Generic (CC BY‑SA 2.0)</strong> license: <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener noreferrer">https://creativecommons.org/licenses/by-sa/2.0/</a>
            </p>
            <p>
              <strong>Attribution:</strong> Original LUT authors retain all applicable rights. Where filenames or embedded metadata reference a creator, that constitutes the required attribution. Adapted LUTs (if any) are redistributed under the same CC BY‑SA 2.0 terms; modifications may include format conversion, naming normalization, or minor value precision adjustments.
            </p>
            <p>No warranty is provided for these LUTs; they are supplied “as is” under the CC BY‑SA 2.0 license terms.</p>
            <hr />
            <h3>Color Preset / HaldCLUT Authors</h3>
            <ul className="small">
              <li>Sourced from the G'MIC Color Presets collection: <a href="https://gmic.eu/color_presets/" target="_blank" rel="noopener noreferrer">https://gmic.eu/color_presets/</a></li>
              <li>RawTherapee Film Simulation contributors (Creative Pack)</li>
              <li>Marc Roovers (PictureFX) – <a href="https://marcrphoto.wordpress.com/specials/698-2/" target="_blank" rel="noopener noreferrer">link</a></li>
              <li>PIXLS.US contributors – <a href="https://discuss.pixls.us/t/help-to-create-a-set-of-pixls-us-color-luts" target="_blank" rel="noopener noreferrer">discussion</a></li>
              <li>Abigail Gonzalez – <a href="https://www.abigailgonzalez.com/" target="_blank" rel="noopener noreferrer">site</a></li>
              <li>Alex Jordan – <a href="https://freshluts.com/users/1" target="_blank" rel="noopener noreferrer">freshluts</a></li>
              <li>Berat – <a href="https://freshluts.com/users/10185" target="_blank" rel="noopener noreferrer">freshluts</a></li>
              <li>EditingCorp – <a href="https://www.editingcorp.com/free-hand-picked-luts-for-cinematic-color-grading/" target="_blank" rel="noopener noreferrer">article</a></li>
              <li>Eric Ellerbrock – <a href="https://www.facebook.com/eric.ellerbrockom" target="_blank" rel="noopener noreferrer">facebook</a></li>
              <li>InAvision – <a href="https://freshluts.com/users/64078" target="_blank" rel="noopener noreferrer">freshluts</a></li>
              <li>J.T. Semple – <a href="https://freshluts.com/users/120" target="_blank" rel="noopener noreferrer">freshluts</a></li>
              <li>Kyler Holland – <a href="https://sellfy.com/p/SGnG/" target="_blank" rel="noopener noreferrer">sellfy</a></li>
              <li>Ohad Peretz – <a href="https://freshluts.com/users/992" target="_blank" rel="noopener noreferrer">freshluts</a></li>
              <li>Shamoon Abbasi – <a href="https://www.facebook.com/shamoon" target="_blank" rel="noopener noreferrer">facebook</a></li>
              <li>Todd Blankenship – <a href="https://freshluts.com/users/52679" target="_blank" rel="noopener noreferrer">freshluts</a></li>
              <li>Youssef Hossam (link not provided)</li>
              <li>Pat David (film emulation sets: B&W, Instant, Negative, Slide) – <a href="https://patdavid.net/" target="_blank" rel="noopener noreferrer">patdavid.net</a></li>
              <li>Stuart Sowerby (Fuji XTrans III set) – <a href="https://patdavid.net/2013/08/film-emulation-presets-in-gmic-gimp.html" target="_blank" rel="noopener noreferrer">article</a></li>
              <li>Juan Melara (Print Films set) – <a href="http://juanmelara.com.au/print-film-emulation-luts-for-download" target="_blank" rel="noopener noreferrer">juanmelara.com.au</a></li>
            </ul>
            <hr />
            <h4>Trademark Disclaimer</h4>
            <p className="small">
              Any trademarked film or product names that may appear in LUT filenames are referenced solely for descriptive purposes; they remain the property of their respective owners.
            </p>
            <hr />
            <p>
              Not last, credits to the love of my life, who supported me in everything I did.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
