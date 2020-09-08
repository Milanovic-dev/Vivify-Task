import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import StarRating from '../StarRating';

const MovieCard = ({ movie, onDelete, onRate }) => {
  
  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(movie.id);
  };

  const handleRate = (rating) => {
    onRate(movie.id, rating);
  }

  return(
  <div className="movie-card">
    <div className="movie-card card">
      <img className="card-img-top" src={movie.imageUrl} alt="" />
      <div className="card-body" style={{overflow:'hidden'}}>
        <h4 className="card-title">{movie.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
        <p className="text-justify" style={{ fontSize: '14px', overflow:'hidden' }}>
          {movie.description}
        </p>
      </div>
      <div className="card-footer">
        <button className="card-delete-button" onClick={handleDelete}>Delete</button>
        <div className="clearfix">
          <div className="float-left mt-1">
            <StarRating rating={movie.rating} onRate={handleRate} />
            <ReactTooltip />
          </div>
          <div data-tip={`${movie.ratings.length} people rated this movie.`} className="card-footer-badge float-right badge badge-primary badge-pill">{movie.rating}</div>
        </div>
      </div>
    </div>
  </div>);
};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
