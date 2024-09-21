import React from "react";
import "./personal-info.scss";

const PersonalInfo = () => {
  return (
    <div className="personal-info-and-contacts">
      <h3 className="personal-info-and-contacts__heading">
        Personal info and contacts
      </h3>
      <ul className="personal-info-and-contacts__list">
        <li>
          <span>DOB:</span>
          <span>08.22.1986</span>
        </li>
        <li>
          <span>Location:</span>
          <span>Ukraine</span>
        </li>
        <li className="mobile">
          <span>Mobile (and Telegram):</span>
          <a href="tel:+380939238969">
            {" "}
            <br /> +38(093) 923 89 69
          </a>
        </li>
        <li>
          <span>Email:</span>
          <a href="mailto:chernysh.olexandr@gmail.com">
            chernysh.olexandr@gmail.com
          </a>
        </li>
        <li>
          <span>LinkedIn: </span>
          <a
            href="http://www.linkedin.com/in/oleksandr-chernysh"
            target="_blank" rel="noreferrer"
          >
            Oleksandr Chernysh
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PersonalInfo;
