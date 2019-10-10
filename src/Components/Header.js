import React, { Component } from "react";
import "./Header.css";
import Navbar from "./Navbar";

// Bootstrap Imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class Header extends Component {
  render() {
    const { language, languageObject } = this.props;

    return (
      <Container fluid id="header-container">
        <Row id="company-language-row">
          <Col id="company-title">Flix by IBM - An RTP Original</Col>
          <Col id="language-container">
            <DropdownButton id="language-button" title={language}>
              <Dropdown.Item
                as="button"
                onClick={this.props.updateLanguage.bind(null, "English")}
              >
                English
              </Dropdown.Item>
              <Dropdown.Item
                as="button"
                onClick={this.props.updateLanguage.bind(null, "Pig Latin")}
              >
                Pig Latin
              </Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Row className="justify-content-end navbar-row">
          <Navbar />
        </Row>
        <Row id="show-title" className="justify-content-center">
          <h1>{languageObject.heading}</h1>
        </Row>
      </Container>
    );
  }
}

export default Header;
