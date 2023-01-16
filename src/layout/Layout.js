import React from "react";

import Header from "./Header";
import Footer from "./Footer";

// import backgroundHome from "../assets/img/Path 3015.png";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
