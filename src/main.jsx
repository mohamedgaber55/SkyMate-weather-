import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import DataProvider from './Context/DataProvider.jsx';
import "bootstrap-icons/font/bootstrap-icons.css";
import UnitProvider from './Context/UnitContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UnitProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </UnitProvider>
  </StrictMode>
);

