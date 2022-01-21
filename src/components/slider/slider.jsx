import React, { useRef, useState } from 'react';
import Btn from '../btn/btn';
import SlideItem from './slideItem';
import styles from './slider.module.css';

const Slider = ({ videos }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  // const [coord, setCoord] = useState(0);
  const slides = useRef();
  const slideCount = slides?.current?.children.length;
  console.log(slideCount);
  const slideWidth = 140 * slideCount;

  const clickNext = () => {
    slideIndex + 1 === slideCount
      ? setSlideIndex(currentIndex => currentIndex)
      : setSlideIndex(currentIndex => currentIndex + 1);
  };

  const clickPrev = () => {
    slideIndex - 1 < 0
      ? setSlideIndex(currentIndex => currentIndex)
      : setSlideIndex(currentIndex => currentIndex - 1);
  };

  return (
    <section className={styles['genre-section']}>
      <div className={styles['genre-container']}>
        <h1 className={styles['genre-title']}>장르</h1>
        <div className={styles['slide-wrapper']}>
          <div
            className={styles.slides}
            ref={ele => (slides.current = ele)}
            style={{ width: `${slideWidth}rem`, left: `-${slideIndex * 140}rem ` }}
          >
            <div className={styles.slide}>
              {videos.slice(0, 10).map(video => {
                return <SlideItem video={video} key={video.id} />;
              })}
            </div>
            <div className={styles.slide}>
              {videos.slice(10, 20).map(video => {
                return <SlideItem video={video} key={video.id} />;
              })}
            </div>
            <div className={styles.slide}>
              {videos.slice(20, 30).map(video => {
                return <SlideItem video={video} key={video.id} />;
              })}
            </div>
            <div className={styles.slide}>
              {videos.slice(30, 40).map(video => {
                return <SlideItem video={video} key={video.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Btn moveSlide={clickPrev} direction="prev" />
      <Btn moveSlide={clickNext} direction="next" />
    </section>
  );
};

export default Slider;
