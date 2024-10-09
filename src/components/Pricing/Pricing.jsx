import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { pricingData } from "../../configs";

export const Pricing = () => {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Pricing & plans</h2>
          <div className="subtitle">check our pricing & plans</div>
        </div>
        <Row>
          {pricingData.map((item) => (
            <Col sm={4} key={item.id}>
              <div className="heading">
                <h3>{item.plan}</h3>
                <span className="price">{item.price}</span>
              </div>
              <div className="content">
                <ListGroup>
                  {item.features.map((feature) => (
                    <ListGroup.Item key={feature}>{feature}</ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              <div className="btn-holder">
                <a href={item.link} className="btn btn-primary">
                  Order now
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
