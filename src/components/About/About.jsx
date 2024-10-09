import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { assets } from "../../assets/images/assets";

export const About = () => {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About US</h2>
          <div className="subtitle">Learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={assets.img1} />
          </Col>
          <Col sm={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laudantium, rem nisi
              earum provident ullam sapiente consequuntur possimus! Fugiat suscipit quidem
              reprehenderit sequi corporis facere nisi recusandae quis accusantium quas.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni optio commodi velit
              quis quos qui aut delectus voluptatem perferendis nam?Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quisquam, consectetur.
            </p>
            <div className="progress-block">
              <h4>HTML/CSS/JAVASCRIPT</h4>
              <ProgressBar now={80} label={`80%`} />
            </div>
            <div className="progress-block">
              <h4>RESPONSIVE</h4>
              <ProgressBar now={95} label={`95%`} />
            </div>
            <div className="progress-block">
              <h4>PhotoShop</h4>
              <ProgressBar now={60} label={`60%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
