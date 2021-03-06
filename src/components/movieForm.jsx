import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";


class MovieForm extends Form {
  state = { 
    genres: [],
    data: {title: '', genreId: '', numberInStock:'', dailyRentalRate:''},
    errors: {}
  }

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label('Title'),
    genreId: Joi.string().required().label('GenreId'),
    numberInStock: Joi.number().integer().required().min(0).max(100).label('NumberInStock'),
    dailyRentalRate: Joi.number().required().min(0).max(10).label('Rate')
  }

  componentDidMount() {
    const genres = getGenres();
    this.setState({genres});

    const movieId = this.props.match.params.id
    if (movieId === 'new') return null
    const movie = getMovie(movieId)
    if (!movie) return this.props.history.replace("/not-found")
    this.setState({ data: this.mapToViewModel(movie)})
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    }
  }


  doSubmit = () => {
    console.log("Submitted");
    this.props.history.push("/movies");
    saveMovie(this.state.data);
    console.log(this.state.data)
}

  render() {
    const {match} = this.props
    return ( 
      <div>
      <h1>Movie Form {match.params.id}</h1>
      <form onSubmit={this.handleSubmit}>
        {this.renderInput('title','Title')}
        {this.renderSelect('genreId','Genre', this.state.genres)}
        {this.renderInput('numberInStock','Number in Stock')}
        {this.renderInput('dailyRentalRate','Rate')}
        {this.renderButton('Save')}
      </form>
    </div>
     );
  }
}
 
export default MovieForm;
