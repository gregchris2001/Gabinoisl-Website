import Header from './Header'
import Header from './Header'


const RootLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout;