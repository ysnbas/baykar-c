import React from "react";
import styles from "./style.module.css";

export default function Button({ text, color, size }) {
  return (
    <button className={`${color} ${styles.button} ${size && size}`}>
      {text}
    </button>
  );
}
