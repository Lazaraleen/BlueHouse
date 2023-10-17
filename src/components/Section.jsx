import '../index.css';
import Boutons from './Boutons';
import Cards from './Cards';
import appartement from '../json/appartements.json';

function Section() {
  return (
    <section>
        <div className="buttonSection">
            <Boutons title="TYPE" />
            <Boutons title="PRIX" />
            <Boutons title="CITY" />
        </div>
        <div className="buttonSection">
            <Boutons title="NB PIECES" />
            <Boutons title="SURFACE" />
            <Boutons title="FAVORIS" />
        </div>
        <div className="cardSection">
            {appartement.map((item) => (
                <Cards image={item.image} city={item.city} name={item.name} price={item.price} />
            ))}
            <Cards image="../appartements/appart1.jpg" city="Pau" name="Bernards" price="450" />
            <Cards image="../appartements/appart1.jpg" city="Pau" name="Bernards" price="450" />
            <Cards image="../appartements/appart1.jpg" city="Pau" name="Bernards" price="450" />
        </div>
    </section>
  );
}

export default Section;