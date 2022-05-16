import React from 'react';
import styles from './Hotel.module.css';
// import hotelImg from '../../../assets/images/images/hotel.jpg'

function Hotel() {
  return (
    <div className={`row${styles.hotel}`}>
      <div className="col-4">
        {/* <img
          src={hotelImg}
          alt=""
          className="img-fluid" /> */}
      </div>
      <div className="col-8">
        <div className="row">
          <p>Tytuł</p>
          <p>Miasto</p>
        </div>
        <div className="col">
          <p>Ocena: 8.88 </p>
          <p>Opinie: 200</p>
        </div>
        <p>Opis:</p>
        <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. </p>
        <a href="#" className="btn btn-secondary">Pokaż</a>
      </div>
    </div>
  );
}

export default Hotel;