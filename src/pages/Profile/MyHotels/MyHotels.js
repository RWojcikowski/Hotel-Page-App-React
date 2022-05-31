
import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../axios';
import { objectToArrayWitchId } from '../../../helpers/objects';

export default function MyHotels(props) {
  const [auth] = useAuth();
  const { url } = useRouteMatch();
  const [hotels, setHotels] = useState([]);


  const fetchHotels = async () => {
    try {
      ///
      const res = await axios.get('/hotels.json');
      const newHotel = objectToArrayWitchId(res.data)
        .filter(hotel => hotel.user.id === auth.user.id);
      setHotels(newHotel)
    } catch (ex) {
      console.log(ex.response);
    }
  }

  useEffect(() => {
    fetchHotels();
  }, [])

  return (
    <div>
      {hotels ? (
        <table className="table">
          <thead>
            <th>Nazwa</th>
            <th>opcje</th>
          </thead>
          <tbody>

            {hotels.map(hotel => (
              <tr>
                <td>{hotel.name}</td>
                <td>
                  <button className="btn btn-warning">edytuj</button>
                  <button className="ml-2 btn btn-danger">Usuń</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
        : (
          <p>Nie masz jeszcze żadnego hotelu.</p>
        )
      }

      <Link to={`${url}/dodaj`} className="btn btn-info">Dodaj hotel</Link>
    </div >

  );
}