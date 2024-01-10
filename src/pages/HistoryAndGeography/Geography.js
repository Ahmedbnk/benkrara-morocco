import React, { useEffect, useState } from "react";
import "./HistoryAndGeography.css";
import HistoryCard from "./HistoryCard";
import GeographyData from "./GeographyData";

const Geography = () => {
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
    <div className="geography pt-5 pb-5 ">
      <div className="container">
        <h1 className="main-green title"> GEOGRAPHY OF MOROCCO</h1>
        <div className="line-container">
          <span className="line mb-3"></span>
        </div>
        <div className="text-black-50 mb-5 ">
          Situated at the crossroads of Europe and Africa, Morocco boasts a
          geographical wonderland framed by the Mediterranean and the vast
          Atlantic Ocean. Referred to as the "land of the distant sunset," it
          intrigues with a two-thousand-year-old history, showcasing remnants of
          great Mediterranean civilizations like the Roman ruins of Volubilis in
          the north. Rabat reflects an ancient French presence, while treasures
          such as the Kasbah of the Oudayas and Menara gardens illustrate the
          enduring influence of Muslim civilizations. Morocco's landscapes, from
          sea and mountains to desert sands and green plains, offer captivating
          panoramas, blending tranquility with cultural richness in a raw,
          enchanting nature.
        </div>
      </div>
      <div className="centering">
        <section className="wrap con">
          <div className="row-father">
            {screenSize > 993 ? (
              <div className="row roww">
                <div className="col-sm-12 col-lg-5">
                  <div className="sub-image-container">
                    <img
                      alt=""
                      className="image "
                      src="https://www.voyage-maroc.com/cdn/ma-public/anti_atlas.jpg"
                    ></img>
                    <h4 className="image-title">Anti Atlas</h4>
                  </div>
                </div>

                <div className="col-sm-12 col-lg-2 card-container first-card">
                  <div className="history-card-container sm-mt-5">
                    <div className="history-card">
                      <div className="history-text">
                        <h4 className="pb-1">Anti Atlas</h4>
                        <small>(3304 m)</small>
                      </div>
                    </div>
                    <span className="vertical-line"></span>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-5 p-container-first">
                  <h2 className="main-green">Anti Atlas</h2>
                  <p className="">
                    The Anti-Atlas, which is a chain recognized by its excessive
                    aridity, hosts modest summits with Jbel Siroua (3 300 m)
                    being the highest peak. Like the High Atlas and the Middle
                    Atlas, all its massifs has an astonishing diversity in terms
                    of fauna and flora, geology and culture with Amazigh charm.
                    Its arid character is due to its proximity to the Saharan
                    lands since its last rampart is just before the "Hamada du
                    DraÃ¢". Previously unknown, the crossing of the Anti-Atlas
                    mountains represents today a modern circuit, rich in
                    landscapes and leisure activities.
                  </p>
                </div>
              </div>
            ) : (
              <div className="row roww">
                <div className="col-sm-12 col-lg-2 card-container first-card">
                  <div className="history-card-container sm-mt-5">
                    <div className="history-card">
                      <div className="history-text">
                        <h4 className="pb-1">Anti Atlas</h4>
                        <small>(3304 m)</small>
                      </div>
                    </div>
                    <span className="vertical-line"></span>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-5 p-container-first">
                  <h2 className="main-green">Anti Atlas</h2>
                  <p>
                    The Anti-Atlas, which is a chain recognized by its excessive
                    aridity, hosts modest summits with Jbel Siroua (3 300 m)
                    being the highest peak. Like the High Atlas and the Middle
                    Atlas, all its massifs has an astonishing diversity in terms
                    of fauna and flora, geology and culture with Amazigh charm.
                    Its arid character is due to its proximity to the Saharan
                    lands since its last rampart is just before the "Hamada du
                    DraÃ¢". Previously unknown, the crossing of the Anti-Atlas
                    mountains represents today a modern circuit, rich in
                    landscapes and leisure activities.
                  </p>
                </div>
                <div className="col-sm-12 col-lg-5">
                  <div className="sub-image-container">
                    <img
                      alt=""
                      className="image "
                      src="https://www.voyage-maroc.com/cdn/ma-public/anti_atlas.jpg"
                    ></img>
                    <h4 className="image-title">Anti Atlas</h4>
                  </div>
                </div>
              </div>
            )}
          </div>

          {GeographyData.map((el) => (
            <div key={el.id}>
              {screenSize > 993 ? (
                el.id % 2 == 0 ? (
                  <div className="mapped-row roww row part ">
                    <div className="col-sm-12 col-lg-5 p-container">
                      <h2 className="main-green">{el.title}</h2>
                      <p>{el.paragraphe}</p>
                    </div>
                    <div className="col-sm-12 col-lg-2 card-container">
                      <HistoryCard title={el.title} period={el.period} />
                    </div>
                    <div className="col-sm-12 col-lg-5">
                      <div className="sub-image-container">
                        <img alt="" className="image " src={el.image}></img>
                        <h4 className="image-title">{el.imageTitle}</h4>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mapped-row roww row part ">
                    <div className="col-sm-12 col-lg-5">
                      <div className="sub-image-container">
                        <img alt="" className="image " src={el.image}></img>
                        <h4 className="image-title">{el.imageTitle}</h4>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-2 card-container">
                      <HistoryCard title={el.title} period={el.period} />
                    </div>
                    <div className="col-sm-12 col-lg-5 p-container">
                      <h2 className="main-green">{el.title}</h2>
                      <p>{el.paragraphe}</p>
                    </div>
                  </div>
                )
              ) : (
                <div className="mapped-row roww row part ">
                  <div className="col-sm-12 col-lg-2 card-container">
                    <HistoryCard title={el.title} period={el.period} />
                  </div>
                  <div className="col-sm-12 col-lg-5 p-container">
                    <h2 className="main-green">{el.title}</h2>
                    <p>{el.paragraphe}</p>
                  </div>
                  <div className="col-sm-12 col-lg-5">
                    <div className="sub-image-container">
                      <img alt="" className="image " src={el.image}></img>
                      <h4 className="image-title">{el.imageTitle}</h4>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {screenSize > 994 ? (
            <div className="row roww">
              <div className="col-sm-12 col-lg-5 p-container">
                <h2 className="main-green">Merzouga desert</h2>
                <p>
                  For a night under the stars or in a bivouac, for long hikes on
                  the sand dunes and for a unique experience in the middle of
                  the Moroccan desert, the Merzouga desert will shower you with
                  its austere beauty. Merzouga is one of the doors that open to
                  the Saharan vastness, with its ochre-brown colour, under a
                  beautiful sunshine. At sunrise or sunset, you’ll enjoy a
                  breathtaking landscape. In bivouac, you’ll enjoy all the folk
                  festivities and the exceptional Saharan culture. On the back
                  of a camel, admire all the wild landscapes.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 card-container">
                <div className="history-card-container sm-mt-5">
                  <div className="history-card last-card-margin-top">
                    <div className="history-text">
                      <h4 className="pb-1">Merzouga desert</h4>
                      <small></small>
                    </div>
                  </div>
                  <span className="vertical-line-top"></span>
                  <span className="vertical-line-last"></span>
                </div>
              </div>
              <div className="col-sm-12 col-lg-5">
                <div className="sub-image-container">
                  <img
                    alt=""
                    className="image "
                    src="https://desert-maroc.com/wordpress2012/wp-content/uploads/desert-merzouga-camp-e1613144211750.jpg"
                  ></img>
                  <h4 className="image-title">Merzouga desert</h4>
                </div>
              </div>
            </div>
          ) : (
            <div className="row roww">
              <div className="col-sm-12 col-lg-2 card-container">
                <div className="history-card-container sm-mt-5">
                  <div className="history-card last-card-margin-top">
                    <div className="history-text">
                      <h4 className="pb-1">Merzouga desert</h4>
                      <small></small>
                    </div>
                  </div>
                  <span className="vertical-line-top"></span>
                  <span className="vertical-line-last"></span>
                </div>
              </div>
              <div className="col-sm-12 col-lg-5 p-container">
                <h2 className="main-green">Merzouga desert</h2>
                <p>
                  For a night under the stars or in a bivouac, for long hikes on
                  the sand dunes and for a unique experience in the middle of
                  the Moroccan desert, the Merzouga desert will shower you with
                  its austere beauty. Merzouga is one of the doors that open to
                  the Saharan vastness, with its ochre-brown colour, under a
                  beautiful sunshine. At sunrise or sunset, you’ll enjoy a
                  breathtaking landscape. In bivouac, you’ll enjoy all the folk
                  festivities and the exceptional Saharan culture. On the back
                  of a camel, admire all the wild landscapes.
                </p>
              </div>

              <div className="col-sm-12 col-lg-5">
                <div className="sub-image-container">
                  <img
                    alt=""
                    className="image "
                    src="https://desert-maroc.com/wordpress2012/wp-content/uploads/desert-merzouga-camp-e1613144211750.jpg"
                  ></img>
                  <h4 className="image-title">Merzouga desert</h4>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
export default Geography;
