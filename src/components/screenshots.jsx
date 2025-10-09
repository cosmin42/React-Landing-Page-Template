import React, { useEffect, useState } from "react";

// Screenshots section reusing the existing #portfolio styling
export const Screenshots = (props) => {
  const images = props.data?.images || [];
  const [activeIndex, setActiveIndex] = useState(null);

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
        <div
          className="screenshots-scroll"
          role="region"
          aria-label="Screenshots gallery"
          tabIndex={0}
        >
          {images.map((item, i) => (
            <div className="screenshot-card" key={i}>
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
          aria-label={images[activeIndex]?.title || `Screenshot ${activeIndex + 1}`}
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
              src={images[activeIndex]?.src}
              alt={images[activeIndex]?.title || `Screenshot ${activeIndex + 1}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};
