import { Button, Typography } from "@mui/material";
import React from "react";
import styles from "./AuthButton.module.scss";
import Image from "next/image";

const AuthButton = ({ icon, img, title, color,clickable }) => {
  return (
    <Button
      className={`flex jcfs aic g10 pad10 ${styles.auth_button}`}
      sx={{ "& svg": { color: color } }}
      onClick={clickable}
    >
      {icon && icon}
      {img && <Image src={img} alt="auth Logo" />}
      <Typography sx={{ color: color }} variant="h6">
        {title}
      </Typography>
    </Button>
  );
};

export default AuthButton;
