import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource/manrope/700.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
