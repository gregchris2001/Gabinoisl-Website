import { useContext } from 'react';
import ProductContext from '../../../store/product-context';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuantityButtonGroup from '../Product/QuantityButtonGroup';

const CartItem = ({ product }) => {
    const { id, images, title, price, quantity, totalQuantity } = product;
    const { changeCartProductQuantity, removeCartData } = useContext(ProductContext);


    const handleQuantityChange = (newQuantity) => {
        changeCartProductQuantity(id, newQuantity);

        if (newQuantity === 0) {
            removeCartData(id);
        }
    };

    const removeCartItemHandler = () => {
        removeCartData(id);
    }

    return (
        <tr>
            <td>
                <Row>
                    <Col>
                        <div>
                            <Image src={images[0].asset.url} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h6 style={{ color: '#ffffff' }}>{title}</h6>
                            <h5 style={{ color: '#e53637' }}>{price}</h5>
                        </div>
                    </Col>
                </Row>
            </td>
            <td>
                <QuantityButtonGroup
                    totalQuantity={totalQuantity}
                    quantity={quantity}
                    onQuantityChange={handleQuantityChange}
                />
            </td>
            <td>{totalQuantity * price}</td>
            <td>
                <Button onClick={removeCartItemHandler}>
                    <FontAwesomeIcon icon="fa fa-close" />
                </Button>
            </td>
        </tr>
    )
}

export default CartItem;
