import { createRoot } from 'react-dom/client';
import React from 'react';

import App from './App';

import './styles/global.css';

const $root = document.getElementById('root');
const root = createRoot($root);

root.render(<App />);
