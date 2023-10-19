import React, { useState } from 'react';
import {useContext} from "react";
import {Context} from "../App";
import '../index.css';
import Boutons from './Boutons';
import Cards from './Cards';
// import appartement from '../json/appartements.json';

function Section() {
  const [locationVisible, setLocationVisible] = useContext(Context);
  console.log("vous êtes ici:", locationVisible);
  // console.log("vos apparts sont ici:", appartement);
  const [sortType, setSortType] = useState(null);

  const handleType = () => {
    if (sortType === 'type') {
      setLocationVisible([...locationVisible].reverse());
    } else {
      setLocationVisible([...locationVisible].sort((a, b) => a.type.localeCompare(b.type)));
      setSortType('type');
    }
  };

  const handlePrix = () => {
    if (sortType === 'price') {
      setLocationVisible([...locationVisible].reverse());
    } else {
      setLocationVisible([...locationVisible].sort((a, b) => a.price - b.price));
      setSortType('price');
    };
  };

  const handleCity = () => {
    if (sortType === 'city') {
      setLocationVisible([...locationVisible].reverse());
    } else {
      setLocationVisible([...locationVisible].sort((a, b) => a.city.localeCompare(b.city)));
      setSortType('city');
    }
  };

  const handlePiece = () => {
    if (sortType === 'piece') {
      setLocationVisible([...locationVisible].reverse());
    } else {
      setLocationVisible([...locationVisible].sort((a, b) => parseInt(a.pieces) - parseInt(b.pieces)));
      setSortType('piece');
    };
  };

  const handleSurface = () => {
    if (sortType === 'surface') {
      setLocationVisible([...locationVisible].reverse());
    } else {
      setLocationVisible([...locationVisible].sort((a, b) => parseInt(a.pieces) - parseInt(b.pieces)));
      setSortType('surface');
    };
  };

  return (
    <section>
        <div className="buttonSection">
            <Boutons title="TYPE" tri={handleType} />
            <Boutons title="PRIX" tri={handlePrix}/>
            <Boutons title="CITY" tri={handleCity} />
        </div>
        <div className="buttonSection">
            <Boutons title="NB PIECES" tri={handlePiece} />
            <Boutons title="SURFACE" tri={handleSurface} />
            <Boutons title="FAVORIS" />
        </div>
        <div className="cardSection">
        {locationVisible.map((item) => (
                <Cards key={item.id} image={item.image} city={item.city} name={item.name} pieces={item.pieces} surface={item.surface} price={item.price} type={item.type} isFavorite={item.isFavorite} />
            ))}
        </div>
    </section>
  );
}

export default Section;
