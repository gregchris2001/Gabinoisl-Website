
import ShopItem from "./ShopItem";
'Foyer', 'Dining Room', 'Living Room', 'Bedroom'

const ShopList = () => {

    const shops = {
        types : [],
        rooms : [

        ]
    };

    return (
        <>
            {/* <h1>Popular shop</h1>
        
            <div style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '71px', display: 'flex' }}>
                {shops.rooms.map((shop, index) => (
                    <ShopItem 
                        key={index}
                        shop={shop}
                    />
                ))}
            </div> */}
        </> 
    )
}

export default ShopList;