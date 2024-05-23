import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import ProductContext from '../../../store/product-context';
import CartItem from './CartItem';

const CartTable = () => {

    const { cartData } = useContext(ProductContext);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {cartData?.map((product, index) => (
                    <CartItem key={index} product={product} />
                ))}
            </tbody>
        </Table>
    )
}

export default CartTable;