import React from 'react';
import './work-experience.scss';

const WorkExperience = () => {
	return (
		<section className="work-experience">
			<h3 className="work-experience__heading">Work experience</h3>
			<ul className="work-experience__list">
				<li className="work-experience__item">
					<h4>Treatfield</h4>
					<h5>Frontend Engineer</h5>
					<span>September 2021 – Present</span>
					<ul className="work-experience__details">
						<li>
							Maintaining and enhancing the frontend architecture of an online psychotherapy platform.
						</li>
						<li>
							Initiating and driving technical decisions, including the architectural transition to TypeScript.
						</li>
						<li>
							Developed complex, highly interactive UI components in Vanilla JS, including dynamic modals, Fullcalendar integrations, and GDPR consent managers.
						</li>
						<li>
							Led the massive migration of legacy jQuery/global scripts to modern ES6 modules, creating structured services and utility helpers, significantly reducing technical debt.
						</li>
						<li>
							Established frontend quality standards by introducing ESLint, SCSS linting, and modernizing the build pipeline from Gulp to Webpack.
						</li>
					</ul>
				</li>
				<li className="work-experience__item">
					<h4>Unicsoft</h4>
					<h5>Frontend / UI Developer</h5>
					<span>February 2017 – January 2021</span>
					<ul className="work-experience__details">
						<li>
							Developed complex layouts and interactive UI components for large-scale React and Angular applications.
						</li>
						<li>
							Led the frontend UI implementation for ExecutiveEye dashboard and Inlightened platforms.
						</li>
						<li>
							Collaborated closely with design teams to translate mockups into pixel-perfect, accessible Material Design components.
						</li>
					</ul>
				</li>
				<li className="work-experience__item">
					<h4>ASAPP / Mil's / PlanA</h4>
					<h5>Frontend Developer</h5>
					<span>April 2015 - December 2016</span>
					<ul className="work-experience__details">
						<li>
							Built responsive Single-Page Applications (SPAs) and corporate websites.
						</li>
						<li>
							Integrated frontend architectures with CMS platforms (Drupal, WordPress).
						</li>
					</ul>
				</li>
			</ul>
		</section>
	);
};

export default WorkExperience;
