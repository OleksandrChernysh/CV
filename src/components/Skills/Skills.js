import React from 'react';
import './skills.scss';

const Skills = () => {
	const skillsList = [
		{ name: 'JavaScript (ES6+)', since: 2016 },
		{ name: 'HTML5 / CSS3', since: 2015 },
		{ name: 'CSS Flexbox / Grid', since: 2018 },
		{ name: 'SCSS / SMACSS', since: 2016 },
		{ name: 'Webpack / ESLint', since: 2021 },
		{ name: 'Git', since: 2016 },
		{ name: 'Docker / Bash', since: 2017 },
		{ name: 'TypeScript', since: null, skillLevel: 'In Progress' },
		{ name: 'React', since: null, skillLevel: 'In Progress' },
		{ name: 'Figma', since: null, skillLevel: 'UI/UX extraction' }
	];

	const currentYear = new Date().getFullYear();

	return (
		<section className="skills">
			<h3 className="skills__heading">Areas of expertise</h3>
			<ul className="skills__list">
				{skillsList.map((skill, index) => {
					let experience;
					if (typeof skill.since === 'number') {
						experience =
							currentYear - skill.since > 1
								? `${currentYear - skill.since} years`
								: `${currentYear - skill.since} year`;
					} else {
						experience = skill.skillLevel;
					}

					return (
						<li className="skills__list-item" key={index}>
							<span>{skill.name}</span>
							<span>{experience}</span>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Skills;
