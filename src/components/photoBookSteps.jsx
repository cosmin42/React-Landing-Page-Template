import React, { useMemo, useState } from "react";
import "./photoBookSteps.css";

const STEPS = [
  {
    title: "Prepare Your Gallery",
    imgSrc: "/img/steps-pb/step_1.avif",
    details: [
      "Ensure all the photos you wish to use are saved locally on your iPad."
    ],
  },
  {
    title: "Experiment Aesthetic",
    imgSrc: "/img/steps-pb/step_2.avif",
    details: [
      "Experiment with different layouts to find the perfect look for your story. At this stage, you should decide on:",
      "Dimensions: Choose your preferred album size and orientation.",
      "Framing: Decide between \"Fit to Page\" (with margins) or \"Fill Page\" (full bleed).",
      "Styling: Select a background color and determine if you want to include captions, camera metadata, or personal notes."
    ],
  },
  {
    title: "Curate with Quality in Mind",
    imgSrc: "/img/steps-pb/step_3.avif",
    details: [
      "For the best printing results, select high-resolution images. Look for photos with:",
      "Sharp Focus: Avoid blurry or out-of-focus shots.",
      "Stability: Ensure the subject is clear and not affected by camera shake.",
      "Balanced Exposure: Choose images that aren't overly dark or washed out."
    ],
  },
  {
    title: "Correction and Filters",
    imgSrc: "/img/steps-pb/step_4.avif",
    details: [
      "Fine-tune your photos to create a cohesive mood. Use the built-in tools to adjust Brightness,",
      "Contrast, and Saturation, or apply consistent filters to give your entire album a professional,",
      "unified feel."
    ],
  },
  {
    title: "Cropping, Collages, Captions",
    imgSrc: "/img/steps-pb/step_5.avif",
    details: [
      "Move your curated images from the Drafts section into the Album section. The formatting choices you made in Step 2 will automatically apply to all images, ensuring a consistent page size and alignment throughout the book.",
    ],
  },
  {
    title: "Export & Share",
    imgSrc: "/img/steps-pb/step_6.avif",
    details: [
      "Once you are happy with the preview, export your album as a ZIP archive. You can then share it to your preferred device or cloud platform.",
    ],
  },
  {
    title: "Print",
    imgSrc: "/img/steps-pb/step_7.avif",
    details: [
      "Send it to your favorite printing service to bring your photo book to life.",
    ],
  },
];

export const PhotoBookSteps = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const activeStep = useMemo(() => {
    if (activeIndex === null) return null;
    return STEPS[activeIndex] || null;
  }, [activeIndex]);

  return (
    <div id="photo-book-steps">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-title text-center">
            <h2>7 Steps to Create a Photo Book</h2>
            <p className="small">A simple checklist from start to print.</p>
          </div>
        </div>

        <div className="row pbs-grid">
          {STEPS.map((step, idx) => (
            <div key={step.title} className="col-xs-6 col-sm-4 col-md-3" style={{ marginBottom: 14 }}>
              <button
                type="button"
                className={`pbs-tile ${activeIndex === idx ? "is-active" : ""}`}
                onClick={() => setActiveIndex((prev) => (prev === idx ? null : idx))}
                aria-expanded={activeIndex === idx}
                aria-controls="photo-book-steps-details"
              >
                <div className="pbs-tile-inner">
                  {step.imgSrc ? (
                    <div className="pbs-media">
                      <img
                        className="pbs-media-img"
                        src={step.imgSrc}
                        alt={step.title}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="pbs-media" aria-hidden="true" />
                  )}
                  <h3 className="pbs-title">
                    <span className="pbs-number">{idx + 1}.</span>
                    {step.title}
                  </h3>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div id="photo-book-steps-details" className="pbs-details" aria-live="polite">
              {activeStep ? (
                <div className="panel panel-default pbs-details-panel">
                  <div className="panel-heading">
                    <h3 className="panel-title">
                      {activeIndex + 1}. {activeStep.title}
                    </h3>
                  </div>
                  <div className="panel-body">
                    <div className="pbs-details-box">
                      <ul className="pbs-details-list">
                        {(activeStep.details || []).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="small text-center pbs-details-hint">Click a step to see more details.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoBookSteps;
