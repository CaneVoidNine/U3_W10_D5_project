import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Favs() {
  const jobs = useSelector((state) => state.jobs.content);
  const dispatch = useDispatch();

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1 className="mt-3"> Your Favourites list!</h1>
        </Col>
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
            {jobs.map((job, i) => (
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
                <Col style={{ border: "solid black" }}>
                  <h5>{job.data.title}</h5>
                  <Row>
                    <Col> Job Category: {job.data.category}</Col>
                    <Col>
                      <Link
                        style={{ color: "red", pointer: "cursor" }}
                        to={`/${job.data.company_name}`}
                      >
                        Company name: {`job.data.company_name`}
                      </Link>
                    </Col>
                    <Col>
                      <a
                        style={{ color: "red", pointer: "cursor" }}
                        href={job.data.url}
                      >
                        Link
                      </a>
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
