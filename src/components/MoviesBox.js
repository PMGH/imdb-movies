import React from 'react';
import MoviesList from './MoviesList';

class MoviesBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        { id: 1, title: "Sausage Party", movieDetails_link: "http://www.imdb.com/title/tt1700841/?ref_=nv_sr_1", showtimes_link: "#"  },
        { id: 2, title: "Café Society", movieDetails_link: "http://www.imdb.com/title/tt4513674/?ref_=nv_sr_1", showtimes_link: "#" },
        { id: 3, title: "Morgan", movieDetails_link: "http://www.imdb.com/title/tt4520364/?ref_=nv_sr_5", showtimes_link: "#" },
        { id: 4, title: "The 9th Life of Louis Drax", movieDetails_link: "http://www.imdb.com/title/tt3991412/?ref_=fn_al_tt_1", showtimes_link: "#" },
        { id: 5, title: "Naam Hai Akira", movieDetails_link: "http://www.imdb.com/title/tt5465370/?ref_=fn_al_tt_1", showtimes_link: "#" },
        { id: 6, title: "Equity", movieDetails_link: "http://www.imdb.com/title/tt3958780/?ref_=fn_al_tt_1", showtimes_link: "#" },
        { id: 7, title: "Things to Come", movieDetails_link: "http://www.imdb.com/title/tt4120176/?ref_=fn_al_tt_1", showtimes_link: "#" },
      ]
    }
  }

  render(){
    return (
      <React.Fragment>
        <h1 id="app-heading">UK Opening This Week</h1>
        <MoviesList data={this.state.data}/>
        <a id="see-more-link" href="#">
          <h3 id="see-more">See more opening this week »</h3>
        </a>
        <hr></hr>
        <a href="#"><button id="get-showtimes-btn">Get Showtimes »</button></a>
      </React.Fragment>
    );
  }
}

export default MoviesBox;
