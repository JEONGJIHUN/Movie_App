import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // componentWillMount(){
  //   console.log('will mount')
  // }
  // componentDidMount(){
  //   console.log('did mount')
  // }

  state = {
    
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title:"Matrix",
            poster:"https://i.imgur.com/NFFtJmW.gif"
          },
          {
            title:"Full Metal Jacket",
            poster:"https://i.imgur.com/aJw125L.gif"
          },
          {
            title:"Star Wars",
            poster:"https://i.imgur.com/OWVRrmW.jpg"
          },
          {
            title:"Toni Erdmann",
            poster:"https://i.imgur.com/MVugjuI.jpg"
          },
          {
            title:"transpotting",
            poster:"https://i.imgur.com/MVugjuI.jpg"
          },
        ]
      })
    }, 2000);
  }

  _renderMovies =() =>{
    const movies = this.state.movies.map((movie,index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
  }

  render() {
    // console.log('did render')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
