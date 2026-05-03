import React from "react";

export const About = (props) => {
  const data = props.data || {};

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{data.title}</h2>
              <p>{data.paragraph}</p>
              {/* App Store badge moved to header */}
              <p>{data.philosophy}</p>
              <h3>{data.goalsTitle}</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data.primaryGoals?.map((goal, index) => (
                      <li key={`${goal}-${index}`}>{goal}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data.secondaryGoals?.map((goal, index) => (
                      <li key={`${goal}-${index}`}>{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
