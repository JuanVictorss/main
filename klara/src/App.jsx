// Importações necessárias
import { useState, useEffect } from "react";
import usImage from "./images/us/us.jpeg";
import area from "./images/us/area.jpeg";
import area2 from "./images/us/area2.jpeg";
import casa from "./images/us/casa.jpeg";
import gym from "./images/us/gym.jpeg";
import hehe from "./images/us/hehe.jpeg";
import hehe2 from "./images/us/hehe2.jpeg";
import one from "./images/us/one.jpeg";
import one2 from "./images/us/one2.jpeg";
import namorada from "./images/docs/certificado melhor namorada.png";
import casamento from "./images/docs/unlock.png";
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
        <h1>Minha 247</h1>
        <p className="days-counter"> {daysElapsed}</p>
      </header>

      {/* Navegação entre abas */}
      <nav className="tabs">
        <button
          className={activeTab === "content" ? "active" : ""}
          onClick={() => setActiveTab("content")}
        >
          Us
        </button>
        <button
          className={activeTab === "certificates" ? "active" : ""}
          onClick={() => setActiveTab("certificates")}
        >
          Parabéns
        </button>
      </nav>

      {/* Conteúdo das abas */}
      <main className="tab-content">
        {activeTab === "content" && (
          <section>
            <h2>one</h2>
            <div className="image-container">
              <img src={one} alt="Exemplo" className="cropped-image" />
            </div>
            <h2>one 2</h2>
            <div className="image-container">
              <img src={one2} alt="Exemplo" className="cropped-image" />
            </div>
            <h2>gym</h2>
            <div className="image-container">
              <img src={gym} alt="Exemplo" className="cropped-image" />
            </div>
            <h2>area</h2>
            <div className="image-container">
              <img src={area} alt="Exemplo" className="cropped-image" />
            </div>
            <h2>hehe</h2>
            <div className="image-container">
              <img src={hehe} alt="Exemplo" className="cropped-image" />
            </div>
            <h2>casa</h2>
            <div className="image-container">
              <img src={casa} alt="Exemplo" className="cropped-image" />
            </div>
            <h2>hehe2</h2>
            <div className="image-container">
              <img src={hehe2} alt="Exemplo" className="cropped-image" />
            </div>
            <h2>area2</h2>
            <div className="image-container">
              <img src={area2} alt="Exemplo" className="cropped-image" />
            </div>
            <h2>us</h2>
            <div className="image-container">
              <img src={usImage} alt="Exemplo" className="cropped-image" />
            </div>
          </section>
        )}
        {activeTab === "certificates" && (
          <section>
            <h2>Certificações</h2>
            <p>Melhor namorada do mundo</p>
            <div className="image-containe">
              <img
                src={namorada}
                alt="Certificação"
                className="cropped-image"
              />
            </div>
            <p>Próxima a desbloquar...</p>
            <div className="image-containe">
              <img
                src={casamento}
                alt="Certificação"
                className="cropped-image"
              />
            </div>
          </section>
        )}
      </main>

      {/* Animação de corações */}
      <div className="hearts-animation">
        {[...Array(37)].map((_, index) => {
          const randomX = Math.random(); // Gera uma posição horizontal aleatória
          return (
            <div
              key={index}
              className="heart"
              style={{
                "--random-x": randomX, // Define a variável CSS para posição horizontal
                animationDelay: `${Math.random() * 5}s`, // Atraso aleatório na animação
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
