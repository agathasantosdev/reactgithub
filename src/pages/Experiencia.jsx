import React from 'react';

// Criei esta página para apresentar minhas experiências em formato de lista,
// utilizando componentes do Bootstrap conforme solicitado no exercício.
function Experiencia() {
  return (
    <div className="card shadow-sm p-4 mt-4">
      <h2 className="card-title text-warning">Experiência</h2>

      <ul className="list-group">
        <li className="list-group-item">
          Desenvolvimento de páginas utilizando HTML e CSS.
        </li>

        <li className="list-group-item">
          Desenvolvimento de projetos utilizando JavaScript.
        </li>

        <li className="list-group-item">
          Desenvolvimento de aplicações utilizando React.
        </li>
      </ul>
    </div>
  );
}

export default Experiencia;