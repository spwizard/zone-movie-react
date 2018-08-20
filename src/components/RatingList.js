import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, FormGroup, Input, Label, Row } from 'reactstrap';
import { selectMoviesByRating } from '../actions/user';

class RatingList extends Component {

  handleSliderChange = (evt) => {
    this.props.selectRating(evt.target.value)
  }

  render() {
    return (
      <Row style={{
        marginBottom: 20
      }}>
        <Col sm="12"><h4>Rating selector ({this.props.rating})</h4></Col>
        <Col sm="12">
        <input 
          type="range" 
          onChange={this.handleSliderChange}
          min="0"
          max="10"
          value={this.props.rating}
          step="0.5" />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    rating: state.user.selectedRating
  }
};

const mapDispatchToProps = (dispatch) => ({
  selectRating: (id) => dispatch(selectMoviesByRating(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RatingList)