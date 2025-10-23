import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main className="m-4">
      <NavBar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  );
};

export default App;
