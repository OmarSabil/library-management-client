
import Nav from "./compo/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./compo/Footer";

function Root() {

  return (
    <>
    {/* Header */}
      <Nav />

      {/* Center */}
      <Outlet/>

    {/* Footer */}
    <Footer/>
    </>
  );
}

export default Root;
