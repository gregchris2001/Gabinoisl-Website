import { useLocation, useParams, useNavigate } from "react-router-dom";
import ProductContext from "../../store/product-context";


const Shop = () => {
    const [shopResults, setShopResults] = useState([]);
    const location = useLocation();
    const { value } = location.state

    const { category } = useParams();

    const { productData } = useContext(ProductContext);

    return (
        <>

        </>
    )
}

export default Shop;