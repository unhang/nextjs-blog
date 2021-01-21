import React from "react";
import cn from "classnames";

import styles from "./alert.module.css";

export default function Alert({ children, type }) {
  console.log(
    "classnames",
    cn({
      [styles.success]: type === "success",
      [styles.error]: type === "error",
    })
  );
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
