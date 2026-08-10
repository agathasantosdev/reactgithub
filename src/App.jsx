import React from 'react';

// Importei o React Router DOM para criar a navegação entre as páginas.
import { HashRouter as Router,Routes, Route, Link } from 'react-router-dom';

// Separei cada página em um arquivo diferente dentro da pasta "pages",
// deixando o projeto mais organizado e fácil de manter.
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Experiencia from './pages/Experiencia';
import Projetos from './pages/Projetos';

function App() {
  return (
    // Router controla toda a navegação da aplicação
    <Router>

      <div>

        {/* Barra de navegação utilizando Bootstrap */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">

            {/* Nome da aplicação */}
            <span className="navbar-brand">
              Meu Currículo
            </span>

            {/* Links que levam para cada página */}
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Início</Link>
              <Link className="nav-link" to="/sobre">Sobre</Link>
              <Link className="nav-link" to="/contato">Contato</Link>
              <Link className="nav-link" to="/experiencia">Experiência</Link>
              <Link className="nav-link" to="/projetos">Projetos</Link>
            </div>

          </div>
        </nav>

        <div className="container mt-4">

          {/* Define as rotas da aplicação */}
          <Routes>

            {/* Página inicial */}
            <Route path="/" element={<Inicio />} />

            {/* Página Sobre */}
            <Route path="/sobre" element={<Sobre />} />

            {/* Página Contato */}
            <Route path="/contato" element={<Contato />} />

            {/* Página Experiência */}
            <Route path="/experiencia" element={<Experiencia />} />

            {/* Página Projetos */}
            <Route path="/projetos" element={<Projetos />} />

          </Routes>

        </div>

      </div>

    </Router>
  );
}

export default App;