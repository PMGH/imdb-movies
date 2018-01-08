import React from 'react';

class Movie extends React.Component {
  render(){
    return (
      <div className="movie">
        <a href="#">
          <img className="add-movie-icon" src="./add.png" alt="Add movie icon" />
        </a>
        <a className="movie-title" href={this.props.movieDetails} target="_blank">
          <h3>{this.props.title}</h3>
        </a>
        <a className="showtimes-link" href={this.props.showtimes} target="_blank">
          <h4>Showtimes</h4>
        </a>
      </div>
    );
  }
}

export default Movie;
