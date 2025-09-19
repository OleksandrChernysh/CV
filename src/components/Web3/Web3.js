import React from 'react';
import './web3.scss';

const Web3 = () => {
	const repoLink = 'https://github.com/OleksandrChernysh/binance-trading-bot';

	return (
		<section className="web3">
			<h3>Crypto and Web3 knowledge:</h3>

			<p>
				I just started to learn things about cryptocurrency (I bought my first Solana coin in January 2025), but I have
				a side project that I can show you. It is a trading bot that uses the Binance API:&nbsp;
				<a href={repoLink} target="_blank" rel="noopener noreferrer">
					Binance trading bot repository
				</a>
				.
			</p>

			<br />

			<p>Details:</p>
			<ul className="web3__details">
				<li>It is a Node.js project</li>
				<li>It is written in ES6</li>
				<li>It uses the Binance API</li>
			</ul>

			<br />

			<p>
				Now it can just show your assets (you can check the functionality if you set up your Binance API Keys in the
				<code>.env</code> file).
			</p>
			<p>I am working on Buy/Sell functionality now.</p>
		</section>
	);
};

export default Web3;
