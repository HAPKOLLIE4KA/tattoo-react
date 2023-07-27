import React, { FC, useState, useEffect } from "react";
import { useWidth } from "../../hooks/useWidth";
import styles from "./Footer.module.scss";
import LeftFooter from "./leftFooter/LeftFooter";
import RightFooter from "./RightFooter/RightFooter";

const Footer: FC = () => {
  const width = useWidth();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <LeftFooter />
        {width <= 1024 ? (
          <div className="horizontal-divider"></div>
        ) : (
          <div className="vertical-divider"></div>
        )}
        <RightFooter />
      </div>
    </footer>
  );
};

export default Footer;
