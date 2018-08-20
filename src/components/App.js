import React, { Component } from "react";
import Genrelist from "./GenreList";
import Movielist from "./MovieList";
import RatingList from "./RatingList";
import "../App.css";
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <header role="banner">
          <h1>Movies Playing Now</h1>
        </header>
        <Container>
          <RatingList />
        </Container>
        <Container>
          <Genrelist />
        </Container>
        <Container>
          <Movielist />
        </Container>
      </div>
    );
  }
}

export default App;
