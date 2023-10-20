import React, { useState } from 'react';
import {useContext} from "react";
import {Context} from "../App";
import '../index.css';
import Boutons from './Boutons';
import Cards from './Cards';

function Section() {
  const [locationVisible, setLocationVisible] = useContext(Context);
  const [sortType, setSortType] = useState(null);
  const [originalLocationVisible] = useState(locationVisible);
  const [isFilteredByFavorite, setIsFilteredByFavorite] = useState(false);
  
  // useEffect(() => {
  //   // Mettez à jour la valeur d'origine de locationVisible lorsque la valeur initiale change
  //   setOriginalLocationVisible(locationVisible);
  // }, [locationVisible]);

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

  const updateFavorite = (id, isFavorite) => {
    // Mettez à jour la liste locationVisible pour refléter la nouvelle valeur "favori".
    const updatedLocationVisible = locationVisible.map((item) => {
      if (item.id === id) {
        return { ...item, favori: isFavorite };
      }
      return item;
    });
    setLocationVisible(updatedLocationVisible);
  };

  const handleFavorite = () => {
    console.log(isFilteredByFavorite);
    if (isFilteredByFavorite) {
      // Si la liste est déjà filtrée par favoris, réinitialisez-la à la valeur d'origine
      setLocationVisible(originalLocationVisible);
      setIsFilteredByFavorite(false); // Mettez à jour l'état local
    } else {
      // Sinon, filtrez par favoris
      const favoriTrueItems = locationVisible.filter((item) => item.favori === true);
      setLocationVisible(favoriTrueItems);
      setIsFilteredByFavorite(true); // Mettez à jour l'état local
    }
    console.log("liste originale: ", originalLocationVisible);
    console.log("liste modif: ", locationVisible);
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
            <Boutons title="FAVORIS" tri={handleFavorite} />
        </div>
        <div className="cardSection">
        {locationVisible.map((item) => (
                <Cards key={item.id} id={item.id} image={item.image} city={item.city} name={item.name} pieces={item.pieces} surface={item.surface} price={item.price} type={item.type} favori={item.favori} updateFavorite={updateFavorite}/>
            ))}
        </div>
    </section>
  );
}

export default Section;
