import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import MovieDetails from './MovieDetails'
import axios from 'axios'

export default class Movies extends Component {
  state = {selectedMovie: 1}
 

  //function which is called the first time the component loads
  componentDidMount() {
    
    this.getMovieData();
  }

  //Function to get the movie Data from json
  getMovieData() {
    
    axios.get('../assets/samplejson/movieslist.json').then(response => {
      this.setState({movieList: response})
    })
    
  };

  render() {
    
    
    if (!this.state.movieList)
      return (<p>Loading data</p>)
     return (<div className="addmargin">
      <div className="col-md-5">
        {

          this.state.movieList.data.map(movie => <Panel bsStyle="info" key={movie.MovieName} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{movie.MovieName}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{movie.MovieName}</p>
              <p>{movie.Year}</p>
              <Button bsStyle="info" onClick={() => this.setState({selectedMovie: movie.id})}>

                Click to View Details

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-6">
        <MovieDetails val={this.state.selectedMovie}/>
      </div>
    </div>)
  }

}
