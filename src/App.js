import './index.css';
import React, {useState} from "react";
import Header from "./components/Header";
import Carte from "./components/Carte";
import Section from "./components/Section";
import Footer from "./components/Footer";
import appartement from "./json/appartements.json";

export const Context = React.createContext();

function App() {
  const  [locationVisible, setLocationVisible] = useState(appartement);

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
