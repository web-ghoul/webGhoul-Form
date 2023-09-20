import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./Logos.module.scss";

const Logos = ({ logos }) => {
  return (
    <Box className={`flex jcc aic ${styles.logos}`}>
      {logos.map((logo, i) => {
        return <Image key={i} src={logo} alt="logo" />;
      })}
    </Box>
  );
};

export default Logos;
