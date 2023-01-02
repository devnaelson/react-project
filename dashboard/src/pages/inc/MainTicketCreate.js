import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MainTicketCreate() {

  let { contactId } = useParams();
  console.log(contactId)

  return (
    <Container fluid>
      <Row>
        <Col xs={12} id='content-ajustment' className="">
          <Form>

            <InputGroup>
              <InputGroup.Text>Descrição</InputGroup.Text>
              <Form.Control as="textarea" aria-label="Desc" />
            </InputGroup>

            <InputGroup>
              <InputGroup.Text>Assunto</InputGroup.Text>
              <Form.Control as="textarea" aria-label="Assunto" />
            </InputGroup>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
