import React, { Component } from "react";
import "./Episodes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const rowStyle = {
  margin: "0"
};
const testStyle = {
  fontSize: "3em",
  color: "Tomato"
};

class Episodes extends Component {
  constructor(props) {
    super(props);
    this.sortByRating = this.sortByRating.bind(this);
    this.state = {
      ratingsList: []
    };
  }
  sortByRating(e) {
    let newRatingsList = this.props.languageObject["episode-list"].reverse();
    this.setState({
      ratingsList: newRatingsList.sort((a, b) => a.rating > b.rating)
    });
  }
  render() {
    const { languageObject } = this.props;
    return (
      <Container id="episodes-container" fluid>
        <h2>
          Episodes
          <Button variant="outline-secondary" onClick={this.sortByRating}>
            Sort by rating
          </Button>
        </h2>

        <Row style={rowStyle}>
          <Col>
            <h5>Season 1:</h5>
            <ul>
              {languageObject["episode-list"].map((episode, index) => {
                if (episode.season === 1) {
                  return (
                    <li key={index}>
                      <Row>
                        <Col>
                          <h5>{episode.name}</h5>
                        </Col>
                        <Col className="ratings">
                          {episode.rating}
                          <FontAwesomeIcon icon={faStar} />
                        </Col>
                      </Row>
                    </li>
                  );
                }
              })}
            </ul>
          </Col>
          <Col>
            <h5>Season 2:</h5>
            <ul>
              {languageObject["episode-list"].map((episode, index) => {
                if (episode.season === 2) {
                  return (
                    <li key={index}>
                      <Row>
                        <Col>
                          <h5>{episode.name}</h5>
                        </Col>
                        <Col className="ratings">
                          {episode.rating}
                          <FontAwesomeIcon icon={faStar} />
                        </Col>
                      </Row>
                    </li>
                  );
                }
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Episodes;
