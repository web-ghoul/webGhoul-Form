import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Provider.module.scss";
import Image from "next/image";

const Provider = ({ logo,img, title }) => {
  return (
    <Box
      className={`flex jcfs aic ${title === "Discord" && styles.discord}  ${title === "Github" && styles.github} g5 ${
        styles.provider
      }`}
    >
      {logo}
      {img && (<Image src={img} alt="provider logo" />)}
      <Typography variant="h6">{title}</Typography>
    </Box>
  );
};

export default Provider;
