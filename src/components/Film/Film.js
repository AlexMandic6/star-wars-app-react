export default function Film({ film }) {

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
      </div>
    );
}