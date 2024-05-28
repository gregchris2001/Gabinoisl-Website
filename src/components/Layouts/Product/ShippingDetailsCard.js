import { Card, Badge } from 'react-bootstrap';

const ShippingDetailsCard = () => {
    // Get current date and time
    const currentDate = new Date();
    
    // Calculate delivery date (current date + 24 hours)
    const deliveryDate = new Date(currentDate.getTime() + (48 * 60 * 60 * 1000));
    const deliveryDateString = `${deliveryDate.getMonth() + 1}/${deliveryDate.getDate()} - ${deliveryDate.getMonth() + 1}/${deliveryDate.getDate() + 1}`;

    return (
        <Card>
            <Card.Body>
                <Card.Title>Shipping Details</Card.Title>
                <Card.Text 
                    style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                    }}
                >
                    <Badge bg="warning" style={{ padding: "0.5rem" }}>Fast Delivery</Badge>
                    Delivery takes 24-48 hours within Lagos and 3-5 business working days outside Lagos.
                </Card.Text>
                <Card.Text 
                    style={{
                        display: "flex",
                        gap: "1rem",
                    }}
                >
                    <Badge bg="success" style={{ padding: "0.5rem" }}>Fast Shipping</Badge>
                    Get it between {deliveryDateString}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ShippingDetailsCard;
