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
                    Experienced Frontend Engineer with 9+ years of professional experience (since 2015) in modern JavaScript (ES6+), HTML5, and UI architecture. 
                    I excel at driving technical decisions, such as the current architectural transition to TypeScript. 
                    I specialize in building scalable architectures, responsive web applications, and handling complex interactions in large-scale Angular and React platforms.
                </p>
            </div>
        </section>
    );
};

export default Intro;
