import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";

import { worksData } from "../../configs";

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}
export const Works = () => {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Works</h2>
          <div className="subtitle">our awesome works</div>
        </div>
        <Row className="portfoliolist">
          {worksData.map((item) => (
            <Col sm={4} key={item.id}>
              <div className="portfolio-wrapper">
                <a href={item.link}>
                  <Image src={item.image} />
                  <div className="label text-center">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
        <Pagination size="lg">{items}</Pagination>
      </Container>
    </section>
  );
};
