import '../index.css';
import Coeur from '../assets/images/coeur.png';


function Cards(props) {
  return (
    <div className="card">
            <img src={props.image} alt="appartement {props.name}" className="appartement" />
            <div className="barre">
                <div>
                    <p>{props.name}</p>
                    <p><b>{props.city}</b></p>
                    <p className="price"> {props.price} euros / mois</p>
                </div>
                <div><img src={Coeur} alt="favoris" /></div>
            </div>
    </div>
  );
}

export default Cards;