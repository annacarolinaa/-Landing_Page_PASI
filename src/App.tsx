import ComoFunciona from "./components/ComoFunciona/ComoFunciona";
import Desafio from "./components/Desafio/Desafio";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <main className="home">
      <div className="visual-stage">
        <video className="visual-stage-video" autoPlay muted loop playsInline aria-hidden="true">
          <source src="https://www.pexels.com/download/video/7088510/" type="video/mp4" />
        </video>
        <div className="visual-stage-overlay" aria-hidden="true"></div>
        <Header />
        <Hero />
        <Desafio />
      </div>
      <ComoFunciona />
    </main>
  );
}

export default App