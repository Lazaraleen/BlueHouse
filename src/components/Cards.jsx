import React, { useState, useContext } from 'react';
import '../index.css';
import {Context} from "../App";
import Coeur from '../assets/images/coeur.png';

function Cards(props) {
  const [isFavorite, setIsFavorite] = useState(props.favori);
  const [locationVisible, setLocationVisible] = useContext(Context);
  console.log("favoris", isFavorite);

  const toggleFavorite = () => {
    const newIsFavorite = !isFavorite;
    setIsFavorite(newIsFavorite);

    // Mettez à jour la liste locationVisible pour refléter la nouvelle valeur "favori".
    const updatedLocationVisible = locationVisible.map((item) => {
      if (item.id === props.id) {
        return { ...item, favori: newIsFavorite };
      }
      return item;
    });

    setLocationVisible(updatedLocationVisible);
    console.log("Appart favoris", updatedLocationVisible);
  };

  const favoriteClass = isFavorite ? "favori" : "";

  return (
    <div className="card shadow">
            <img src={props.image} alt={`appartement ${props.name}`} className="appartement" />
            <div className="barre">
                <div>
                    <p>{props.type} - {props.pieces}P - {props.surface}m2</p>
                    <p>{props.name}  ( <b>{props.city}</b> )</p>
                    <p className="price"> {props.price} euros / mois</p>
                </div>
                <div><img src={Coeur} alt="favoris" className={favoriteClass} onClick={toggleFavorite}/></div>
            </div>
    </div>
  );
}

export default Cards;