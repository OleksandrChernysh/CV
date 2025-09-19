import React from 'react';
import './skills.scss';

const Skills = () => {
	const skillsList = [
		{ name: 'HTML5', since: 2015 },
		{ name: 'CSS2/3', since: 2015 },
		{ name: 'SCSS/SMACSS', since: 2016 },
		{ name: 'Bootstrap', since: 2016 },
		{ name: 'Material Design for Web', since: null, skillLevel: '2 years' },
		{ name: 'Git', since: 2016 },
		{ name: 'jQuery', since: 2016 },
		{ name: 'Gulp', since: 2016 },
		{ name: 'ES5', since: 2016 },
		{ name: 'ES6', since: 2023 },
		{ name: 'Typescript', since: null, skillLevel: 'basic understanding' },
		{ name: 'React', since: null, skillLevel: 'basic understanding' },
		{ name: 'NPM', since: 2016 },
		{ name: 'Webpack', since: 2023 },
		{ name: 'Node.js', since: null, skillLevel: 'basic understanding' },
		{ name: 'PHP', since: null, skillLevel: 'basic understanding' },
		{ name: 'Ruby & Ruby on Rails', since: null, skillLevel: 'basic understanding' },
		{ name: 'Python', since: null, skillLevel: 'basic understanding' },
		{ name: 'MySQL', since: null, skillLevel: 'basic understanding' },
		{ name: 'Bash', since: null, skillLevel: 'basic understanding' },
		{ name: 'Docker', since: 2021 },
		{ name: 'Linux', since: 2017 },
		{ name: 'Figma', since: null, skillLevel: null },
		{ name: 'Photoshop', since: null, skillLevel: null }
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
