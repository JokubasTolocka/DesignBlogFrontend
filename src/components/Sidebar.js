import React from "react";
import { Link, useLocation } from "react-router-dom";
import cls from "classnames";
import styles from "./Sidebar.module.scss";

const isActive = (path, currentPath) => currentPath === path;

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className={styles.root}>
      <Link
        to="/design"
        className={cls(
          styles.link,
          isActive("/design", location.pathname) && styles.active
        )}
      >
        Design
      </Link>
      <Link
        to="/photography"
        className={cls(
          styles.link,
          isActive("/photography", location.pathname) && styles.active
        )}
      >
        Photography
      </Link>
    </div>
  );
};

export default Sidebar;
