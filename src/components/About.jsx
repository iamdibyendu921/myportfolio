import React, { useState } from 'react';

const About = () => {
  // State to hold skill progress values
  const [designProgress, setDesignProgress] = useState(85);
  const [seoProgress, setSeoProgress] = useState(95);
  const [devProgress, setDevProgress] = useState(85);
  const [marketingProgress, setMarketingProgress] = useState(80);

  return (
    <div className="about" id="about">
      <div className="content-inner">
        <div className="content-header">
          <h2>About Me</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 col-lg-5">
            <img src="img/about.jpg" alt="Image" />
          </div>
          <div className="col-md-6 col-lg-7">
            <p>
            Hi! I'm Dibyendu Ghanty, a web developer with a strong foundation in React Js, HTML, CSS, JavaScript.I’ve dedicated my time to working on various projects that have allowed me to develop and apply my skills in real-world scenarios.
            </p>
            <a className="btn" href="mailto:yourname@example.com">Hire Me</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="skills">
              <div className="skill-name">
                <p>HTML</p><p>{designProgress}%</p>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${designProgress}%` }} aria-valuenow={designProgress} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="skill-name">
                <p>CSS</p><p>{seoProgress}%</p>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${seoProgress}%` }} aria-valuenow={seoProgress} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skills">
              <div className="skill-name">
                <p>JAVASCRIPT</p><p>{devProgress}%</p>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${devProgress}%` }} aria-valuenow={devProgress} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="skill-name">
                <p>REACT JS</p><p>{marketingProgress}%</p>
              </div>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${marketingProgress}%` }} aria-valuenow={marketingProgress} aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
