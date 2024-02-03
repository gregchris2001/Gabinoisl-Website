import GabinoislHome from '../../images/gabinoisl-home.png';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Caurosel = () => {

    const context = [
        { head: 'FAST SHIPPING', icon: 'fa-solid fa-truck-fast', text: 'Fast worldwide shipping' },
        { head: 'ORDER ONLINE/INSTORE', icon: 'fa-solid fa-cart-shopping', text: 'Place orders instore & online' },
        { head: 'SHOP & SAVE', icon: 'fa-solid fa-money-bill', text: 'Get great discounts when you order instore' },
        { head: 'CUSTOMIZATION SERVICE', icon: 'fa-solid fa-ruler-horizontal', text: 'A unique product created just for you' },
    ];

    return (
        <Card>
        <Card.Img variant="top" src={GabinoislHome} alt="GabinoIsl Home"/>

        <Card.Body>
          {context.map((ctx, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={ctx.icon} />
              <div className='ctx-txt'>
                <h3>{ctx.head}</h3>
                <p>{ctx.text}</p>
              </div>
            </div>
          ))}
        </Card.Body>
      </Card>
    )
}

export default Caurosel;