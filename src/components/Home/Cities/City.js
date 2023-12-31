import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import cities from "./Cities";
import "./City.css";
import { Container } from "react-bootstrap";

function City() {
  window.scrollTo({ top: 140 });
  const params = useParams();
  const [chosenCity] = cities.filter((city) => city.id == params.cityId);

  return (
    <div className="">
      <div className="image-container">
        <img alt="" className="first-image" src={chosenCity.image}></img>
        <div className="sub-container">
          <h1 className=" " style={{ color: "#fff", opacity: "95%" }}>
            {chosenCity.secondName}
          </h1>
        </div>
      </div>

      <div className="tip-cards">
        <div className="general-infos">
          <h1 className="main-green title pt-4">
            Essential Facts about {chosenCity.name}
          </h1>
          <div className="line-container">
            <span className="line mb-4"></span>
          </div>
          <Container>
            <div className="row">
              {chosenCity.essentialFacts.map((fact) => (
                <div className="col-md-6 col-lg-3 mb-4" key={fact.id}>
                  <div className="box-2 card-height bg-white">
                    <div className="image-fluid-container position-relative">
                      <img src={fact.image} className="img-fluid" alt="test" />
                      <div className="image-overlay">
                        <div className="overlay-text">{fact.title}</div>
                      </div>
                    </div>
                    <h4 className="cart-title main-green p-3">{fact.title}</h4>
                    <blockquote className="text-black-50 pt-3 ps-2 pe-2">
                      {fact.description}
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default City;
