import React from "react";
import "./chip.css";

function Chip({ text, variant = 1 }) {
  let chipClass = "";

  switch (variant) {
    case 1:
      chipClass = "chip_text";
      break;
    case 2:
      chipClass = "chip_success";
      break;
    case 3:
      chipClass = "chip_info";
      break;
    default:
      chipClass = "chip_text";
      break;
  }

  return <p className={chipClass}>{text}</p>;
}

export default Chip;
