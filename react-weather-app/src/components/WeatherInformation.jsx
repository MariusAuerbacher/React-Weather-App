import { Card } from "react-bootstrap";

const WeatherInformation = (props) => {
  if (props.weather?.main?.temp) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <h2>{props.weather.name}</h2>
          </Card.Title>
          <Card.Text>
            <h4> Temperature: {props.weather.main.temp} degrees °C </h4>
            <h5>Feels like: {props.weather.main.feels_like}</h5>
            <h6>Country: {props.weather.sys.country}</h6>
            <p>Humidity: {props.weather.main.humidity} %</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  } else {
    return <></>;
  }
};

export default WeatherInformation;
