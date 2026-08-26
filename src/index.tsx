import React from 'react';
import ReactDOM from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import App from './App';
import './index.css';

// ⭐ 1. Dein eigenes Semtation-Theme definieren
const semtationTheme = {
  ...webLightTheme,
  colorBrandForeground1: "#1F4FA8",
  colorBrandBackground: "#1F4FA8",
  colorBrandBackgroundHover: "#4A7CC5",
  colorNeutralForeground1: "#000000",
  colorNeutralBackground1: "#FFFFFF",
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    {/* ⭐ 2. Hier statt webLightTheme dein eigenes Theme verwenden */}
    <FluentProvider theme={semtationTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>
);
