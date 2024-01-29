import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();


  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4"/>

        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} Ranjitha</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://github.com/RanjithaP26"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://www.linkedin.com/in/ranjithap26/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="mailto:ranjithap2603@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            
          </ul>
        </Col>
        <Col md="4" className="footer-body"/>
        
      </Row>
    </Container>
  );
}

export default Footer;