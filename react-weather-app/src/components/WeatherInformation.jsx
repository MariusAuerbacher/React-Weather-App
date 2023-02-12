import { Card } from "react-bootstrap";
import classes from './Components.css'
import './Components.css'

const WeatherInformation = (props) => {
  if (props.weather?.main?.temp) {
    return (
      <Card className="cards">
        <Card.Body>
          <Card.Title>
            <h2>{props.weather.name}</h2>
          </Card.Title>
          <Card.Text >
            <h4> Temperature: {props.weather.main.temp} degrees °C </h4>
            <h5>Feels like: {props.weather.main.feels_like} degrees °C</h5>
            <h5> {props.weather.weather[0].description}</h5>
            <h5>Country: {props.weather.sys.country}</h5>
            <h5>Humidity: {props.weather.main.humidity} %</h5>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  } else {
    return <></>;
  }
};

export default WeatherInformation;
