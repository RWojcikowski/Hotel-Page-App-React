
import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import axios from '../../../axios';
import { objectToArrayWitchId } from '../../../helpers/objects';

export default function MyHotels(props) {

  const { url } = useRouteMatch();
  const [hotels, setHotels] = useState([]);

  const fechHotels = async () => {
    try {
      ///
      const res = await axios.get('/hotels.json');
      const newHotel = objectToArrayWitchId(res.data)
      setHotels(newHotel);
    } catch (ex) {
      console.log(ex.response);
    }
  }

  useEffect(() => {
    fechHotels();
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
      };

      <Link to={`${url}/dodaj`} className="btn btn-info">Dodaj hotel</Link>
    </div >

  );
}