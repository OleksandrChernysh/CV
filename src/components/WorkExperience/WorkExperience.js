import React from "react";
import "./work-experience.scss";

const WorkExperience = () => {
  return (
    <section className="work-experience">
      <h3 className="work-experience__heading">Work experience</h3>
      <ul className="work-experience__list">
        <li className="work-experience__item">
          <h4>Treatfield</h4>
          <h5>Front-end developer</h5>
          <span>09.2021 – till now (part-time)</span>
          <p>
            Maintaining a <a href="https://treatfield.com">Treatfield.com</a>.
            It is an online psychotherapy platform:
          </p>
          <ul className="work-experience__details">
            <li>
              Adding and maintaining frontend build automation based on Webpack
            </li>
            <li>Refactoring all CSS code and moving it to SCSS</li>
            <li>
              Refactoring all jQuery based javascript code and moving it to ES6
              classes
            </li>
          </ul>
        </li>
        <li className="work-experience__item">
          <h4>Unicsoft</h4>
          <h5>Markup developer/Junior Front-end developer</h5>
          <span>02.2017 – 01.2021</span>
          <p>
            Creating layouts and UI interactive elements for corporate websites,
            large Angular and React applications.
            <br />
            The two biggest projects, on which I worked here, were:
            <ul className="work-experience__details">
              <li>
                <a href="https://executive-eye.com/">ExecutiveEye</a> platform.
                Here I was doing markup for complete redesign of their{" "}
                <a href="https://execeye.dashboardonline.com/">
                  execeye.dashboardonline application
                </a>
              </li>
              <li>
                <a href="https://getinlightened.com/">Inlightened</a> platform.
                Here I&apos;ve created whole markup for{" "}
                <a href="https://app.getinlightened.com/">
                  app.getinlightened application
                </a>
              </li>
            </ul>
            The markup for both applications is based on &quot;Material Design
            for Web&quot; library and frontend for both of them was created on
            Angular 2.
          </p>
        </li>
        <li className="work-experience__item">
          <h4>Mil&apos;s</h4>
          <h5>Markup developer</h5>
          <span>09.2016 – 12.2016</span>
          <p>
            Creating layouts for corporate websites. Integrating layouts into
            WordPress.
          </p>
        </li>
        <li className="work-experience__item">
          <h4>ASAPP</h4>
          <h5>Markup developer</h5>
          <span>08.2015 - 08.2016</span>
          <p>
            Creating layouts for: landing pages corporate websites and SPA.
            Integrating layouts into Drupal. Creating interactive presentations
            for SalesForce CRM.
          </p>
        </li>
        <li className="work-experience__item">
          <h4>PlanA</h4>
          <h5>Markup developer</h5>
          <span>04.2015 - 07.2015</span>
          <p>
            Creating layouts for corporate websites. Integrating layouts into
            MODX.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default WorkExperience;
