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
                    <th style={{ color: '#e53637' }}>Product</th>
                    <th style={{ color: '#e53637' }}>Quantity</th>
                    <th style={{ color: '#e53637' }}>Total</th>
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