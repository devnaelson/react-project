import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (
        <Container fluid className="Footer">
            <Row>
                <Col xs={12} md={12}>
                    <div className=''>2022 - Todos os direitos reservados a Gao Tech</div>
                </Col>
            </Row>
        </Container>
    );
}