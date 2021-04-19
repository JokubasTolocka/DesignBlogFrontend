import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => (
  <div className={styles.loadingSpinnerBall}>
    <div className={styles.loadingInside}>
      <div></div>
    </div>
  </div>
);

export default Loading;
