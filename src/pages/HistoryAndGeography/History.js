import React, { useEffect, useState } from "react";
import HistoryData from "./HistoryData";
import "./HistoryAndGeography.css";
import HistoryCard from "./HistoryCard";

const History = () => {
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
    <div className="pt-5 pb-5 history">
      <div className="container">
        <h1 className="main-green title"> HISTORY OF MOROCCO</h1>
        <div className="line-container">
          <span className="line mb-3"></span>
        </div>
        <div className="text-black-50 mb-5 ">
          Morocco, a cultural melting pot, is defined by a succession of
          influential dynasties – Idrisside, Almoravid, Almohad, Merinid,
          Saadian, and Alaouite. Recognized by UNESCO for its diverse heritage,
          Morocco's international appeal lies in its status as a multicultural
          gem. A sought-after destination for nature, history, and hospitality
          enthusiasts, Morocco offers enriching experiences that leave travelers
          pleasantly satisfied.
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
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Moulay_Idriss_2.jpg/1200px-Moulay_Idriss_2.jpg"
                    ></img>
                    <h4 className="image-title">Moulay Driss Zerhoun</h4>
                  </div>
                </div>

                <div className="col-sm-12 col-lg-2 card-container first-card">
                  <div className="history-card-container sm-mt-5">
                    <div className="history-card">
                      <div className="history-text">
                        <h4 className="pb-1">Idrisside Dynasty</h4>
                        <small>(789-974)</small>
                      </div>
                    </div>
                    <span className="vertical-line"></span>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-5 p-container-first">
                  <h2 className="main-green">Idrisside Dynasty</h2>
                  <p className="">
                    {" "}
                    The Idrisside dynasty was the first to conquer Morocco for
                    more than a century. Its founder was Idriss the 1st famous
                    for making Volubilis (Walili) his capital. From 789 to 978,
                    the Idrisside dynasty dominated much of the Maghreb,
                    including the North Africa of the current Morocco. Being the
                    founder of the first royal dynasty in Morocco, the
                    Idrissides were able to build new cities including Fez,
                    which became afterwards the capital after Volubilis during
                    the reign of the son Idriss II and his successors. Several
                    monuments are evidence of the architectural and religious
                    works of this dynasty, such as the Al-Qarawiyin Mosque,
                    which is one of the most important mosques in Morocco and
                    whose architecture is an outstanding artistic masterpiece.
                    After several years of reign, the dynasty fell to the
                    Almoravids.
                  </p>
                </div>
              </div>
            ) : (
              <div className="row roww">
                <div className="col-sm-12 col-lg-2 card-container first-card">
                  <div className="history-card-container sm-mt-5">
                    <div className="history-card">
                      <div className="history-text">
                        <h4 className="pb-1">Idrisside Dynasty</h4>
                        <small>(789-974)</small>
                      </div>
                    </div>
                    <span className="vertical-line"></span>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-5 p-container-first">
                  <h2 className="main-green">Idrisside Dynasty</h2>
                  <p>
                    {" "}
                    The Idrisside dynasty was the first to conquer Morocco for
                    more than a century. Its founder was Idriss the 1st famous
                    for making Volubilis (Walili) his capital. From 789 to 978,
                    the Idrisside dynasty dominated much of the Maghreb,
                    including the North Africa of the current Morocco. Being the
                    founder of the first royal dynasty in Morocco, the
                    Idrissides were able to build new cities including Fez,
                    which became afterwards the capital after Volubilis during
                    the reign of the son Idriss II and his successors. Several
                    monuments are evidence of the architectural and religious
                    works of this dynasty, such as the Al-Qarawiyin Mosque,
                    which is one of the most important mosques in Morocco and
                    whose architecture is an outstanding artistic masterpiece.
                    After several years of reign, the dynasty fell to the
                    Almoravids.
                  </p>
                </div>
                <div className="col-sm-12 col-lg-5">
                  <div className="sub-image-container">
                    <img
                      alt=""
                      className="image "
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Moulay_Idriss_2.jpg/1200px-Moulay_Idriss_2.jpg"
                    ></img>
                    <h4 className="image-title">Moulay Driss Zerhoun</h4>
                  </div>
                </div>
              </div>
            )}
          </div>

          {HistoryData.map((el) => (
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
                <h2 className="main-green">Alaouite Dynasty</h2>
                <p>
                  The Saadians were dethroned by the Alaouite dynasty.
                  Originating from Tafilalt, the Alaouite dynasty drove out the
                  Saadians for the sake of power. After taking Fez as a capital,
                  it was up to Meknes under the reign of Sultan Moulay Ismail,
                  then finally to Rabat, which has been the current capital of
                  Morocco since 1912. Thanks to this dynasty, the city of Fez
                  was rejuvenated, embellishing the whole city and creating
                  protective walls such as the famous Bab El-Mansour gate. The
                  dynasty continued its reign until today. Muhammad VI is the
                  twenty-third ruler of this succession, ensuring the
                  unification of the Kingdom and the transmission of all
                  religious values.
                </p>
              </div>
              <div className="col-sm-12 col-lg-2 card-container">
                <div className="history-card-container sm-mt-5">
                  <div className="history-card last-card-margin-top">
                    <div className="history-text">
                      <h4 className="pb-1">Alaouite Dynasty</h4>
                      <small>(1666-present)</small>
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
                    src="https://www.barcelo.com/guia-turismo/wp-content/uploads/2022/10/casablanca-quever-pal.jpg"
                  ></img>
                  <h4 className="image-title">Moulay Driss Zerhoun</h4>
                </div>
              </div>
            </div>
          ) : (
            <div className="row roww">
              <div className="col-sm-12 col-lg-2 card-container">
                <div className="history-card-container sm-mt-5">
                  <div className="history-card last-card-margin-top">
                    <div className="history-text">
                      <h4 className="pb-1">Alaouite Dynasty</h4>
                      <small>(1666-present)</small>
                    </div>
                  </div>
                  <span className="vertical-line-top"></span>
                  <span className="vertical-line-last"></span>
                </div>
              </div>
              <div className="col-sm-12 col-lg-5 p-container">
                <h2 className="main-green">Alaouite Dynasty</h2>
                <p>
                  The Saadians were dethroned by the Alaouite dynasty.
                  Originating from Tafilalt, the Alaouite dynasty drove out the
                  Saadians for the sake of power. After taking Fez as a capital,
                  it was up to Meknes under the reign of Sultan Moulay Ismail,
                  then finally to Rabat, which has been the current capital of
                  Morocco since 1912. Thanks to this dynasty, the city of Fez
                  was rejuvenated, embellishing the whole city and creating
                  protective walls such as the famous Bab El-Mansour gate. The
                  dynasty continued its reign until today. Muhammad VI is the
                  twenty-third ruler of this succession, ensuring the
                  unification of the Kingdom and the transmission of all
                  religious values.
                </p>
              </div>

              <div className="col-sm-12 col-lg-5">
                <div className="sub-image-container">
                  <img
                    alt=""
                    className="image "
                    src="https://www.barcelo.com/guia-turismo/wp-content/uploads/2022/10/casablanca-quever-pal.jpg"
                  ></img>
                  <h4 className="image-title">Moulay Driss Zerhoun</h4>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default History;
