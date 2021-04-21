import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Modal from "./Modal";
import Footer from "./Footer";
import styles from "./ImagesGrid.module.scss";

const breakpointColumns = {
  default: 5,
  1100: 4,
  850: 3,
  550: 2,
};

const ImagesGrid = ({ images }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState({});

  return (
    <div className={styles.root}>
      <Masonry
        breakpointCols={breakpointColumns}
        className={styles.masonryGrid}
        columnClassName={styles.masonryGridColumn}
      >
        {images.map((image) => (
          <img
            key={image.id}
            src={image.compressedUrl}
            alt={image.id}
            onClick={() => {
              setIsOpen(true);
              setImage(image);
            }}
          />
        ))}
      </Masonry>
      <Footer />
      <Modal
        onClose={() => setIsOpen(false)}
        isOpen={modalIsOpen}
        image={image}
      />
    </div>
  );
};

export default ImagesGrid;
