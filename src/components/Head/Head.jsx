import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Head.module.scss";
import Image from "next/image";
import titleShape from "../../../public/images/head_shape.png";

const Head = ({ line, lineColor, children, align }) => {
  return (
    <Box
      className={`flex aic ${
        align === "center" ? "jcc" : align === "left" ? "jcfs" : "jcfe"
      } ${styles.head}`}
    >
      {children}
      {line && (
        <Box
          sx={{ backgroundColor: lineColor }}
          className={`${styles.line}`}
        ></Box>
      )}
    </Box>
  );
};

export default Head;
