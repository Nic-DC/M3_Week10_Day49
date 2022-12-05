import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";

import { useSelector, useDispatch } from "react-redux";
import { getJobsAction } from "../redux/actions";

const MainSearch = () => {
  const jobsList = useSelector((state) => state.jobsResult.searchedJobs);

  const dispatch = useDispatch();
  console.log({ dispatch });

  const [query, setQuery] = useState("");

  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsList.map((jobData) => (
            // <div
            // key={jobData._id}
            // onClick={() => {
            //   dispatch({
            //     type: `ADD_TO_FAVORITES`,
            //     payload: jobData,
            //   });
            // }}
            // >
            <Job key={jobData._id} data={jobData} />
            // </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
