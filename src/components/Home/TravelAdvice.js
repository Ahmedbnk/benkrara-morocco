import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import tips from "./tips";
import "./style.css";

function TravelAdvice() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="tip-cards text-center pb-5 pt-5">
      <Container className="pt-4">
        <h1 className="fw-bold main-green title">
          Explore Morocco Travel Tips
        </h1>
        <div className="line-container">
          <span className="line mb-3"></span>
        </div>
        <p className="text-black-50 mb-5">
          Discover essential travel tips for exploring the diverse landscapes
          and rich culture of Morocco. Whether it's navigating local customs,
          savoring delicious cuisine, or ensuring your safety, these tips will
          enhance your Moroccan adventure.
        </p>

        <div className="row">
          {tips.map((tip) => (
            <div className="col-md-6 col-lg-3 mb-4" key={tip.title}>
              <div className="box card-height bg-white">
                <div className="image-fluid-container">
                  <img src={tip.image} className="img-fluid" alt="test" />
                  <div className="image-overlay">
                    <div className="overlay-text">
                      {windowWidth < 500 &&
                      tip.title === "Explore Diverse Landscapes"
                        ? "Discover Varied Terrains"
                        : tip.title}
                    </div>
                  </div>
                </div>
                <h4 className="p-3 main-green">
                  {windowWidth < 500 &&
                  tip.title === "Explore Diverse Landscapes"
                    ? "Discover Varied Terrains"
                    : tip.title}
                </h4>
                <blockquote className="text-black-50 p-3">{tip.tip}</blockquote>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default TravelAdvice;
