import footballData from "./footballData";
import "./football.css";
import { useEffect, useState } from "react";

function Football() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const semifinalDate = new Date("Dec 15 2022 12:45:00");
  const [difference, setDifference] = useState(new Date() - semifinalDate);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    const intervalId = setInterval(() => {
      const newDifference = new Date() - semifinalDate;
      setDifference(newDifference);
    }, 1000);

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, [semifinalDate]);

  const newY = Math.floor(difference / 1000 / 60 / 60 / 24 / 365);
  const newD = Math.floor(difference / 1000 / 60 / 60 / 24) % 365;
  const newH = Math.floor(difference / 1000 / 60 / 60) % 24;
  const newM = Math.floor(difference / 1000 / 60) % 60;
  const newS = Math.floor(difference / 1000) % 60;

  return (
    <div className="container pt-5">
      <div className="titleAndDescription-container pb-4">
        <h1 className="fw-bold main-green title pt-4">
          Kingdom of Football Splendor
        </h1>
        <div className="line-container">
          <span className="line mb-3"></span>
        </div>
        <p className="text-black-50 mb-4">
          Explore Morocco's football triumphs, guided by visionary leadership
          and passionate fans. From historic victories to groundbreaking
          achievements, join us in celebrating a realm where dreams are
          realized, challenges conquered, and the spirit of unity and passion
          for the beautiful game reigns supreme.
        </p>
      </div>

      <div className="mb-5">
        {footballData.map((el) => (
          <div key={el.id} className="mb-4">
            {screenSize > 768 ? (
              <div className="row">
                {el.id % 2 !== 0 ? (
                  <>
                    <div
                      className="col-sm-12 col-md-6 col-lg-6 mb-3"
                      style={{ maxHeight: "400px", overflow: "hidden" }}
                    >
                      <img
                        alt=""
                        src={el.image}
                        className="img-fluid"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      className="col-sm-12 col-md-6 col-lg-6 overflow-auto"
                      style={{ maxHeight: "400px" }}
                    >
                      <h3>{el.name}</h3>
                      <p className="text-black-50 paragraphe">
                        {el.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="col-sm-12 col-md-6 col-lg-6 overflow-auto"
                      style={{ maxHeight: "400px" }}
                    >
                      <h3>{el.name}</h3>
                      <p className="text-black-50 paragraphe">
                        {el.description}
                      </p>
                    </div>
                    <div
                      className="col-sm-12 col-md-6 col-lg-6 mb-3"
                      style={{ maxHeight: "400px", overflow: "hidden" }}
                    >
                      <img
                        alt=""
                        src={el.image}
                        className="img-fluid"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="row">
                <div
                  className="col-12 mb-3"
                  style={{ maxHeight: "400px", overflow: "hidden" }}
                >
                  <img
                    alt=""
                    src={el.image}
                    className="img-fluid"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  className="col-12 overflow-auto"
                  style={{ maxHeight: "400px" }}
                >
                  <h3>{el.name}</h3>
                  <p className="text-black-50 paragraphe">{el.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="image-timer-container mb-5">
        <div className="image-timer-sub-container">
          <img
            className="image-timer"
            alt="worldcup"
            src="https://www.newarab.com/sites/default/files/styles/large_16_9/public/1447200358.jpeg?h=199d8c1f&itok=3LhbN2Bf"
          ></img>
        </div>
        <h1 className="timer" style={{ whiteSpace: "pre-line" }}>
          {`The semi-final was\n${newY} ${newY === 1 ? "year" : "years"}, ${
            newD < 10 ? "0" + newD : newD
          } days\n${newH < 10 ? "0" + newH : newH}:${
            newM < 10 ? "0" + newM : newM
          }:${newS < 10 ? "0" + newS : newS} seconds ago`}
        </h1>
      </div>
    </div>
  );
}

export default Football;
