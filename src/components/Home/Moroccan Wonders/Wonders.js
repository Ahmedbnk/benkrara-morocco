// CardSection.js

import React from "react";

import "./wonders.css";
import "./general.css";

import { Container } from "react-bootstrap";
import wondersData from "./wondersData";

const Wonders = () => {
  return (
    <div className="pt-5 pb-5">
      <div className="container">
        <h1 className="main-green title pt-4">Moroccan Wonders Decoded</h1>
        <div className="line-container">
          <span className="line mb-3"></span>
        </div>
        <p className="text-black-50 mb-5">
          Discover essential travel tips for exploring the diverse landscapes
          and rich culture of Morocco. Whether it's navigating local customs,
          savoring delicious cuisine, or ensuring your safety, these tips will
          enhance your Moroccan adventure.
        </p>
        <section className="wrap">
          <div>
            {wondersData.map((wonder) => (
              <div className="row mt-5 mb-5" key={wonder.id}>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div
                    className="card card-has-bg click-col"
                    style={{
                      backgroundImage: `url(${wonder.image})`,
                      backgroundSize: "cover",
                      height: "100%",
                    }}
                  >
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-body d-flex align-items-center justify-content-center main-red">
                        <h2 className="card-title mt-0 fw-bold">
                          {wonder.titleMax}?
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-5 info-container col-lg-7">
                  <div className="info">
                    <h3 className="card-title main-green  mt-4">
                      {wonder.title}
                    </h3>

                    <p className="pt-3 text-black-50 paragraphe">
                      {wonder.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Wonders;
