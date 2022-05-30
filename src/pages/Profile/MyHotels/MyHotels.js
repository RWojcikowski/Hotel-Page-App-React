import { Link, useRouteMatch } from 'react-router-dom';

export default function MyHotels(props) {
  const { url } = useRouteMatch();

  return (
    <div>
      <p>Nie masz jeszcze żadnego hotelu.</p>
      <Link to={`${url}/dodaj`} className="btn btn-info">Dodaj hotel</Link>
    </div>

  );
}