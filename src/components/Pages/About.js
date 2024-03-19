import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
            <Row>
                <Col>
                    <h2 style={{ width: 186, height: 43, color: 'black', fontSize: 40, fontFamily: 'Podkova', fontWeight: 600, wordWrap: 'break-word' }}>ABOUT US</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{ width: 1412, color: 'black', fontSize: 40, fontFamily: 'Podkova', fontWeight: 500, wordWrap: 'break-word' }}>
                        Founded in the early 2010s, Vintage Lighting Ltd, and Chandelierias have created a vintage lighting, lamp, fixture, and LED from our specialty manufacturing facilities. Our company operates its own vintage lighting manufacturing factories in the USA, Mexico, China, and Vietnam. Chandelierias has become a leading eCommerce website for vintage chandeliers and lighting decor with extraordinary handmade designs from skilled craftsmen. Chandelierias has evolved into a specialty manufacturer capable of providing customers with unique chandeliers, chandelier LEDs, chandelier ceiling lights, and chandelier lighting fixtures. We have hundreds of types of chandelier lighting styles to choose from, with talented chandelier lighting designers and craftsmen, keeping our Chandelierias eCommerce website on the front of today's trends. Our goal is to offer a complete selection of quality Chandelierias fixtures at the lowest prices, and with the best online shopping experience for our customers. From vintage chandelier lighting to handcrafted chandelier fixtures, we have a wide range of styles for you to discover your very own unique chandelier right here! Also, our website includes detailed merchandise information, full-color photographs with zoom capabilities, and a close product recommendation service so that you can shop easily for the comfort of your home. Chandelierias is proud to be part of the Vintage Lighting Ltd group and what you see on our website is just a small portion of the many products we manufacture.<br />U.S. Office & Warehouse<br />Chandelierias Vintage Lighting Ltd 1160 W Rincon St., Building B Corona, CA 92878 Phone: 1-213-222-6148 Email: lights@chandelierias.com
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About;