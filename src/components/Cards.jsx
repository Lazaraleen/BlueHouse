import React, { useState } from 'react';
import '../index.css';
import Coeur from '../assets/images/coeur.png';

function Cards(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
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