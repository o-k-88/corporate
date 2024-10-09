import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { blogData } from "../../configs";

export const Blog = () => {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">get our latest news from blog</div>
        </div>
        <Row>
          {blogData.map((item) => (
            <Col sm={4} key={item.id}>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <time>{item.time}</time>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <a href={item.link} className="btn btn-primary">
                    Read More
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
