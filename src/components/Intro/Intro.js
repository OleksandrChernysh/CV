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
          Hello, my name is Oleksandr. Since 2015 I&apos;ve been working as a
          markup and a front-end developer. I&apos;ve been working with landing
          pages and corporate websites as frontend-developer, and I did markup
          for large Angular and React online platforms and stores.
        </p>
      </div>
    </section>
  );
};

export default Intro;
