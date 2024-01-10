import ArtAndCultureData from "./artAndCultureData";

const ArtAndCultureMainComponent = (props) => {
  const chosenData = ArtAndCultureData.find((el) => el.title === props.title);

  console.log(chosenData);

  return (
    <div>
      <div className="image-container">
        <img alt="" className="first-image" src={chosenData.image}></img>
        <div className="sub-container">
          <h1 className=" " style={{ color: "#fff", opacity: "95%" }}>
            {chosenData.mainImageTitle}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ArtAndCultureMainComponent;
