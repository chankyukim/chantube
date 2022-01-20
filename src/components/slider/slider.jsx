import React, { useRef, useState } from 'react';
import Btn from '../btn/btn';
import SlideItem from './slideItem';
import styles from './slider.module.css';

const Slider = ({ videos }) => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slidesArray = useRef([]);
  console.log(slidesArray.current);

  const clickNext = () => {
    slideIndex + 1 > slidesArray.current.length
      ? setSlideIndex(currentIndex => currentIndex)
      : setSlideIndex(currentIndex => currentIndex + 1);
  };

  const clickPrev = () => {
    slideIndex - 1 === 0
      ? setSlideIndex(currentIndex => currentIndex)
      : setSlideIndex(currentIndex => currentIndex - 1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.genre}>장르</h1>
      <section className={styles['slide-wrapper']}>
        <div className={styles.slides}>
          <div
            ref={el => (slidesArray.current[0] = el)}
            className={slideIndex === 1 ? `${styles.slide} ${styles.activeAnim}` : styles.slide}
          >
            {videos.slice(0, 10).map(video => {
              return <SlideItem video={video} key={video.id} />;
            })}
          </div>
          <div
            ref={el => (slidesArray.current[1] = el)}
            className={slideIndex === 2 ? `${styles.slide} ${styles.activeAnim}` : styles.slide}
          >
            {videos.slice(10, 20).map(video => {
              return <SlideItem video={video} key={video.id} />;
            })}
          </div>
          <div
            ref={el => (slidesArray.current[2] = el)}
            className={slideIndex === 3 ? `${styles.slide} ${styles.activeAnim}` : styles.slide}
          >
            {videos.slice(20, 30).map(video => {
              return <SlideItem video={video} key={video.id} />;
            })}
          </div>
        </div>
      </section>
      <Btn moveSlide={clickPrev} direction="prev" />
      <Btn moveSlide={clickNext} direction="next" />
    </div>
  );
};

export default Slider;
