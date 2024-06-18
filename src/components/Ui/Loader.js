import { Spinner } from 'react-bootstrap';
import Gabinoisl from '../../images/gabinoisl-logo.png'

const Loader = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <img src={Gabinoisl} alt="Logo" className="loading-logo" />
        <Spinner animation="border" variant="primary" className="loading-spinner" />
      </div>
    </div>
  );
};

export default Loader;
