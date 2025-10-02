     import React from 'react';
     import ReactDOM from 'react-dom/client';
     import './index.css';  // ← Added this line for Tailwind
     import App from './App';
     // If there's more (e.g., reportWebVitals), keep it

     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(
       <React.StrictMode>
         <App />
       </React.StrictMode>
     );

     // If reportWebVitals is there, keep it at the bottom
     // reportWebVitals();
     