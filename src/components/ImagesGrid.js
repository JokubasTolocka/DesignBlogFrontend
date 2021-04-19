import React from "react";
import Masonry from "react-masonry-css";
import styles from "./ImagesGrid.module.scss";

const breakpointColumns = {
  default: 5,
  1100: 4,
  850: 3,
  550: 2,
};

const ImagesGrid = ({ images }) => {
  return (
    <div className={styles.root}>
      <Masonry
        breakpointCols={breakpointColumns}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {images.map((image) => (
          <img key={image.id} src={image.normalUrl} alt={image.id} />
        ))}
      </Masonry>
      <div className={styles.shadowDiv}>
        <div className={styles.contacts}>
          <h4 className={styles.contactMe}>Contact Me</h4>
          <a href="mailto:jokubas.tj@gmail.com" className={styles.email}>
            jokubas.tj@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImagesGrid;
