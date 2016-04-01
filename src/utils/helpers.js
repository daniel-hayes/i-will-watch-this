import axios from 'axios';
import { apiKey } from '../../config';

const helpers = {
  searchMovieDb(movie){
    return axios.get('http://api.themoviedb.org/3/search/movie?query=' + movie + '&api_key=' + apiKey)
      .then((response) => response);
  }
};

export default helpers;
