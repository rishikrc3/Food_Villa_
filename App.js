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
 *  -Restaurant Card
 *  -Image
 *  -Name
 *  -Rating
 *  -Cusines
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

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://i.playboard.app/p/AAUvwnid3BDOuAtsI4uGV5D5H4LGGfPuPOQD-w88CHLP/default.jpg"
      alt="logo"
    />
  </a>
);
const heading2 = <h1>Oreo</h1>;

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return <h4>Body</h4>;
};

const Footer = () => {
  return <h5>Footer</h5>;
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Header />);
root.render(<AppLayout></AppLayout>);
