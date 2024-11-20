import React from 'react';
import './contacts.scss';

const Contacts = () => {
    return (
        <div className="contacts">
            <h3 className="contacts__heading">Contacts</h3>
            <ul className="contacts__list">
                <li>
                    <span>Mobile/Telegram:&nbsp;</span>
                    <a href="tel:+380939238969">+38 (093) 923 89 69</a>
                </li>
                <li>
                    <span>Email:&nbsp;</span>
                    <a href="mailto:chernysh.olexandr@gmail.com">chernysh.olexandr@gmail.com</a>
                </li>
                <li>
                    <span>LinkedIn:&nbsp;</span>
                    <a href="http://www.linkedin.com/in/oleksandr-chernysh" target="_blank" rel="noreferrer">
                        Oleksandr Chernysh
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contacts;
