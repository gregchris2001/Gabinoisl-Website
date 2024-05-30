import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
            <Row>
                <Col>
                    <h2 style={{ fontSize: 40, fontFamily: 'Podkova', fontWeight: 600, wordWrap: 'break-word' }}>ABOUT US</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p style={{ fontSize: "1.3rem", fontFamily: 'Podkova', fontWeight: 500, wordWrap: 'break-word' }}>
                        Established in 2021, Gabino Lights originated in the vibrant city of Lagos, Nigeria. Nestled in the heart of Surulere, at 4 Badaru Street, off Adegoke, Olufemi, Gabino Lights has been illuminating homes and spaces with a touch of elegance and functionality.                    
                    </p>

                    <p style={{ fontSize: "1.3rem", fontFamily: 'Podkova', fontWeight: 500, wordWrap: 'break-word' }}>
                        At Gabino Lights, we specialize in offering fashionable and unique pendant lights that not only brighten up spaces but also add a touch of sophistication to any environment. Our mission is to provide high-quality lighting solutions that effortlessly blend with contemporary design trends, while also prioritizing energy efficiency and sustainability.
                    </p>

                    <p style={{ fontSize: "1.3rem", fontFamily: 'Podkova', fontWeight: 500, wordWrap: 'break-word' }}>
                        What sets us apart is our commitment to offering value without compromising on quality. We believe that creating a beautifully lit space shouldn't have to "break the bank," and that's why we strive to offer affordable yet luxurious lighting options for our customers.
                    </p>

                    <p style={{ fontSize: "1.3rem", fontFamily: 'Podkova', fontWeight: 500, wordWrap: 'break-word' }}>
                        Whether you're looking to enhance the ambiance of your home or seeking to elevate the aesthetic appeal of your commercial space, Gabino Lights is here to help you find the perfect lighting solution tailored to your unique style and preferences.
                    </p>

                    <p style={{ fontSize: "1.3rem", fontFamily: 'Podkova', fontWeight: 500, wordWrap: 'break-word' }}>
                        Contact us today at <a href="mailto:gabinoisl01@gmail.com" >gabinoisl01@gmail.com</a> or give us a call at <a href="tel:+2349160000789">+2349160000789</a> to discover how we can illuminate your world with our exquisite range of chandelier lights and professional installation services.
                    </p>

                    <p style={{ fontSize: "1.3rem", fontFamily: 'Podkova', fontWeight: 500, wordWrap: 'break-word' }}>
                        Illuminate your space with Gabino Lights – where elegance meets affordability
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;