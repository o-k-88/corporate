import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import { testimonialsData } from "../../configs";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel controls={false}>
          {testimonialsData.map((item) => (
            <Carousel.Item key={item.id}>
              <blockquote>
                <p>{item.description}</p>
                <cite>
                  <span className="name">{item.name}</span>
                  <span className="designation">{item.designation}</span>
                </cite>
              </blockquote>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};
