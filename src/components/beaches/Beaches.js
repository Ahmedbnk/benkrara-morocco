import { Button, Carousel, Container } from "react-bootstrap";
import "../Home/Moroccan Wonders/general.css";
import beachesData from "./beachesData";
import "./beaches.css";
import { Link } from "react-router-dom";

function Beach() {
  return (
    <div className="section pb-5 ">
      <div className=" pt-5 pb-4">
        <Container>
          <h1 className="fw-bold main-green title pt-4">
            Discover Morocco's Top Beaches
          </h1>
          <div className="line-container">
            <span className="line mb-3"></span>
          </div>
          <p className="text-black-50 mb-4">
            Dive into the enchanting world of the country's top beaches. From
            the sculpted stone arches of Legzira Beach to the turquoise waters
            of Plage Quemado, each destination promises a unique blend of
            natural beauty and cultural charm. Explore our curated list for an
            unforgettable seaside experience in Morocco.
          </p>
        </Container>
        <Carousel interval={2000}>
          {beachesData.map((beach) => (
            <Carousel.Item key={beach.id}>
              <div className="image-height">
                <img alt="" src={beach.image} className="carousel-image" />
              </div>
              <Carousel.Caption>
                <h2>{beach.name}</h2>
                <p>{beach.shortDescription}</p>
                <Button
                  as={Link}
                  to={`/beaches/${beach.id}`}
                  variant="secondary"
                  className="discover-btn"
                >
                  <h5>Discover {beach.name}</h5>
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Beach;
