import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import MyJumbo from "./MyJumbo";
import { useParams } from "react-router-dom";
import MyFooter from "./MyFooter";

const Details = () => {
  const [city, setCity] = useState([]);
  const params = useParams();

  const baseEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";

  useEffect(() => {
    getCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCity = async () => {
    try {
      const response = await fetch(
        baseEndpoint +
          params.cityName +
          ",&APPID=4f6026bc1315d42e2c0879ac5fb74945"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCity(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <MyNavbar />
      <MyJumbo />
      <div
        style={{ color: "white" }}
        className="bg-primary d-flex justify-content-center m-5"
      >
        <h1>
          <img
            src={`http://openweathermap.org/img/wn/${city?.weather?.[0]?.icon}.png`}
            alt="..."
          />
          <span> </span> {city?.name}, {city?.sys?.country}
        </h1>
      </div>
      <Container fluid>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Latitude</th>
              <th>Longtitude</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coordinates</td>
              <td>{city?.coord?.lat} K</td>
              <td>{city?.coord?.lon} K</td>
            </tr>
          </tbody>
          <hr />
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Temp</th>
              <th>Max-Temp</th>
              <th>Min-Temp</th>
              <th>Feels like</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Temperature</td>
              <td>{city?.main?.temp} K</td>
              <td>{city?.main?.temp_max} K</td>
              <td>{city?.main?.temp_min} K</td>
              <td>{city?.main?.temp_min} K</td>
            </tr>
          </tbody>
          <hr />
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Now</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Humidity</td>
              <td>{city?.main?.humidity} %</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>{city?.main?.pressure} Pa</td>
            </tr>
          </tbody>
          <hr />
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Speed</th>
              <th>Degress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wind</td>
              <td>{city?.wind?.speed} Mph</td>
              <td>{city?.wind?.deg}</td>
            </tr>
          </tbody>
          <hr />
        </Table>
      </Container>
      <MyFooter />
    </div>
  );
};

export default Details;
