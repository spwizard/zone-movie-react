import React from "react";
import { connect } from "react-redux";
import { CardSubtitle } from "reactstrap";
import { getMovieGenres } from "../selectors";

const MovieGenres = ({genres}) => (
  <CardSubtitle>{genres}</CardSubtitle>
)
const mapStateToProps = (state, props) => {
  return {
    genres: getMovieGenres(state, props)
  }
};

export default connect(
  mapStateToProps
)(MovieGenres);