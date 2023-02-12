import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import SearchCity from "./components/SearchCity";
import WeatherInformation from "./components/WeatherInformation";
//import { useDispatch } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import './index.css';

function App() {
  //const dispatch = useDispatch()

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=dc26ceb8a2ef412b9e1dfd45245915bc&units=metric`
    );
    let cityWeather = await response.json();
    setWeather(cityWeather);
    console.log(cityWeather);
    /*dispatch({
      type: "ADD_WEATHER",
      payload: cityWeather
    })*/
  };
  return (
    <div>
      <Container className="justify-content-center">
        <Row className="justify-content-center mt-5">
          <h1>CHECK THE WEATHER</h1>
        </Row>
        <Row className="justify-content-center mt-5 w-100">
          <Col lg={6}>
            <SearchCity getWeather={getWeather} setCity={setCity} />
            <WeatherInformation weather={weather} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
