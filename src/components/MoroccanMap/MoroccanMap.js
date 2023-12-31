import React from "react";
import "./MoroccanMap.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import cities from "../Home/Cities/Cities";

const MoroccanMap = () => {
  return (
    <div className="map-section mt-4" style={{ backgroundColor: "#eff7fa" }}>
      <h1 className="fw-bold main-green title pt-5">
        Discover Morocco: Interactive Map
      </h1>
      <div className="line-container">
        <span className="line mb-4"></span>
      </div>
      <Container>
        <Row>
          <Col
            sm={12}
            md={6}
            lg={6}
            className="overflow-auto"
            style={{ maxHeight: "400px" }}
          >
            <p>
              Embark on a virtual journey across the enchanting landscapes of
              Morocco with our 'Discover Morocco: Interactive Map.' Immerse
              yourself in the rich tapestry of this North African gem as you
              explore diverse regions, vibrant cities, and cultural wonders.
              Navigate through the map to uncover the beauty, history, and
              hidden gems that make Morocco a captivating destination. Whether
              you're planning your next adventure or simply curious about the
              country's geographical treasures, our interactive map is your
              gateway to the heart of Morocco. <strong>Click</strong> on any
              city to explore further and discover its unique charm.
            </p>
          </Col>
          <Col sm={12} md={6} lg={6} className="mb-3 map-image">
            {cities.map((city) => (
              <Link
                to={`/cities/${city.id}`}
                key={city.id}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className={`city ${city.name.toLowerCase()}`}>
                  {city.name}
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    style={{ color: "#006230" }}
                  />
                </div>
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MoroccanMap;
