import { createRoot } from 'react-dom/client';
import React from 'react';

import App from './App';
import createServer from './mirage/server';

import './styles/global.css';

if (process.env.NODE_ENV === 'development') { createServer(); }

const $root = document.getElementById('root');
const root = createRoot($root);

root.render(<App />);
