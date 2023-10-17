import '../index.css';
import Logo from "../assets/images/BlueHouse.png";
import Connect from "../assets/images/utilisateur.png";


function Header() {
  return (
    <header>
        <div className="logoDiv">
            <img src={Logo} alt="Blue House" />
            <div>
                <h1>BlueHouse</h1>
                <h2>Nos biens, votre bonheur</h2>
            </div>
        </div>
        <img src={Connect} alt="Bouton de connexion" className='connect'/>
    </header>
  );
}

export default Header;