import React, { useState, useEffect } from "react";

export default function UpdatingText(props) {
  const [prev, setPrev] = useState("");

  console.log("test");

  useEffect(() => {
    if (!prev) {
      setPrev(props.value);
      let t = document.createTextNode(props.value);

      let pr = document.getElementById("price");

      pr.appendChild(t);
    }

    animate();
  }, [props.value]);

  function animate() {
    console.log("test");
    let v = prev;

    let diff = Math.abs(props.value - v);
    let increment = diff / 10;

    let timer = setInterval(() => {
      let pr = document.getElementById("price");
      if (Math.abs(diff - increment) < 0.05) {
        clearInterval(timer);
        pr.firstChild.textContent = props.value;
        setPrev(props.value);
      } else {
        pr.firstChild.textContent = (
          Number(pr.firstChild.textContent) +
          (v - props.value < -0.05 ? 1 : -1) * increment
        ).toFixed(2);
        diff -= increment;
      }
    }, 100);
  }

  return null;
}
