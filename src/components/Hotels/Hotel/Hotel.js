import React from 'react';
import styles from './Hotel.module.css';
// import hotelImg from '../../../assets/images/images/hotel.jpg'

function Hotel() {
  return (
    <div className={`card${styles.hotel}`}>
      <div className="card-body">
        <div className={`row`}>
          <div className="col-4">
            <img src=
              {process.env.PUBLIC_URL + '/hotel.jpg'}
              alt=""
              className="img-fluid img-thumbnail" />
            {/* <img
          src={hotelImg}
          alt=""
          className="img-fluid" /> */}
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p>Pensjonat</p>
                <p>Wrocław</p>
              </div>
              <div className="col float-end">
                <h4>
                  <p>Ocena: 8.8 </p>
                </h4>
              </div>
            </div>
            <p>Opis:</p>
            <div className="col-12">
              <p className={styles.desc}>Lorem Ipsum jest tekstem stosowanym jako przykładowy
                wypełniacz w przemyśle poligraficznym. Został po raz
                pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. </p>
            </div>
            <a href="#" className="btn btn-info text-start float-end">Pokaż</a>
          </div>
        </div>
      </div>


    </div >

  );
}

export default Hotel;