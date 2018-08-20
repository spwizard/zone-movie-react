import { createSelector } from 'reselect';

export const applyFiltersToMovies = createSelector(
  state => state,
  (state) => {

    const movies = [...state.movies.items];

    return movies
      // Sort by popularity
      .sort((a, b) => {
        return b.popularity - a.popularity
      })
      // Filter by rating and removel lower than selected
      .filter(movie => {
        return movie.vote_average >= state.user.selectedRating;
      })
      // Filter by selected genres
      .filter((movie) => {
        return (() => {
          // TODO: probably need to find out some better approach
          if (state.user.selectedGenres.length < 1) {
            return true;
          }
          let valid = true;
          state.user.selectedGenres.forEach(id => {
            if (!movie.genre_ids.includes(id)) {
              valid = false;
            }
          });
          return valid;
        })();
      })
  }
)

export const getMovieGenres = createSelector(
  (state, props) => {
    let genreName = "";
    state.genres.items.forEach((genre) => {
      if (props.genreIds.includes(genre.id)) {
        genreName += `${genre.name} `
      }
    });
    return genreName;
  }, (genreNames) => genreNames
);