import './main.css';
import Home from '../Home/Home';
import Films from '../Films/Films';
import Film from '../Film/Film';
import People from '../People/People';
import Person from '../Person/Person';
import Planets from '../Planets/Planets';
import Planet from '../Planet/Planet';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Main(props) {
    //we could put state here to hold the list to share with children
    const { pathname } = useLocation();
    const { keyword } = props;
    const [people, setPeople] = useState([]); //list of people
    const [planets, setPlanets] = useState([]); //list of planets
    const [films, setFilms] = useState([]); //list of films

    useEffect(() => {
        (async function () {
          let url = 'https://swapi.dev/api';
          if (pathname.indexOf('/people') > -1) {
            let resp = await fetch(`${url}/people?search=${keyword}`);
            let data = await resp.json();
            setPeople(data.results);
          }
          if (pathname.indexOf('/films') > -1) {
            let resp = await fetch(`${url}/films?search=${keyword}`);
            let data = await resp.json();
            setFilms(data.results);
          }
          if (pathname.indexOf('/planets') > -1) {
            let resp = await fetch(`${url}/planets?search=${keyword}`);
            let data = await resp.json();
            setPlanets(data.results);
          }
        })();
    }, [pathname, keyword]); //run this each time the route changes
  
    return (
      <div className="mainContent">
        <Routes>
            <Route path="/films/*" element={<Films list={films} />}>
                <Route path=":id" element={<Film list={films} />} />
            </Route>

            <Route path="/planets/*" element={<Planets list={planets}/>} />
                <Route path=":id" element={<Planet list={planets} />} >
            </Route>

            <Route path="/people/*" element={ <People list={people} />} >
                <Route path=":id" element={<Person list={people} />} />
            </Route>
            <Route path="/" exact element={ <Home /> }/>
        </Routes>
      </div>
    );
}