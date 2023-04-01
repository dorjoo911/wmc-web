import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const animation = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(-100%)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0%)",
    },
    config: {
      mass: 1,
      tension: 280,
      friction: 20,
    },
    delay: 500,
  });

  return (
    <animated.div
      style={{
        ...animation,
        display: isOpen ? "block" : "none",
        position: "fixed",
        top: "3%",
        left: "10%",
        width: "80%",
        zIndex: 9999,
      }}
    >
      <div className="card">
        <img
          src="https://lffcsa.org/wp-content/uploads/2018/08/anniversary-20years.jpg"
          className="card-img-top"
          //   alt="Fissure in Sandstone"
        />
        <div className="card-body">
          <h5 className="card-title">The Church 20th Years Anniversary</h5>
          <p className="card-text">
            Join us to celebrate our 20th years anniversary this year in
            September - October 2023.
          </p>
          <a href="#!" className="btn btn-outline-danger" onClick={handleClose}>
            Хаах
          </a>
        </div>
      </div>
    </animated.div>
  );
};

export default Banner;
