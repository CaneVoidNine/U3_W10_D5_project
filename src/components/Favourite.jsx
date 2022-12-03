import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Favourite() {
  const cities = useSelector((state) => state.cities.content);
  const dispatch = useDispatch();

  return (
    <Container fluid className="bg-light">
      <div className="d-flex justify-content-center pt-3">
        <Link to="/">
          <h3>Back to Home</h3>
        </Link>
      </div>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1 className="mt-3"> Your Favourites list!</h1>
        </Col>
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
            {cities.map((city, i) => (
              <Row key={i} className="my-4 align-items-center">
                <Col xs={1}>
                  <Button
                    variant="danger"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_FAVS",
                        payload: i,
                      });
                    }}
                  >
                    Delete from list
                  </Button>
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <h2>
                        {city.data.name},{city.data?.sys?.country}
                      </h2>
                    </Col>
                  </Row>
                </Col>
              </Row>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
