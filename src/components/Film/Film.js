import { useFav } from "../../context/FavContext";
import { useParams } from 'react-router-dom';

export default function Film({ film }) {
    const { id } = useParams();
    // eslint-disable-next-line no-unused-vars
    const [fav, updateFav] = useFav();

    function clicked(e) {
        updateFav('films', parseInt(id), film);
    }

    let details = (
      <>
        <p className="details-text">Title: {film && film.title}</p>
        <p className="details-text">Director: {film && film.director}</p>
        <p className="details-text">Release Date: {film && film.release_date}</p>
      </>
    );
  
    return (
      <div className="details"> 
        <h2>Film Details</h2>
        {film && details}
        <button className="fav-btn" onClick={clicked}>Set as fav <span className="material-icons fav">favorite</span></button>
      </div>
    );
}