import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FavProvider } from './context/FavContext';

export default function App(props) {
    const name = "SW[API]";
    const { pathname, search } = useLocation();
    const [ , category, id] = pathname.split('/');
    const [oldPage, setOldPage] = useState(category);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        //see if /planets => /films change keyword
        //if /planets => /planets/5 do NOT change keyword
        if (oldPage === category) {
          if (search) {
            const term = search.replace('?search=', '');
            console.log(`running a search for ${term}`);
            setKeyword(term);
          } else {
            if (!id) {
              setKeyword('');
            }
          }
        } else {
          //changed category
          setKeyword('');
          setOldPage(category);
        }
    }, [category, search, id, oldPage]);

    return (
        <FavProvider>
          <div className="App">
            <Header company={name} />
            {category && <SearchBar keyword={keyword} category={category} />}
    
            <main className="content">
              <Main keyword={keyword} category={category} />
            </main>
          </div>
        </FavProvider>
    );
}