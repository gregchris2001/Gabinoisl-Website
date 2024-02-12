import RoomImg1 from "../../../images/room-img1.png";
import RoomImg2 from "../../../images/room-img2.png";
import RoomImg3 from "../../../images/room-img3.png";
import RoomImg4 from "../../../images/room-img4.png";
import TypeImg1 from "../../../images/type-img1.png";
import TypeImg2 from "../../../images/type-img2.png";
import TypeImg3 from "../../../images/type-img3.png";
import TypeImg4 from "../../../images/type-img4.png";
import TypeImg5 from "../../../images/type-img5.png";
import ShopItem from "./ShopItem";

const ShopList = () => {
  const shops = {
    types: [
      { text: "Chandelier", img: TypeImg1 },
      { text: "Ceiling Fan", img: TypeImg2 },
      { text: "Pendant Lighting", img: TypeImg3 },
      { text: "Lamp", img: TypeImg4 },
      { text: "Ceiling Light", img: TypeImg5 },
    ],
    rooms: [
      { text: "Foyer", img: RoomImg1 },
      { text: "Dining Room", img: RoomImg2 },
      { text: "Living Room", img: RoomImg3 },
      { text: "Bedroom", img: RoomImg4 },
    ],
  };

  return (
    <>
      <div
        className="shop"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <div
          className="rooms"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <h1>Shop By Rooms</h1>

          <div
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "71px",
              display: "flex",
            }}
          >
            {shops.rooms.map((shop, index) => (
              <ShopItem key={index} shop={shop} />
            ))}
          </div>
        </div>

        <div
          className="types"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <h1>Shop By Types</h1>

          <div
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "71px",
              display: "flex",
            }}
          >
            {shops.types.map((shop, index) => (
              <ShopItem key={index} shop={shop} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopList;
