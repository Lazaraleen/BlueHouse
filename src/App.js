import './index.css';
import React, {useState} from "react";
import Header from "./components/Header";
import Carte from "./components/Carte";
import Section from "./components/Section";
import Footer from "./components/Footer";

export const Context = React.createContext();

function App() {
  const  [locationVisible, setLocationVisible] = useState([]);

  return (
    <Context.Provider value={[locationVisible, setLocationVisible]}>
      <Header />
      <main>
        <Carte />
        <Section />
      </main>
      <Footer />
    </Context.Provider>
  );
}

export default App;
