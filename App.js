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
 */

import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { id: "title" }, "Hi for parcel");
const heading2 = React.createElement("h2", { id: "title" }, "Fok");
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(container);
