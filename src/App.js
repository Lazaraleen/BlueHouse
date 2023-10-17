import './index.css';
import Header from "./components/Header";
import Carte from "./components/Carte";
import Section from "./components/Section";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <main>
        <Carte />
        <Section />
      </main>
      <Footer />
    </>
  );
}

export default App;
