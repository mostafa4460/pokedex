import "./Pokecard.css";

const Pokecard = ({name, type, base_experience, img}) => (
    <div className="Pokecard">
        <div className="Pokecard-div">
            <h2 className="Pokecard-header">{name}</h2>
            <img src={img} alt="" />
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    </div>
);

export default Pokecard;