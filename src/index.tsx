import React from 'react';
import ReactDOM from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import App from './App';
import './index.css';

// Logo importieren
import logo from './assets/logo.png';

document.title = "Semtalk - modernes Prozessmanagement";
// Favicon im Browser-Tab setzen
let favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');

if (!favicon) {
  favicon = document.createElement('link');
  favicon.rel = 'icon';
  document.head.appendChild(favicon);
}

favicon.type = 'image/png';
favicon.href = logo;

// Semtation-Theme
const semtationTheme = {
  ...webLightTheme,
  colorBrandForeground1: "#1F4FA8",
  colorBrandBackground: "#1F4FA8",
  colorBrandBackgroundHover: "#4A7CC5",
  colorNeutralForeground1: "#000000",
  colorNeutralBackground1: "#FFFFFF",
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <FluentProvider theme={semtationTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>
);