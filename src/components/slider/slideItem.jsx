import React from 'react';
import styles from './slideItem.module.css';
import imgOne from '../../assets/0.jpg';

const SlideItem = ({ video }) => {
  // console.log('video', video);
  return (
    <div className={styles['thumbnail-box']}>
      <img src={video.snippet.thumbnails.medium.url} alt="img" />
      <div className={styles['thumbnail-detail']}>
        <img src={imgOne} alt="dummy img" />
        <div>
          <p className={styles['thumbnail-title']}>{`${video.snippet.title.substring(
            0,
            20
          )}...`}</p>
          <p className={styles['channel-title']}>{video.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
