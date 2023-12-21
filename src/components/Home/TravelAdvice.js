import React from "react";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import tips from "./tips";
import "./style.css";

function TravelAdvice() {
  return (
    <div className="tip-cards text-center pb-5 pt-5">
      <div className="container pb-5 pt-2">
        <h2 className="fw-bold main-green">Explore Morocco Travel Tips</h2>
        <div className="line-container">
          <span className="line mb-3 "></span>
        </div>
        <p className="text-black-50 mb-5">
          Discover essential travel tips for exploring the diverse landscapes
          and rich culture of Morocco. Whether it's navigating local customs,
          savoring delicious cuisine, or ensuring your safety, these tips will
          enhance your Moroccan adventure.
        </p>

        <div className="row">
          {tips.map((tip) => (
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="box card-height bg-white">
                <div className="image-fluid-container">
                  <img src={tip.image} className="img-fluid" alt="test" />
                </div>
                <h4 className="p-3  main-green">{tip.title}</h4>
                <blockquote className="text-black-50 p-3">{tip.tip}</blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelAdvice;
