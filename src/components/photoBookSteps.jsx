import React from "react";

const STEPS = [
  {
    id: "choose-photos",
    number: "1",
    title: "Have the images on your iPad",
    content: (
      <>
        <p>
          Start by collecting the images you want to include directly on your iPad so they’re easy to review, edit,
          and arrange in one place.
        </p>
        <ul>
          <li>Make sure all selected photos are available offline (if needed)</li>
          <li>Organize them in a dedicated album for this photo book</li>
        </ul>
      </>
    ),
  },
  {
    id: "try-formats",
    number: "2",
    title: "Try album formats and decide the layout rules",
    content: (
      <>
        <p>
          Experiment with album formats and settle on the format that works best for your images.
        </p>
        <ul>
          <li>Choose the album dimensions</li>
          <li>Decide if images have margins, and whether they fit or fill the space</li>
          <li>Pick a background color</li>
          <li>Decide on captions (camera details or short notes)</li>
        </ul>
      </>
    ),
  },
  {
    id: "select-quality",
    number: "3",
    title: "Select good-quality images",
    content: (
      <>
        <p>
          Keep only images that will look great in print.
        </p>
        <ul>
          <li>Good focalization (sharp focus)</li>
          <li>Stabilized images (avoid motion blur)</li>
          <li>Not too exposed (avoid blown highlights)</li>
        </ul>
      </>
    ),
  },
  {
    id: "corrections-filters",
    number: "4",
    title: "Apply corrections and filters",
    content: (
      <>
        <p>
          Make your photos consistent and print-ready by applying basic corrections first. Add filters only if you
          want a specific mood.
        </p>
        <ul>
          <li>Correct brightness, contrast, and saturation</li>
          <li>Apply filters for a consistent look (optional)</li>
        </ul>
      </>
    ),
  },
  {
    id: "resize-page-size",
    number: "5",
    title: "Resize to the same page size",
    content: (
      <>
        <p>
          With your format decided, apply it consistently so every image matches the album page size.
        </p>
        <ul>
          <li>Move images from the Draft section to the album section</li>
          <li>The chosen album format is applied to all images</li>
        </ul>
      </>
    ),
  },
  {
    id: "export-zip",
    number: "6",
    title: "Export the album as a ZIP archive",
    content: (
      <>
        <p>
          Export the finished album to a ZIP archive so you can easily transfer or upload it.
        </p>
        <ul>
          <li>Export to a ZIP archive</li>
          <li>Share it to your preferred platform/device</li>
        </ul>
      </>
    ),
  },
  {
    id: "print",
    number: "7",
    title: "Print it",
    content: (
      <>
        <p>
          Send the exported album to your favorite printing service and place your print order.
        </p>
        <ul>
          <li>Choose paper, cover, and finish options you like</li>
          <li>Review the printer’s preview before confirming</li>
        </ul>
      </>
    ),
  },
];

export const PhotoBookSteps = () => {
  return (
    <div id="photo-book-steps">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-title text-center">
            <h2>7 Steps to Create a Photo Book</h2>
            <p className="small">
              A quick checklist from iPad selection to printing.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <nav aria-label="Steps table of contents" style={{ marginBottom: "20px" }}>
              <h3 className="h4">On this page</h3>
              <ol className="small">
                {STEPS.map((step) => (
                  <li key={step.id}>
                    <a href={`#${step.id}`}>
                      {step.number}. {step.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <article aria-label="Photo book creation steps">
              {STEPS.map((step, idx) => (
                <section key={step.id} aria-labelledby={`${step.id}-title`}>
                  <h3 id={`${step.id}-title`} style={{ marginTop: idx === 0 ? 0 : "24px" }}>
                    <a href={`#${step.id}`} id={step.id} aria-label={`${step.title} link`}>
                      {step.number}. {step.title}
                    </a>
                  </h3>
                  <div>{step.content}</div>
                  {idx !== STEPS.length - 1 ? <hr /> : null}
                </section>
              ))}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoBookSteps;
