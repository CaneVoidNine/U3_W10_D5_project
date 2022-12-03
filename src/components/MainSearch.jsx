import { Col, Row, Container, Form } from "react-bootstrap";
import { useState } from "react";
import City from "./City";
import { Link } from "react-router-dom";
export default function MainSearch() {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [hide, setHide] = useState(true);

  const baseEndpoint = "https://api.openweathermap.org/data/2.5/weather?q=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        baseEndpoint + query + ",&APPID=4f6026bc1315d42e2c0879ac5fb74945"
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCities(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-light">
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center py-1 mt-5">
            <h1>Search for weather in any city!</h1>
          </Col>
          <Col className="d-flex justify-content-center">
            <Link to="/favourites">
              <h3>Favourites</h3>
            </Link>
          </Col>
          <Col md={12} className="d-flex justify-content-center my-2">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="type city name and press Enter"
                style={{ width: "50rem" }}
              />
            </Form>
          </Col>
        </Row>
      </Container>
      <Row className="pt-4">
        <Col md={2}></Col>
        <Col md={2}>
          <h3>Info</h3>
        </Col>
        <Col md={2}>
          <h3>Temperature(K)</h3>
        </Col>
        <Col md={2}>
          <h3>Humidity(%)</h3>
        </Col>
        <Col md={2}>
          <h3>Pressure(Pa)</h3>
        </Col>
        <Col md={2}>
          <h3>Wind speed(Mph)</h3>
        </Col>
      </Row>
      <City data={cities} />;
    </div>
  );
}
