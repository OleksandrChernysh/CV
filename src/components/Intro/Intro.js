import React from "react";
import "./intro.scss";
import MyImage from "Assets/Oleksandr-Chernysh.jpg";

const Intro = () => {
  return (
    <section className="intro">
      <h1 className="intro__heading">Oleksandr Chernysh</h1>
      <h2 className="intro__sub-heading">Frontend developer</h2>
      <div className="intro__card">
        <img className="intro__image" src={MyImage} alt="Oleksandr Chernysh" />
        <p className="intro__text">
          Hello, my name is Oleksandr. I have been working as a markup and
          front-end developer since 2015. My experience includes developing
          landing pages and corporate websites, as well as creating markup for
          large-scale Angular and React platforms and online stores. Currently,
          I am maintaining and enhancing the front end of&nbsp;
          <a href="https://treatfield.com">Treatfield.com</a>, an online
          psychotherapy platform.
        </p>
      </div>
    </section>
  );
};

export default Intro;
