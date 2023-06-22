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
 * Transitive Dependancies
 */
import { createElement } from "react";
import ReactDOM from "react-dom/client";

const heading2 = <h1>Oreo</h1>;

const HeaderComponent = () => <h1>Hue </h1>;

const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(<HeaderComponent />);
