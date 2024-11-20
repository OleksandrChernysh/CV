import React from 'react';
import './work-experience.scss';

const WorkExperience = () => {
    return (
        <section className="work-experience">
            <h3 className="work-experience__heading">Work experience</h3>
            <ul className="work-experience__list">
                <li className="work-experience__item">
                    <h4>Treatfield</h4>
                    <h5>Front-end developer</h5>
                    <span>September 2021 – Present (Part-time)</span>
                    <p>
                        Maintaining and enhancing the front end of&nbsp;
                        <a href="https://treatfield.com">Treatfield.com</a>, an online psychotherapy platform, ensuring
                        platform stability, implementing new features, and refactoring legacy code. Collaborating with
                        cross-functional teams to improve user experience, resolve technical issues, and support the
                        platform&apos;s growth.
                    </p>
                    <ul className="work-experience__details">
                        <li>
                            <p>
                                Introduced and maintained a Gulp-based build system to automate tasks like CSS
                                preprocessing, JavaScript minification, and asset optimization.
                            </p>
                            <p>
                                Later transitioned to Webpack to enhance performance and enable advanced features like
                                module bundling, code splitting, and hot reloading, improving build efficiency and
                                developer productivity.
                            </p>
                        </li>
                        <li>
                            Converted and refactored existing CSS into modular SCSS, optimizing the styling architecture
                            for scalability and reusability. Implemented best practices for variable usage, mixins, and
                            nesting, resulting in cleaner, more maintainable stylesheets and improved workflow
                            efficiency.
                        </li>
                        <li>
                            Refactored legacy JavaScript code by migrating from jQuery to ES6 standards, improving code
                            maintainability, performance, and readability. Streamlined the codebase, reducing technical
                            debt and enabling easier future development.
                        </li>
                    </ul>
                </li>
                <li className="work-experience__item">
                    <h4>Unicsoft</h4>
                    <h5>Markup developer/Junior Front-end developer</h5>
                    <span>February 2017 – January 2021</span>
                    <p>
                        Developed layouts and interactive UI elements for corporate websites and large-scale Angular and
                        React applications.
                        <br />
                        Key projects:
                        <ul className="work-experience__details">
                            <li>
                                <a href="https://executive-eye.com/">ExecutiveEye</a>: Led the markup for a complete
                                redesign of the&nbsp;
                                <a href="https://execeye.dashboardonline.com/">execeye.dashboardonline application</a>,
                                ensuring a modern, responsive interface.
                            </li>
                            <li>
                                <a href="https://getinlightened.com/">Inlightened</a>: platform. Created the full markup
                                for the&nbsp;
                                <a href="https://app.getinlightened.com/">app.getinlightened application</a>, focusing
                                on a seamless user experience.
                            </li>
                        </ul>
                        Both projects utilized Material Design for Web, with the frontend built on Angular 2.
                    </p>
                </li>
                <li className="work-experience__item">
                    <h4>Mil&apos;s</h4>
                    <h5>Markup developer</h5>
                    <span>September 2016 – December 2016</span>
                    <p>Developed responsive layouts for corporate websites.</p>
                    <p>Integrated layouts into WordPress, ensuring compatibility and ease of content management.</p>
                </li>
                <li className="work-experience__item">
                    <h4>ASAPP</h4>
                    <h5>Markup developer</h5>
                    <span>August 2015 - August 2016</span>
                    <p>
                        Developed responsive layouts for landing pages, corporate websites, and single-page applications
                        (SPAs).
                    </p>
                    <p>Integrated layouts into Drupal, ensuring smooth functionality and content management.</p>
                    <p>Created interactive presentations for SalesForce CRM to support sales and marketing efforts.</p>
                </li>
                <li className="work-experience__item">
                    <h4>PlanA</h4>
                    <h5>Markup developer</h5>
                    <span>April 2015 - July 2015</span>
                    <p>Designed and developed layouts for corporate websites.</p>
                    <p>Integrated layouts into MODX, ensuring a user-friendly content management experience.</p>
                </li>
            </ul>
        </section>
    );
};

export default WorkExperience;
