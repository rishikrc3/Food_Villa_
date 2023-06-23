/**
 *
 * Parcel is automatically doing all this for us, as parcel is a beast.
 * This is known as hot module realod or HMR
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Image Optimizaiton
 * Caching while development
 * Compression
 * Compatible with older vesrsion of the browser
 * Manages the port
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree Shaking-removing unwanted code
 *
 * Transitive Dependancies
 */

/**
 * Header
 *  -Logo
 *  -Nav Items(Right Side)
 *  -Cart
 *
 * Body
 *  -Search Bar
 *  -Restrauntlist
 *  -Restaurant Card(many cards)
 *    -Image
 *    -Name
 *    -Rating
 *    -Cusines
 *
 *
 *
 * Footer
 *  -Links
 *  -Copyright
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
const AppLayout = () => {
  return (
    <>
      <Header></Header>
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Header />);
root.render(<AppLayout></AppLayout>);
