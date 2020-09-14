import React, { useState, useCallback, useRef, useEffect } from "react";
import { animated, useTransition } from "react-spring";
import "./css/FrontPage.css";

export default function NameCard() {
  const ref = useRef([]);
  const [items, set] = useState([]);

  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#8fa5b6",
    },
    enter: [{ opacity: 1, height: 80, innerHeight: 80 }, { color: "#28d79f" }],
    leave: [
      { color: "#c23369" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  useEffect(() => {
    reset();
  }, []);

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(set(["Sebastian", "Gwozdz"]));
    ref.current.push(
      setTimeout(
        () => set(["Sebastian", "Student", "Developer", "Gwozdz"]),
        3000
      )
    );

    ref.current.push(
      setTimeout(() => set(["Sebastian", "Student", "Gwozdz"]), 5500)
    );
    ref.current.push(setTimeout(() => set(["Sebastian", "Gwozdz"]), 5500));
  }, []);

  return (
    <div style={{ height: "40vh" }}>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div
          className="transitions-item"
          key={key}
          style={rest}
          onClick={reset}
        >
          <animated.div style={{ overflow: "hidden", height: innerHeight }}>
            {item}
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}
