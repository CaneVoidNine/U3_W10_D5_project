import { Col, Row, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import City from "./City";

export default function MainSearch() {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);

  const baseEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=London&APPID=4f6026bc1315d42e2c0879ac5fb74945`;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  const handleSubmit = async () => {
    try {
      const response = await fetch(baseEndpoint);
      if (response.ok) {
        const { data } = await response.json();
        setCities(data);
        console.log(cities);
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
          <Col md={12} className="d-flex justify-content-center py-1">
            <h1>Search for weather in any city!</h1>
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
          <Col xs={10} className="mx-auto mb-5"></Col>
        </Row>
      </Container>
    </div>
  );
}
