import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeSwitch from './ThemeSwitch';
import './styles/_main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeSwitch />
);
