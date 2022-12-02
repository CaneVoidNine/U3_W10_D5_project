/* import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import City from "./City";
import { useParams } from "react-router-dom";

const CitySearchResult = () => {
  const [cities, setCities] = useState([]);
  const params = useParams();

  const baseEndpoint = "";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CitySearchResult;
*/
