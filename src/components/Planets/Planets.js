import './planets.css';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Planet from '../Planet/Planet';
import Spinner from '../Spinner/Spinner';

export default function Planets({list}) {
    const { id } = useParams();
    const planet = list.find((item, index) => parseInt(id) === index + 1);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        setLoaded(true);
    }, [list]);

    return (
        <>
            <div className="results">
                <h2>Planet List</h2>
                {!loaded && <Spinner>Loading...</Spinner>}
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