import { render } from "react-dom";
import React, { useState } from "react";
import { useSpring, animated, useTrail } from "react-spring";
import "./css/FrontPage.css";

const config = { mass: 5, tension: 2000, friction: 200 };
const items = ["Sebastian", "Gwozdz"];

export default function NameCard() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return trail.map(({ x, height, ...rest }, index) => (
    <animated.div
      key={items[index]}
      className="trails-text"
      style={{
        ...rest,
        transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
      }}
    >
      <animated.div style={{ height }}>{items[index]}</animated.div>
    </animated.div>
  ));
}
