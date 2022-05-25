import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

const propTypes = {
  hotels: PropTypes.array.isRequired,
}
function Hotels(props) {

  useEffect(() => console.log('Hotels render'));
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oferty:</h2>
      {props.hotels.map(hotel => (
        <Hotel
          key={hotel.id} {...hotel} />
      ))}
    </div>
  );
}


Hotels.propTypes = propTypes;

const areEqual = (prewProps, nextProps) => {
  return prewProps.hotels === nextProps.hotels;
}

export default React.memo(Hotels, areEqual);