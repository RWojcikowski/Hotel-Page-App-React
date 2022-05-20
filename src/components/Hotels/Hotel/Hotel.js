import PropTypes from 'prop-types';
import React from 'react';
import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';

const propTypes = {

  names: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  discription: PropTypes.string.isRequired,

};


function Hotel(props) {
  return (
    <div className={`card ${styles.hotel}`}>
      <div className="card-body">

        <div className="row">
          <div className="col-4">

            <img
              src={hotelImg}
              alt=""
              className="img-fluid img-thumbnail" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p className={styles.title}>{props.name}</p>
                <span class="badge bg-info">{props.city}</span>
              </div>
              <div className="col text-right">
                <h5>Ocena: {props.rating}</h5>
                <a href="#" className={`btn btn-${props.theme} mt-2 px-4`}>Pokaż</a>
              </div>
            </div>
          </div>

          <div className="col-12">
            <p className={styles.description}>
              {props.discription}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
Hotel.propTypes = propTypes;



export default Hotel;