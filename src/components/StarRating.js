import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
    cursor: 'pointer'
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};

const StarRating = ({ rating, onRate }) => {
  const containerStyle = { width: `${cropWidth(rating)}px` };
  const starCount = 5;
  
  const handleRate = (e) => {
    const starKey = e.target.getAttribute('data-key');

    if(starKey){
      onRate(parseInt(starKey))
    }
  }

  return (
    <div>
      <div style={styles.starsOuter} onClick={handleRate}>
        <div style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            <i data-key="1" className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i data-key="2" className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i data-key="3" className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i data-key="4" className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i data-key="5" className="fa fa-star-o fa-lg" style={styles.star}></i>
          </div>
          <div style={styles.starsInner}>
            <i data-key="1" className="fa fa-star fa-lg" style={styles.star}></i>
            <i data-key="2" className="fa fa-star fa-lg" style={styles.star}></i>
            <i data-key="3" className="fa fa-star fa-lg" style={styles.star}></i>
            <i data-key="4" className="fa fa-star fa-lg" style={styles.star}></i>
            <i data-key="5" className="fa fa-star fa-lg" style={styles.star}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;
