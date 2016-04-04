import axios from 'axios';
import { apiKey } from '../../config';

const helpers = {
  searchMovieDb(movie, page = 1){
    return axios.get('http://api.themoviedb.org/3/search/movie?query=' + movie + '&adult=false&page=' + page + '&api_key=' + apiKey)
      .then((response) => response);
  }
};

export default helpers;
