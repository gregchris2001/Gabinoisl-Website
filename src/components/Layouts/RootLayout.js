import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Hea` der />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
