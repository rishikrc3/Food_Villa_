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
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

//never create a component inside a component, you can cascade them but never create them
//never wirte useState inside a if condition
//useState should never be called inside the functinoal component

const AppLayout = () => {
  return (
    <>
      <Header></Header>
      <Body />
      <Footer></Footer>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout></AppLayout>);
