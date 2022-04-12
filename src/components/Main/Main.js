import './main.css';
import Home from '../Home/Home';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import useStarWars from '../../hooks/useStarWars';

export default function Main(props) {
    //lazy loading these components
    const Films = lazy(()=> import('../Films/Films'));
    const People = lazy(()=> import('../People/People'));
    const Planets = lazy(()=> import('../Planets/Planets'));
    const Planet = lazy(()=> import('../Planet/Planet'));


    const { keyword, category } = props;
    const [people, setPeople] = useStarWars('people'); //list of people
    const [planets, setPlanets] = useStarWars('planets'); //list of planets
    const [films, setFilms] = useStarWars('films'); //list of films

    useEffect(() => {
        switch (category) {
          case 'people':
            setPeople(keyword);
            break;
          case 'films':
            setFilms(keyword);
            break;
          case 'planets':
            setPlanets(keyword);
            break;
          default:
        }
        // window.scrollTo(0, 0); //seems like we dont need this?
      }, [category, keyword, setPeople, setFilms, setPlanets]); //run this each time the route changes
  
    return (
      <div className="mainContent">
        <Suspense fallback={<Spinner>Loading...</Spinner>}>
            <Routes>
                <Route path="/films/" element={<Films list={films} />}>
                    <Route path=":id" element={<Films list={films} />}/>
                </Route>

                <Route path="/people/" element={ <People list={people} />} >
                    <Route path=":id" element={<People list={people} />} />
                </Route>

                <Route path="/planets/*" element={<Planets list={planets}/>} >
                    <Route path=":id" element={<Planet list={planets} />} />
                </Route>

                <Route path="/" exact element={ <Home /> }/>
                <Route path="*" exact element={ <Home /> }/>
            </Routes>
        </Suspense>
      </div>
    );
}