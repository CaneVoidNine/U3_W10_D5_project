import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const City = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link>{data.city.name}</Link>
    </Col>
    <Col xs={9}>
      <a href={data.city.country} target="_blank" rel="noreferrer">
        {data.city.temperature.value}
      </a>
    </Col>
  </Row>
);

export default City;
