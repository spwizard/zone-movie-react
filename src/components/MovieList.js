import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { API_IMAGE_URL } from "../constants/apiPaths";
import { loadMovies } from "./../actions/movie";

import { applyFiltersToMovies } from './../selectors'
import MovieGenres from "./MovieGenres";

class Movies extends Component {
  componentWillMount() {
    this.props.loadMovies();
  }

  render() {
    const { movies } = this.props;
    const style = {
      marginBottom: 20,
    };
    return (
      <div>
        { movies.map(el => (
              <Card style={style} key={el.id}>
                <CardImg
                  top
                  width="100%"
                  src={API_IMAGE_URL + el.poster_path}
                  alt={el.title}
                />
                <CardBody>
                  <CardTitle>{el.title}</CardTitle>
                  <MovieGenres genreIds={el.genre_ids} />
                </CardBody>
              </Card>
            ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: applyFiltersToMovies(state)
  }
};

const mapDispatchToProps = dispatch => ({
  loadMovies: () => dispatch(loadMovies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
