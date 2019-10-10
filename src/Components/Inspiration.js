import React, { Component } from "react";
import "./Inspiration.css";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

const rowStyle = {
  margin: "0"
};

class Inspiration extends Component {
  render() {
    const { languageObject } = this.props;
    return (
      <Container id="inspiration-container" fluid>
        <h2>Inspiration</h2>
        <Row style={rowStyle}>
          {/* <h2>Inspiration</h2> */}
          <Col md={4} id="logo-container">
            <Row style={rowStyle}>
              <Image src="./assets/stanger-things_raw.png" fluid />
            </Row>
            <Row className="description-text" style={rowStyle}>
              <p>{languageObject.description}</p>
            </Row>
          </Col>
          <Col md={8} id="description-container">
            <Row style={rowStyle}>
              <p>{languageObject.snippets}</p>
            </Row>
            <Row style={rowStyle}>
              <div
                style={{
                  width: 550,
                  height: "auto",
                  margin: "auto",
                  marginTop: "20px"
                }}
              >
                <ResponsiveEmbed aspectRatio="16by9">
                  <embed
                    type="image/svg+xml"
                    src={languageObject["video-embed"]}
                  />
                </ResponsiveEmbed>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Inspiration;
