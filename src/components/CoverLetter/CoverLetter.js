import React from 'react';
import Intro from '../Intro/Intro.js';
import './cover-letter.scss';

const CoverLetter = () => {
	return (
		<main className="cover-letter">
			<Intro />
			<section className="cover-letter-content">
				<p>Dear Hiring Manager,</p>
				<p>
					I am writing to express my strong interest in the Frontend Engineer position. With 9+ years of professional
					experience in modern JavaScript (ES6+), UI architecture, and a deep commitment to code quality, I am confident
					in my ability to deliver immediate value to your team.
				</p>
				<p>
					In my current role, I have led significant architectural transitions, migrating legacy codebases to modern ES6
					modules, implementing robust build pipelines with Webpack, and preparing the infrastructure for TypeScript and
					React adoption. I thrive in environments that value clean code and scalable solutions.
				</p>
				<p>
					I would welcome the opportunity to discuss how my technical background and problem-solving skills align with
					the needs of your engineering team. Thank you for your time and consideration.
				</p>
				<br />
				<p>Sincerely,</p>
				<p>
					<strong>Oleksandr Chernysh</strong>
				</p>
			</section>
		</main>
	);
};

export default CoverLetter;
