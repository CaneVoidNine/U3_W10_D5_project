import { Row, Col, Button } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const City = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row
      className=" mt-5 pt-3 d-flex justify-content-center"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col className="ml-3">
        <Button
          variant="success"
          className="mb-3"
          onClick={() =>
            dispatch({
              type: "ADD_CITY",
              payload: { data },
            })
          }
        >
          Add to Favourites!
        </Button>
      </Col>
      <Col md={2}>
        <h4>
          <Link to={"/details/" + data.name}> {data.name} </Link>
          <span> </span>
          {data?.sys?.country}
        </h4>
      </Col>
      <Col md={2}>
        <h4>{data?.main?.temp}</h4>
      </Col>
      <Col md={2}>
        <h4>{data?.main?.humidity}</h4>
      </Col>
      <Col md={2}>
        <h4>{data?.main?.pressure}</h4>
      </Col>
      <Col md={2}>
        <h4>{data?.wind?.speed}</h4>
      </Col>
    </Row>
  );
};
export default City;
