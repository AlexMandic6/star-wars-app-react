import './films.css';
import Film from '../Film/Film';
import { NavLink ,useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import { useFav } from "../../context/FavContext";

export default function Films({list}) {
    const { id } = useParams();
    const film = list.find((item, index) => parseInt(id) === index + 1);
    const [loaded, setLoaded] = useState(false);
    const [fav] = useFav();

    useEffect(()=> {
        setLoaded(true);
    }, [list]);
  
    return (
        <>
            <div className="results">
                <h2>Film List</h2>
                {!loaded && <Spinner>Loading...</Spinner>}
                {list.length === 0 && <p>No films...</p>}
                {list.map((film, index) => (
                <p key={film.title}>
                    <NavLink className="activeLink" to={`/films/${index + 1}`}>
                        {film.title}{' '}
                        {index + 1 === parseInt(fav.id) && (
                            <>
                                <span className='material-icons fav'>favorite</span>
                            </>
                        )}
                    </NavLink>
                </p>
                ))}
            </div>
            {id && <Film film={film}/>}
        </>
    );
}