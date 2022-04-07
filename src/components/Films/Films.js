import { NavLink } from 'react-router-dom';
import './films.css';
import Film from '../Film/Film';
import { useParams } from 'react-router-dom';

export default function Films(props) {
    const { list } = props;
    const { id } = useParams();
    const film = list.find((item, index) => parseInt(id) === index + 1);
  
    return (
        <>
            <div className="results">
                <h2>Film List</h2>

                {list.length === 0 && <p>No films...</p>}
                {list.map((film, index) => (
                <p key={film.title}>
                    <NavLink className="activeLink" to={`/films/${index + 1}`}>
                    {film.title}
                    </NavLink>
                </p>
                ))}
            </div>
            {id && <Film film={film}/>}
        </>
    );
}