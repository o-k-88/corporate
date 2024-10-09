import Carousel from "react-bootstrap/Carousel";
import { heroData } from "../../configs";

export const Hero = () => {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((item, index) => (
          <Carousel.Item key={index}>
            <img src={item.image} alt={item.alt} />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a className="btn btn-primary" href={item.link}>
                Learn More
                <i className="fas fa-chevron-right"></i>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};
