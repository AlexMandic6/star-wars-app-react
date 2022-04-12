import './people.css';
import Person from '../Person/Person';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';

export default function People({ list }) {
    const { id } = useParams();
    let person = list.find((item, index) => parseInt(id) === index + 1);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        let timeout;
        if(list.length > 0) {
            timeout = setTimeout(setLoaded, 200, true);
        } else {
            timeout = setTimeout(setLoaded, 3500, true);
        }
        return () => {
            clearTimeout(timeout);
        }
    }, [list]);

    return (
    <>
        <div className="results">
            <h2>People List</h2>
            {!loaded && <Spinner>Loading...</Spinner>}
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