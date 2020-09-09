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
    data.id = movies.length > 1 ? (movies[movies.length - 1].id + 100) : 100;
    data.ratings = [];
    setMovies(movies => [...movies, data]);
  }

  const onDelete = (id) => {
    setMovies(movies.filter(item => item.id !== id));
  }

  const onRate = (id, rating) => {
    const temp = [...movies];

    temp.map((item, i) => {
      if(item.id == id){
        item.ratings.push(rating);
        const avg = avgRating(item.ratings)
        const intPart = Math.trunc(avg);
        let floatPart = Number((avg - intPart).toFixed(2));
        if(floatPart !== 0){
          floatPart= 0.5;
        }
        item.rating = intPart + floatPart;
      }
    })

    setMovies(temp)
  }

  const avgRating= (ratings) => {
    let total = 0;
    for(let i = 0 ; i < ratings.length ; i++){
      total += ratings[i];
    }
    return total / ratings.length;
  }

  return (<div>
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} onDelete={onDelete} onRate={onRate} />
        </div>
      </div>
    </div>
    <AddMovie onCreate={onCreate}></AddMovie>
  </div>);
}

export default Movies;
