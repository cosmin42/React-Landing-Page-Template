import React, { useEffect, useState } from "react";

// Screenshots section reusing the existing #portfolio styling
export const Screenshots = (props) => {
  const images = props.data?.images || [];
  const title = props.data?.title || "Screenshots";
  const paragraph = props.data?.paragraph;
  // Deduplicate images by src to avoid accidental double-rendering
  const [uniqueImages, setUniqueImages] = useState(images);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (!images || images.length === 0) {
      setUniqueImages([]);
      return;
    }
    const map = new Map();
    images.forEach((img) => {
      if (!map.has(img.src)) map.set(img.src, img);
    });
    const deduped = Array.from(map.values());
    if (deduped.length !== images.length) {
      // Helpful for debugging in development
      // eslint-disable-next-line no-console
      console.warn(
        `Screenshots: removed ${images.length - deduped.length} duplicate image(s)`
      );
    }
    setUniqueImages(deduped);
  }, [images]);

  const closeModal = () => setActiveIndex(null);
  const openModal = (i) => setActiveIndex(i);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (activeIndex !== null) {
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  return (
    <div id="portfolio" className="screenshots-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-title text-center">
            <h2 id="screenshots-title">{title}</h2>
            {paragraph ? <p className="small">{paragraph}</p> : null}
          </div>
        </div>
        <div
          className="screenshots-scroll"
          role="region"
          aria-labelledby="screenshots-title"
          tabIndex={0}
        >
          {uniqueImages.map((item, i) => (
            <div className="screenshot-card" key={item.src || i}>
              <div className="portfolio-item">
                <button
                  type="button"
                  className="screenshot-img-button"
                  aria-label={(item.title || `Screenshot ${i + 1}`) + ", enlarge"}
                  onClick={() => openModal(i)}
                >
                  <div className="screenshot-img-wrap" aria-hidden="true">
                    <img
                      src={item.src}
                      className="img-responsive"
                      alt={item.title || `Screenshot ${i + 1}`}
                      loading="lazy"
                    />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeIndex !== null && (
        <div
          className="screenshot-modal"
          role="dialog"
          aria-modal="true"
          aria-label={uniqueImages[activeIndex]?.title || `Screenshot ${activeIndex + 1}`}
          onClick={closeModal}
        >
          <div className="screenshot-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="screenshot-modal-close"
              aria-label="Close"
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={uniqueImages[activeIndex]?.src}
              alt={uniqueImages[activeIndex]?.title || `Screenshot ${activeIndex + 1}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};
