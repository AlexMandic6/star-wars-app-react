
export default function Person({ person }) {

  return (
    <div>
      <h2>Person Details</h2>
      {person && <p className="details-text">Name: {person.name}</p>}
      {person && <p className="details-text">Gender: {person.gender}</p>}
      {person && <p className="details-text">Year of birth: {person.birth_year}</p>}
    </div>
  );
}