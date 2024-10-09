import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";

export const Contact = () => {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Enter your email address" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Enter your contact number" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Enter your contact message" required />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d753.9715360089956!2d30.649313239735736!3d50.413501767295635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c50266b12d7b%3A0xe160dbaf6d56e490!2sArkhitektora%20Verbyts&#39;koho%20St%2C%204%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e1!3m2!1sen!2sus!4v1728483003878!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              hello@domain.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              000-000-0000
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Kiev, Ukraine
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
