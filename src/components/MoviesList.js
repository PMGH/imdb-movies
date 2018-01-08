import React from 'react';
import Movie from './Movie';

class MoviesList extends React.Component {
  render(){
    const movieNodes = this.props.data.map(movie => {
      return (
        <Movie title={movie.title} movieDetails={movie.movieDetails_link} showtimes={movie.showtimes_link} key={movie.id}>{movie.title}</Movie>
      );
    });

    return (
      <div id="movies-list">
        {movieNodes}
      </div>
    );
  }
}

export default MoviesList;
