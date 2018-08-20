import { API_HOST, API_KEY_STRING } from '../constants/apiPaths';

class MovieApi {

  static getAllMovies() {
      const request = new Request(`${API_HOST}/3/movie/now_playing${API_KEY_STRING}`, {
        method: 'GET', 
      })
      return fetch(request).then(response => {
        return response.json()
      }).catch(error => {
        return error
      });
    }

    static getAllMovieGenres() {
      const request = new Request(`${API_HOST}/3/genre/movie/list${API_KEY_STRING}`, {
        method: 'GET', 
      })
      return fetch(request).then(response => {
        return response.json()
      }).catch(error => {
        return error
      });
    }

  }
  
  export default MovieApi;
