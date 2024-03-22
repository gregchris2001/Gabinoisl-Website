import  Caurosel  from '../Layouts/Home/Caurosel'
import  HomeProduct  from '../Layouts/Home/ProductList'
import  ShopList  from '../Layouts/Home/ShopList'
import  Testimonial  from '../Layouts/Home/Testimonial'



const Home = () => {
    return (
        <>
            <Caurosel />
            <HomeProduct />
            <ShopList />
            <Testimonial />
        </>
    )
}

export default Home;