import React from 'react';
import styles from './btn.module.css';
import leftArrow from '../icons/left-arrow.svg';
import rightArrow from '../icons/right-arrow.svg';

const Btn = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === 'prev' ? `${styles.btn} ${styles.prev}` : `${styles.btn} ${styles.next}`
      }
    >
      <img src={direction === 'prev' ? leftArrow : rightArrow} alt="btn image" />
    </button>
  );
};

export default Btn;
