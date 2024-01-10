import { useParams } from "react-router-dom";
import beachesData from "./beachesData";
import { Container } from "react-bootstrap";

function Beach() {
  window.scrollTo({ top: 0 });
  const params = useParams();
  const [chosenBeach] = beachesData.filter(
    (beach) => beach.id == params.beachId
  );

  return (
    <div className="">
      <div className="image-container">
        <img alt="" className="first-image" src={chosenBeach.image}></img>
        <div className="sub-container">
          <h1 className=" " style={{ color: "#fff", opacity: "95%" }}>
            {chosenBeach.shortDescription}
          </h1>
        </div>
      </div>

      <div className="tip-cards">
        <div className="general-infos">
          <h1 className="main-green title pt-4">
            Beach Chronicles: Unveiling {chosenBeach.name} Wonders
          </h1>
          <div className="line-container">
            <span className="line mb-4"></span>
          </div>
          <Container>
            <div className="row">
              {chosenBeach.facts.map((fact) => (
                <div className="col-md-6 col-lg-4 mb-4" key={fact.id}>
                  <div
                    className="box-2 card-height bg-white"
                    style={{ height: "440px" }}
                  >
                    <div className="image-fluid-container ">
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
export default Beach;
