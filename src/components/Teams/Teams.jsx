import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import { teamsData } from "../../configs";

export const Teams = () => {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our teams</h2>
          <div className="subtitle">some of our experts</div>
        </div>
        <Row>
          {teamsData.map((item) => (
            <Col sm={3} key={item.id}>
              <div className="image">
                <Image src={item.image} alt="image" />
                <div className="overlay">
                  <div className="socials">
                    <ul>
                      <li>
                        <a href={item.fbLink}>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href={item.twitterLink}>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href={item.linkedinLink}>
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="content">
                <h3>{item.name}</h3>
                <span className="designation">{item.designation}</span>
                <p>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
