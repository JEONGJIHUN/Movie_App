import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
// import { __await } from 'tslib';

class App extends Component {

  // componentWillMount(){
  //   console.log('will mount')
  // }
  // componentDidMount(){
  //   console.log('did mount')
  // }

  state ={}

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies =() =>{
    const movies = this.state.movies.map(movie => {
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres ={movie.genres}
        synopsis={movie.synopsis} />
    })
    return movies
  }

  _getMovies = async () =>{
    const movies = await this._callApi()
    this.setState({
      movies
    })

  }

  _callApi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  } 

  render() {
    // console.log('did render')
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    )
  }
}

export default App
