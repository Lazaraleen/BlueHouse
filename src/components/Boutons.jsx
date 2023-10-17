import '../index.css';


function Boutons(props) {

  return (
    <button className="boutonTri shadow" onClick={props.tri}>
        <p>{props.title}</p>
    </button>
  );
}

export default Boutons;