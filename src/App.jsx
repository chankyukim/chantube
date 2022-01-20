import './App.module.css';
import Header from './components/Header/header';
import styles from './App.module.css';
import Slider from './components/slider/slider';
import SlideItem from './components/slider/slideItem';
import { useEffect, useState } from 'react';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <Header />
      <Slider videos={videos} />
      {/* <SlideItem /> */}
    </div>
  );
}

export default App;
