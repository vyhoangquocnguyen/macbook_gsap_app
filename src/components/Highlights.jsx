import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    gsap.to([".left-column ", ".right-column "], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top top",
      },
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.5,
      ease: "power1.out",
    });
  });

  return (
    <section id="highlights">
      <h2>There's never been a better upgrade.</h2>
      <h3>Here's what you get with the new MacBook Pro</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="MacBook Pro" />
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div>
            <img src="/sun.png" alt="Sun" />
            <p>
              A Stunniing
              <br />
              Liquid Retina XDR <br />
              display
            </p>
          </div>
        </div>

        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>
              Build for <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Battery" />
            <p>
              Up to
              <span className="green-gradient"> 14 more hours</span>" of battery
              life.{" "}
              <span className="text-dark-100"> (Up to 14 hours total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
