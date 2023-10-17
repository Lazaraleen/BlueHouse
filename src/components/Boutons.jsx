import '../index.css';


function Boutons(props) {
  return (
    <button className="boutonTri">
        <p>{props.title}</p>
    </button>
  );
}

export default Boutons;