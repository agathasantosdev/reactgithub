import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Importa o CSS do Bootstrap para estilizar a aplicação
import 'bootstrap/dist/css/bootstrap.min.css';

// Renderiza o componente principal (App) dentro da div "root" do index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);  