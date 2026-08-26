import React from 'react';
import './intro.scss';
import MyImage from 'Assets/Oleksandr-Chernysh-2.jpg';

const Intro = () => {
    return (
        <section className="intro">
            <h1 className="intro__heading">Oleksandr Chernysh</h1>
            <h2 className="intro__sub-heading">Frontend developer</h2>
            <div className="intro__card">
                <img className="intro__image" src={MyImage} alt="Oleksandr Chernysh" />
                <p className="intro__text">
                    Experienced Frontend Engineer with a strong foundation in modern JavaScript (ES6+), UI architecture, and design systems. 
                    Since 2015, I have specialized in building scalable architectures, responsive web applications, and pixel-perfect UIs. 
                    I excel at refactoring legacy codebases, replacing outdated frameworks with modern standards (Flexbox/Grid, ES6 modules), 
                    and optimizing frontend infrastructure (Webpack, ESLint). Currently driving the architectural transition to TypeScript 
                    and laying the groundwork for adopting React on a large-scale production platform.
                </p>
            </div>
        </section>
    );
};

export default Intro;
