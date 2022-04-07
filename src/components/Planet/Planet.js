import './planet.css';

export default function Planet({planet}) {

    return (
        <div className="details">
            <h2>Planet details</h2>
            {planet && <p className="details-text">Diameter: {planet.diameter}</p>}
            {planet && <p className="details-text">Climate: {planet.climate}</p>}
            {planet && <p className="details-text">Terrain: {planet.terrain}</p>}
        </div>
    );
}