import React from 'react';
import { createRoot } from 'react-dom/client';
import CoverLetter from './components/CoverLetter/CoverLetter.js';
import './scss/index.scss';

document.body.innerHTML = "<div id='root'></div>";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CoverLetter />);
