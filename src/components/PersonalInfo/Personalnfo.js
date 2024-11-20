import React from 'react';
import './personal-info.scss';

const PersonalInfo = () => {
    return (
        <div className="personal-info">
            <h3 className="personal-info__heading">Personal Info</h3>
            <ul className="personal-info__list">
                <li>
                    <span>D.O.B.:&nbsp;</span>
                    <span>08.22.1986</span>
                </li>
                <li>
                    <span>Location:&nbsp;</span>
                    <span>Ukraine/Remote</span>
                </li>
            </ul>
        </div>
    );
};

export default PersonalInfo;
