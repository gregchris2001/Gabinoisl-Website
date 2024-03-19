import { Card, Badge } from 'react-bootstrap';

const ShippingDetailsCard = () => {
    // Get current date and time
    const currentDate = new Date();
    
    // Calculate delivery date (current date + 24 hours)
    const deliveryDate = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000));
    const deliveryDateString = `${deliveryDate.getMonth() + 1}/${deliveryDate.getDate()} - ${deliveryDate.getMonth() + 1}/${deliveryDate.getDate() + 1}`;

    return (
        <Card>
            <Card.Body>
                <Card.Title>Shipping Details</Card.Title>
                <Card.Text>
                    <Badge variant="warning" className="mr-2">Fast Delivery</Badge>
                    Dispatch within 24 hours within Lagos
                </Card.Text>
                <Card.Text>
                    <Badge variant="success" className="mr-2">Fast Shipping</Badge>
                    Get it between {deliveryDateString}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ShippingDetailsCard;
