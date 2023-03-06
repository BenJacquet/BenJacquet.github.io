import { createRoot } from 'react-dom/client';
import React from 'react'
import App from './App'
import './App.css'

import ReactGA from 'react-ga';
const TRACKING_ID = "G-EE9BPHBYQM";
ReactGA.initialize(TRACKING_ID);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);