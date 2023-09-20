import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Head from "../Head/Head";
import logo from "../../../public/images/webGhoul.png";
import styles from "./Logo.module.scss";
import { useRouter } from "next/navigation";

const Logo = ({ title }) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(process.env.NEXT_PUBLIC_HOME_PAGE)}
      sx={{ backgroundColor: "transparent" }}
      className={`flex jcc aic g10 ${styles.logo_box}`}
    >
      <Image src={logo} alt="logo" />
      <Head align={"left"}>
        <Typography variant="h6">{title}</Typography>
      </Head>
    </Button>
  );
};

export default Logo;
