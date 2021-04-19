import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PHOTOGRAPHY_IMAGES } from "../queries";
import Loading from "../components/Loading";
import styles from "./Photography.module.scss";
import ImagesGrid from "../components/ImagesGrid";

const Photography = () => {
  const { data, error, loading } = useQuery(GET_PHOTOGRAPHY_IMAGES);

  if (loading) {
    return (
      <div className={styles.root}>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.root}>
        <h5>Service is unavailable at the moment.</h5>
      </div>
    );
  }

  return <ImagesGrid images={data?.photographyImages} />;
};

export default Photography;
