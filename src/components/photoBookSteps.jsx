import React from "react";
import "./photoBookSteps.css";

const STEP_TITLES = [
  "Collect the photos on your iPad",
  "Experiment layout",
  "Image Selection",
  "Correction and Filters",
  "Copping",
  "Export",
  "Print",
];

export const PhotoBookSteps = () => {
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
          {STEP_TITLES.map((title, idx) => (
            <div key={title} className="col-xs-6 col-sm-4 col-md-3" style={{ marginBottom: 14 }}>
              <div className="pbs-tile">
                <div className="pbs-tile-inner">
                  <div className="pbs-media" aria-hidden="true" />
                  <h3 className="pbs-title">
                    <span className="pbs-number">{idx + 1}.</span>
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoBookSteps;
