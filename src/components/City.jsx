import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const City = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={3}>
      <p>{data.cities.name}</p>
    </Col>
    <Col xs={9}>
      <p>{data.sys.country}</p>
    </Col>
  </Row>
);
export default City;
