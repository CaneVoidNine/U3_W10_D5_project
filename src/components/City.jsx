import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const City = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row
      className=" mt-5 p-5 d-flex justify-content-center"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Button
        variant="success"
        className="my-2"
        onClick={() =>
          dispatch({
            type: "ADD_CITY",
            payload: { data },
          })
        }
      >
        Add to Favourites!
      </Button>

      <Col md={2}>
        <h3>Info:</h3>
        <h4>
          {data.name}
          <span> </span>
          {data?.sys?.country}
        </h4>
      </Col>
      <Col md={2}>
        <h3>Temperature (K): </h3>
        <h4>{data?.main?.temp}</h4>
      </Col>
      <Col md={2}>
        <h3>Humidity (%):</h3>
        <h4>{data?.main?.humidity}</h4>
      </Col>
      <Col md={2}>
        <h3>Pressure(Pa):</h3>
        <h4>{data?.main?.pressure}</h4>
      </Col>
      <Col md={2}>
        <h3>Wind speed(Mph):</h3>
        <h4>{data?.wind?.speed}</h4>
      </Col>
    </Row>
  );
};
export default City;
