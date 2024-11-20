import React from 'react';
import './languages.scss';

const Languages = () => {
    return (
        <div className="languages">
            <h3 className="languages__heading">Languages</h3>
            <ul className="languages__list">
                <li>
                    <span>Ukrainian:</span>
                    <span>Native</span>
                </li>
                <li>
                    <span>English:</span>
                    <span>intermediate</span>
                </li>
            </ul>
        </div>
    );
};

export default Languages;
