import Geography from "./Geography";
import History from "./History";

function HistoryAndGeography() {
  window.scrollTo({ top: 0 });
  return (
    <div className="" style={{ backgroundColor: "#fefefd" }}>
      <div className="image-container">
        <img
          alt=""
          className="first-image"
          src="https://lirp-cdn.multiscreensite.com/efe4a65f/dms3rep/multi/opt/08.AitBenHaddou-42-37227995-crop-1680x10503-1920w.jpg"
        ></img>
        <div className="sub-container">
          <h1 className=" " style={{ color: "#fff", opacity: "95%" }}>
            History And Geography
          </h1>
        </div>
      </div>
      <History />
      <Geography />
    </div>
  );
}

export default HistoryAndGeography;
