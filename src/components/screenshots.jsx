import React, { useEffect, useMemo, useState } from "react";

// Screenshots section reusing the existing #portfolio styling
export const Screenshots = (props) => {
  const images = useMemo(() => props.data?.images || [], [props.data?.images]);
  const title = props.data?.title || "Screenshots";
  const paragraph = props.data?.paragraph;
  const fallbackLabel = props.data?.fallbackLabel || "Screenshot";
  // Deduplicate images by src to avoid accidental double-rendering
  const [uniqueImages, setUniqueImages] = useState(images);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    if (uniqueImages.length === 0) {
      setCurrentIndex(0);
      setActiveIndex(null);
      return;
    }

    setCurrentIndex((prev) => Math.min(prev, uniqueImages.length - 1));
    setActiveIndex((prev) => {
      if (prev === null) {
        return prev;
      }
      return Math.min(prev, uniqueImages.length - 1);
    });
  }, [uniqueImages]);

  const closeModal = () => setActiveIndex(null);
  const openModal = (i) => setActiveIndex(i);
  const showPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? uniqueImages.length - 1 : prev - 1
    );
  };
  const showNext = () => {
    setCurrentIndex((prev) =>
      prev === uniqueImages.length - 1 ? 0 : prev + 1
    );
  };

  const activeScreenshot = uniqueImages[activeIndex ?? currentIndex];
  const featuredScreenshot = uniqueImages[currentIndex];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
      if (activeIndex !== null && e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === 0 ? uniqueImages.length - 1 : prev - 1
        );
      }
      if (activeIndex !== null && e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === uniqueImages.length - 1 ? 0 : prev + 1
        );
      }
    };
    if (activeIndex !== null) {
      window.addEventListener("keydown", onKey);
    }
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, uniqueImages.length]);

  return (
    <div id="portfolio" className="screenshots-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-title text-center">
            <h2 id="screenshots-title">{title}</h2>
            {paragraph ? <p className="small screenshots-intro">{paragraph}</p> : null}
          </div>
        </div>
        {featuredScreenshot ? (
          <div
            className="screenshots-showcase"
            role="region"
            aria-labelledby="screenshots-title"
          >
            <div className="screenshots-stage-panel">
              <div className="screenshots-stage-copy">
                <span className="screenshots-kicker">{props.data?.kicker}</span>
                <span className="screenshots-counter">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(uniqueImages.length).padStart(2, "0")}
                </span>
              </div>
              <button
                type="button"
                className="screenshot-stage-button"
                aria-label={(featuredScreenshot.title || `${fallbackLabel} ${currentIndex + 1}`) + `, ${props.data?.enlarge}`}
                onClick={() => openModal(currentIndex)}
              >
                <div className="screenshot-stage-frame" aria-hidden="true">
                  <img
                    src={featuredScreenshot.src}
                    className="img-responsive"
                    alt={featuredScreenshot.title || `${fallbackLabel} ${currentIndex + 1}`}
                    loading="lazy"
                  />
                </div>
              </button>
              <div className="screenshots-stage-footer" align="center">
                <div className="screenshots-stage-actions" aria-label={props.data?.navLabel}>
                  <button type="button" onClick={showPrevious} aria-label={props.data?.previousAria}>
                    {props.data?.previous}
                  </button>
                  <button type="button" onClick={showNext} aria-label={props.data?.nextAria}>
                    {props.data?.next}
                  </button>
                </div>
              </div>
            </div>
            <div className="screenshots-rail" aria-label={props.data?.railLabel}>
              {uniqueImages.map((item, i) => (
                <button
                  type="button"
                  className={`screenshot-rail-card${i === currentIndex ? " is-active" : ""}`}
                  aria-pressed={i === currentIndex}
                  onClick={() => setCurrentIndex(i)}
                  key={item.src || i}
                >
                  <span className="screenshot-rail-index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="screenshot-rail-copy">
                    <strong>{item.title || `${fallbackLabel} ${i + 1}`}</strong>
                    <small>
                      {i === currentIndex ? props.data?.featuredNow : props.data?.clickToPreview}
                    </small>
                  </span>
                  <span className="screenshot-rail-thumb" aria-hidden="true">
                    <img
                      src={item.src}
                      className="img-responsive"
                      alt=""
                      loading="lazy"
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {activeIndex !== null && (
        <div
          className="screenshot-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeScreenshot?.title || `${fallbackLabel} ${activeIndex + 1}`}
          onClick={closeModal}
        >
          <div className="screenshot-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="screenshot-modal-close"
              aria-label={props.data?.close}
              onClick={closeModal}
            >
              ×
            </button>
            {uniqueImages.length > 1 ? (
              <>
                <button
                  type="button"
                  className="screenshot-modal-nav screenshot-modal-nav-prev"
                  aria-label={props.data?.previousAria}
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev === 0 ? uniqueImages.length - 1 : prev - 1
                    )
                  }
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="screenshot-modal-nav screenshot-modal-nav-next"
                  aria-label={props.data?.nextAria}
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev === uniqueImages.length - 1 ? 0 : prev + 1
                    )
                  }
                >
                  ›
                </button>
              </>
            ) : null}
            <img
              src={activeScreenshot?.src}
              alt={activeScreenshot?.title || `${fallbackLabel} ${activeIndex + 1}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};
