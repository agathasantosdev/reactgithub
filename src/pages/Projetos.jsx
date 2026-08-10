import React, { useState } from "react";

// Projeto 1 - Conversor de Temperatura
function ConversorTemperatura() {

  // Armazena o valor digitado em Celsius
  const [celsius, setCelsius] = useState("");

  // Armazena o resultado da conversão
  const [resultado, setResultado] = useState("");

  // Função responsável por converter Celsius em Fahrenheit
  function converter() {

    if (celsius === "") {
      setResultado("Digite uma temperatura.");
      return;
    }

    const fahrenheit = (Number(celsius) * 9) / 5 + 32;

    setResultado(`${celsius}°C equivalem a ${fahrenheit.toFixed(1)}°F`);
  }

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">

        <h4 className="text-primary">
          Conversor de Temperatura
        </h4>

        <p>
          Conversão de graus Celsius para Fahrenheit.
        </p>

        {/* Campo para digitar a temperatura */}
        <input
          type="number"
          className="form-control mb-3"
          placeholder="Digite a temperatura"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />

        {/* Botão que executa a conversão */}
        <button
          className="btn btn-primary"
          onClick={converter}
        >
          Converter
        </button>

        {/* Exibe o resultado */}
        <div className="alert alert-info mt-3">
          <strong>Resultado:</strong> {resultado}
        </div>

      </div>
    </div>
  );
}

// Projeto 2 - Lista de Tarefas
function ListaTarefas() {

  // Guarda o texto digitado
  const [novaTarefa, setNovaTarefa] = useState("");

  // Guarda todas as tarefas cadastradas
  const [tarefas, setTarefas] = useState([]);

  // Adiciona uma nova tarefa na lista
  function adicionar() {

    if (novaTarefa.trim() === "") return;

    setTarefas([...tarefas, novaTarefa]);

    setNovaTarefa("");
  }

  // Remove a tarefa selecionada
  function excluir(indice) {

    const listaAtualizada = tarefas.filter((_, i) => i !== indice);

    setTarefas(listaAtualizada);
  }

  return (

    <div className="card shadow-sm">

      <div className="card-body">

        <h4 className="text-success">
          Lista de Tarefas
        </h4>

        <p>
          Projeto para adicionar e remover tarefas.
        </p>

        {/* Campo para escrever uma nova tarefa */}
        <div className="input-group mb-3">

          <input
            type="text"
            className="form-control"
            placeholder="Digite uma tarefa..."
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />

          {/* Botão para adicionar uma tarefa */}
          <button
            className="btn btn-success"
            onClick={adicionar}
          >
            Adicionar
          </button>

        </div>

        {/* Exibe uma mensagem caso não exista nenhuma tarefa */}
        {tarefas.length === 0 ? (

          <div className="alert alert-warning">
            Nenhuma tarefa cadastrada.
          </div>

        ) : (

          // Lista todas as tarefas
          <ul className="list-group">

            {tarefas.map((item, indice) => (

              <li
                key={indice}
                className="list-group-item d-flex justify-content-between align-items-center"
              >

                {item}

                {/* Botão para remover uma tarefa */}
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => excluir(indice)}
                >
                  Excluir
                </button>

              </li>

            ))}

          </ul>

        )}

      </div>

    </div>

  );
}

// Página principal de projetos
function Projetos() {

  return (

    <div className="container mt-4">

      <h2 className="text-danger mb-4">
        Meus Projetos
      </h2>

      <p>
        Nesta página estão alguns projetos desenvolvidos durante as aulas de React.
      </p>

      {/* Projeto de conversão de temperatura */}
      <ConversorTemperatura />

      {/* Projeto de lista de tarefas */}
      <ListaTarefas />

    </div>

  );

}

export default Projetos;