import { Row, Col, Form } from "react-bootstrap";
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { getDataAction } from "../../redux/actions";
import "./styles.css"

const Search = () => {

    const getData = useDispatch()

    const [input, setInput] = useState('')

    useEffect(() => {
        getData(getDataAction(input))
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[input])

  return (
    <Row className='justify-content-center customBG py-4'>
      <Col md={5}>
        <Form >
          <Form.Group  controlId="formBasicEmail">
            <Form.Control
              className="customInput"
              type="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search city....."
            />
          </Form.Group>
        </Form>
      </Col>
      <Col md={5}></Col>
    </Row>
  );
};

export default Search;
