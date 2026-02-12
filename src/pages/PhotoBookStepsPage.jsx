import React from "react";
import { Navigation } from "../components/navigation";
import { PhotoBookSteps } from "../components/photoBookSteps";

const PhotoBookStepsPage = () => {
  return (
    <div>
      <Navigation />
      <div style={{ marginTop: "70px" }}>
        <PhotoBookSteps />
      </div>
    </div>
  );
};

export default PhotoBookStepsPage;
