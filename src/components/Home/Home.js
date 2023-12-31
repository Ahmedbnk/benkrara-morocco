import Football from "../Football/Football";
import Footer from "../Footer/Footer";
import MoroccanMap from "../MoroccanMap/MoroccanMap";
import Beach from "../beaches/Beaches";
import Carouse from "./Carouse";
import Wonders from "./Moroccan Wonders/Wonders";
import TravelAdivice from "./TravelAdvice";

function Home() {
  return (
    <>
      <Carouse />
      <TravelAdivice />
      <Wonders />
      <Beach />
      <Football />
      <MoroccanMap />
    </>
  );
}

export default Home;
