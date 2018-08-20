import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { loadMovieGenres } from '../actions/genres';
import { selectMoviesByGenre } from '../actions/user';

class Genres extends Component {

  componentWillMount() {
    this.props.loadMovieGenres();
  }

  render() {
    const { genres } = this.props;
    const style = {
      marginBottom: 20,
    };
    return (
      <Row style={style}>
        <Col sm="12"><h4>Genre selector</h4></Col>
        {genres.map(el => (
          <Col sm="3" key={el.id}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" onChange={() => this.props.selectMovieGenre(el.id)} />{' '}
                {el.name}
              </Label>
            </FormGroup>
          </Col>
        ))}
      </Row>
    );
    ;
  }
}

const mapStateToProps = state => {
  return {
    genres: state.genres.items
  }
};

const mapDispatchToProps = (dispatch) => ({
  loadMovieGenres: () => dispatch(loadMovieGenres()),
  selectMovieGenre: (id) => dispatch(selectMoviesByGenre(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Genres)
