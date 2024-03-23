import { Container, Row, Col } from 'react-bootstrap';

const DescriptionComponent = ({ desciption }) => {
    return (
        <Container style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 6, display: 'inline-flex' }}>
            <Row>
                <Col>
                    <h3 style={{ color: 'black', fontSize: 20, fontFamily: 'Podkova', fontWeight: 800, wordWrap: 'break-word' }}>DESCRIPTION</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{ width: 772, color: 'black', fontSize: 15, fontFamily: 'Inter', fontWeight: 500, wordWrap: 'break-word' }}>{desciption}</div>
                </Col>
            </Row>
        </Container>
    );
};

export default DescriptionComponent;
