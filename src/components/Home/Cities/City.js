import { useParams } from "react-router-dom";
import cities from "./Cities";
import { Container } from "react-bootstrap";
function City() {
  const params = useParams();
  const [chosenCity] = cities.filter((city) => city.id == params.cityId);
  return (
    <Container>
      this is {chosenCity.name}
      <p>{chosenCity.description}</p>
    </Container>
  );
}
export default City;
