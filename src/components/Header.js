import React from "react";
import { Link, useLocation } from "react-router-dom";
import cls from "classnames";
import styles from "./Header.module.scss";

const isActive = (path, currentPath) => currentPath === path;

const Header = () => {
  const location = useLocation();
  return (
    <div className={styles.root}>
      <div className={styles.links}>
        <Link
          to="/"
          className={cls(
            styles.link,
            isActive("/", location.pathname) && styles.active
          )}
        >
          Photography
        </Link>
        <Link
          to="/design"
          className={cls(
            styles.link,
            isActive("/design", location.pathname) && styles.active
          )}
        >
          Design
        </Link>
      </div>
    </div>
  );
};

export default Header;
