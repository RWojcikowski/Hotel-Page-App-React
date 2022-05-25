import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

const propTypes = {
  hotels: PropTypes.array.isRequired,
}

const slowFunction = (count) => {
  for (let i = 0; i < 500000000; i++) { }
  return count

}

function Hotels(props) {

  const count = slowFunction(props.hotels.length)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Oferty: ({count}) </h2>
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