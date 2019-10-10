import React, { Component } from "react";
import "./Gallery.css";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

const rowStyle = {
  margin: "0"
};

class Gallery extends Component {
  render() {
    const { languageObject } = this.props;
    return (
      <Container id="gallery-container" fluid>
        <h2>Gallery</h2>
        <Row style={rowStyle}>
          <Col md={8}>
            <Carousel>
              {languageObject.gallery.map((image, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={image.src}
                      alt={` Stranger Things - ${index}`}
                      height={350}
                    />
                    <Carousel.Caption>
                      <p>{image.text}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>

          <Col md={4} className="location-column">
            <h4>Locations:</h4>
            <ul>
              {languageObject.locations.map((location, index) => {
                return (
                  <li key={index}>
                    <h5>{location}</h5>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Gallery;
