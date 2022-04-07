import './planets.css';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Planet from '../Planet/Planet';

export default function Planets(props) {
    const {list}= props;
    const { id } = useParams();
    const planet = list.find((item, index) => parseInt(id) === index + 1);

    return (
        <>
            <div className="results">
                <h2>Planet List</h2>
        
                {list.length === 0 && <p>No planets...</p>}
                {list.map((planet, index) => (
                    <p key={planet.name}>
                    <NavLink className="activeLink" to={`/planets/${index + 1}`}>
                        {planet.name}
                    </NavLink>
                    </p>
                ))}
            </div>
            {id && <Planet planet={planet}/>}
        </>
    );
}