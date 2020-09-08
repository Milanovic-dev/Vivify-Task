import React, { useState, useEffect } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import AddMovie from './AddMovie'

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  const onCreate = (data) => {
    setMovies(movies => [...movies, data]);
  }

  const onDelete = (id) => {
    setMovies(movies.filter(item => item.id !== id));
  }

  return (<div>
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} onDelete={onDelete} />
        </div>
      </div>
    </div>
    <AddMovie onCreate={onCreate}></AddMovie>
  </div>);
}

export default Movies;