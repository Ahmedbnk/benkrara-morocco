import { useEffect, useState } from "react";

import "../ArtAndCulture/artAndCulture.css";
import ContemporaryMoroccoData from "./ContemporaryMoroccoData";

const ContemporaryMoroccoMainComponent = (props) => {
  const chosenData = ContemporaryMoroccoData.find(
    (el) => el.title === props.title
  );
  window.scrollTo({ top: 0 });

  console.log(chosenData);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="artAndCulture">
      <div className="image-container">
        <img alt="" className="first-image" src={chosenData.image}></img>
        <div className="sub-container">
          <h1 className=" " style={{ color: "#fff", opacity: "95%" }}>
            {chosenData.mainImageTitle}
          </h1>
        </div>
      </div>
      <div className="cont">
        <div className="pt-5 pb-5 history">
          <div className="container">
            <h1 className="main-green title">{chosenData.largeTitle}</h1>
            <div className="line-container">
              <span className="line mb-3"></span>
            </div>
            <div className="text-black-50 mb-5 ">
              {chosenData.generalParagraphe}
            </div>
          </div>
        </div>

        <div className="centering">
          <div className="wrap ">
            {chosenData.content.map((el) => (
              <div key={el.id}>
                {screenSize > 768 ? (
                  el.id % 2 == 0 ? (
                    <div className="row mb-5 mt-5">
                      <div className="col-sm-12 col-lg-6 col-md-6 ">
                        <div className="para-container para-container-fix-padding">
                          <div>
                            <h2 className="">{el.title}</h2>
                            <p>{el.paragraphe}</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-12 col-lg-6 col-md-6">
                        <div
                          className="sub-image-container"
                          style={{ height: "500px" }}
                        >
                          <img
                            alt=""
                            className="image "
                            style={{ width: "100%" }}
                            src={el.image}
                          ></img>
                          <h4
                            className="image-title"
                            style={{ marginBottom: "50px" }}
                          >
                            {el.imageTitle}
                          </h4>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="row mb-5 mt-5">
                      <div className="col-sm-12 col-lg-6 col-md-6">
                        <div
                          className="sub-image-container"
                          style={{ height: "500px" }}
                        >
                          <img
                            alt=""
                            className="image "
                            style={{ width: "100%" }}
                            src={el.image}
                          ></img>
                          <h4 className="image-title" style={{}}>
                            {el.imageTitle}
                          </h4>
                        </div>
                      </div>

                      <div className="col-sm-12 col-lg-6 col-md-6 ">
                        <div className="para-container">
                          <div>
                            {" "}
                            <h2 className="">{el.title}</h2>
                            <p>{el.paragraphe}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="row mb-5">
                    <div className="col-sm-12 col-lg-6 col-md-6">
                      <div
                        className="sub-image-container"
                        style={{ height: "350px" }}
                      >
                        <img
                          alt=""
                          className="image "
                          style={{ width: "100%" }}
                          src={el.image}
                        ></img>
                        <h4 className="image-title">{el.imageTitle}</h4>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-md-6 mt-4">
                      <div className="para-container">
                        <div>
                          <h2 className="">{el.title}</h2>
                          <p>{el.paragraphe}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContemporaryMoroccoMainComponent;
