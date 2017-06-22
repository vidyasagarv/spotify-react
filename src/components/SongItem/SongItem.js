import React, { PropTypes } from 'react';
import styles from './SongItem.css';

const SongItem = (props) => {
  const { songData } = props;
  const album = songData.album;
  const albumName = album.name;
  const albumImage = album.images[1];
  return (
    <div className={styles.root}>
      <div className={styles.album}>
        <img role="presentation" src={albumImage.url} />
        <span className={styles.albumName}>{albumName}</span>
      </div>
      <div className={styles.songAndDescription}>
        <audio controls duration src={songData.preview_url} />
        <span className={styles.songDescription}>Track: {songData.name}</span>
        <span className={styles.songDescription}>Duration: {songData.duration_ms / 1000}s</span>
      </div>
    </div>
  );
};

SongItem.propTypes = {
  songData: PropTypes.object,
};

export default SongItem;
