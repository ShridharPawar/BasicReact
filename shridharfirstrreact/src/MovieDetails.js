import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'


const imagesPath = {
   like: require('./like.JPG'),
   liked: require('./liked.JPG')
}

//This Component is a child Component of Movies Component
export default class MovieDetails extends Component {

  constructor() {
    super();
    this.state = {liked:false}
  }

  changeTheLikeButton = () => {
    this.setState(state => ({ liked: !state.liked }))
  }

  getImageName = () => this.state.liked ? 'liked' : 'like'
  
  //Function which is called when the component loads for the first time
  componentDidMount() {
    
    this.getMovieDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Movie Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getMovieDetails(this.props.val)
    }
  }

  //Function to Load the moviedetails data from json.
  getMovieDetails(id) {
    axios.get('../assets/samplejson/movie' + id + '.json').then(response => {
      this.setState({movieDetails: response})
    })
  };

  

  render() {
   const imagename = this.getImageName();
   debugger;
    if (!this.state.movieDetails)
      return (<p>Loading Data</p>)
      
    return (<div className="moviedetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.movieDetails.data.MovieName} <img className="Like" onClick={this.changeTheLikeButton} src={imagesPath[imagename]}></img></Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.movieDetails.data.MovieName}</p>
          <p>Year : {this.state.movieDetails.data.Year}</p>
          <p>Genre : {this.state.movieDetails.data.Genre}</p>
          <p>Actor : {this.state.movieDetails.data.Actor}</p>
          <p>Country : {this.state.movieDetails.data.country}</p>
         </Panel.Body>
      </Panel>
    </div>)
  }
}
