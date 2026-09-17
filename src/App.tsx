import Desafio from "./components/Desafio/Desafio";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <main className="home">
      <Header />
      <Hero />
      <Desafio />
    </main>
  );
}

export default App