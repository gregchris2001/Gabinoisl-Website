import { useContext } from 'react';
import ProductContext from '../../../store/product-context';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuantityButtonGroup from '../Product/QuantityButtonGroup';

const CartItem = ({ product }) => {
    const { slug, images, title, price, quantity, total_quantity } = product;
    const { changeCartProductQuantity, removeCartData } = useContext(ProductContext);

    const handleQuantityChange = (newQuantity) => {
        changeCartProductQuantity(slug, newQuantity);
    };

    const removeCartItemHandler = () => {
        removeCartData(slug);
    }

    return (
        <tr>
            <td>
                <Row>
                    <Col>
                        <div>
                            <Image height={100} width={100} src={images[0].asset.url} alt="" />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h6>{title}</h6>
                            <h6 style={{ color: '#e53637' }}>₦ {price}</h6>
                        </div>
                    </Col>
                </Row>
            </td>
            <td>
                <QuantityButtonGroup
                    totalQuantity={total_quantity}
                    quantity={quantity}
                    onQuantityChange={handleQuantityChange}
                    removeCartDataHandler={removeCartItemHandler}
                />
            </td>
            <td><p>₦ {quantity * price}</p></td>
            <td>
                <Button variant='danger' onClick={removeCartItemHandler}>
                    <FontAwesomeIcon icon="fa fa-close" />
                </Button>
            </td>
        </tr>
    )
}

export default CartItem;
