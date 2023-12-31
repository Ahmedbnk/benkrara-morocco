import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./Carouse.css"; // Make sure to create this CSS file
import cities from "./Cities/Cities";
import { Button } from "react-bootstrap";

function Carouse() {
  return (
    <Carousel interval={2000}>
      {cities.map((city) => (
        <Carousel.Item key={city.id}>
          <div className="image-height">
            <img alt="" src={city.image} className="carousel-image" />
          </div>
          <Carousel.Caption>
            <h2>{city.name}</h2>
            <p>{city.shortDescription}</p>
            <Button
              as={Link}
              to={`/cities/${city.id}`}
              variant="secondary"
              className="discover-btn"
            >
              <h5 className="discover">Discover {city.name}</h5>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carouse;
