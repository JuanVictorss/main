// Importações necessárias
import { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [activeTab, setActiveTab] = useState("content");
  const [daysElapsed, setDaysElapsed] = useState(0);

  // Calcula os dias passados desde 24/11/2024
  useEffect(() => {
    const targetDate = new Date("2024-11-24");
    const updateDaysElapsed = () => {
      const currentDate = new Date();
      const diffTime = currentDate - targetDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDaysElapsed(diffDays);
    };
    updateDaysElapsed();
    const interval = setInterval(updateDaysElapsed, 1000 * 60 * 60); // Atualiza a cada hora
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {/* Cabeçalho fixo */}
      <header className="header">
        <h1>Meu Site Mobile</h1>
        <p className="days-counter">Dias para comemorar: {daysElapsed}</p>
      </header>

      {/* Navegação entre abas */}
      <nav className="tabs">
        <button
          className={activeTab === "content" ? "active" : ""}
          onClick={() => setActiveTab("content")}
        >
          Conteúdo
        </button>
        <button
          className={activeTab === "certificates" ? "active" : ""}
          onClick={() => setActiveTab("certificates")}
        >
          Certificações
        </button>
      </nav>

      {/* Conteúdo das abas */}
      <main className="tab-content">
        {activeTab === "content" && (
          <section>
            <h2>Imagens e Texto</h2>
            <p>Adicione suas imagens e textos aqui.</p>
          </section>
        )}
        {activeTab === "certificates" && (
          <section>
            <h2>Certificações</h2>
            <p>Adicione imagens de suas certificações aqui.</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
