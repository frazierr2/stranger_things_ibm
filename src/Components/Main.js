import React, { Component } from "react";
import Inspiration from "./Inspiration";
// CSS Imports
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

class Main extends Component {
  render() {
    return (
      <Container fluid id="Test">
        {React.cloneElement(this.props.children, this.props)}
        <Inspiration {...this.props} />
      </Container>
    );
  }
}
export default Main;
