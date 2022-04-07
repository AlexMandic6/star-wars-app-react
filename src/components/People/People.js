import './people.css';
import Person from '../Person/Person';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function People({ list }) {
    const { id } = useParams();
    let person = list.find((item, index) => parseInt(id) === index + 1);

    return (
    <>
        <div className="results">
            <h2>People List</h2>
            {list.length === 0 && <p>No people...</p>}
            {list.map((item, index) => (
            <p key={item.name}>
                <NavLink className="activeLink" to={`/people/${index + 1}`}>
                {item.name}
                </NavLink>
            </p>
            ))}
        </div>
        {id && <Person person={person}/>}
    </>
    );
}