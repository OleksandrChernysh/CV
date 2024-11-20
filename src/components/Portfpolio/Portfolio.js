import React from 'react';
import './portfolio.scss';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h3 className="portfolio__heading">
                Some of my works and projects I contributed to (other works are under NDA)
            </h3>
            <ul className="portfolio__list">
                <li>
                    <a target="_blank" href="http://ctdev.io" rel="noreferrer">
                        Ctdev.io
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.artec3d.com" rel="noreferrer">
                        Artec3d.com
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://masterdata.tech" rel="noreferrer">
                        Masterdata.tech
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.movinga.de" rel="noreferrer">
                        Movinga.de
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://qbclean.com" rel="noreferrer">
                        Qbclean.com
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://execeye.dashboardonline.com" rel="noreferrer">
                        ExecutiveEye application
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://getinlightened.com/" rel="noreferrer">
                        Inlightened site
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://app.getinlightened.com/" rel="noreferrer">
                        Inlightened application
                    </a>
                </li>
                <li>
                    <a target="_blank" href="http://sossitter.ca" rel="noreferrer">
                        Sossitter.ca
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://treatfield.com" rel="noreferrer">
                        Treatfield.com
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;
