import React, { useState } from 'react';
import '../index.css';
import Boutons from './Boutons';
import Cards from './Cards';
import appartement from '../json/appartements.json';

function Section() {
  const [sortedAppartements, setSortedAppartements] = useState(appartement);
  const [sortType, setSortType] = useState(null);

  const handleType = () => {
    if (sortType === 'type') {
      setSortedAppartements([...sortedAppartements].reverse());
    } else {
      setSortedAppartements([...sortedAppartements].sort((a, b) => a.type.localeCompare(b.type)));
      setSortType('type');
    }
  };

  const handlePrix = () => {
    if (sortType === 'price') {
      setSortedAppartements([...sortedAppartements].reverse());
    } else {
      setSortedAppartements([...sortedAppartements].sort((a, b) => a.price - b.price));
      setSortType('price');
    };
  };

  const handleCity = () => {
    if (sortType === 'city') {
      setSortedAppartements([...sortedAppartements].reverse());
    } else {
      setSortedAppartements([...sortedAppartements].sort((a, b) => a.city.localeCompare(b.city)));
      setSortType('city');
    }
  };

  const handlePiece = () => {
    if (sortType === 'piece') {
      setSortedAppartements([...sortedAppartements].reverse());
    } else {
      setSortedAppartements([...sortedAppartements].sort((a, b) => a.piece - b.piece));
      setSortType('piece');
    };
  };

  const handleSurface = () => {
    if (sortType === 'surface') {
      setSortedAppartements([...sortedAppartements].reverse());
    } else {
      setSortedAppartements([...sortedAppartements].sort((a, b) => a.surface - b.surface));
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
        {sortedAppartements.map((item) => (
                <Cards key={item.id} image={item.image} city={item.city} name={item.name} pieces={item.pieces} surface={item.surface} price={item.price} type={item.type} isFavorite={item.isFavorite} />
            ))}
        </div>
    </section>
  );
}

export default Section;
