import Head from "@/components/Head/Head";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import styles from "./NextAuth.module.scss";
import webGhoulLogo from "../../../../public/images/webGhoul.png";
import nextAuthLogo from "../../../../public/images/next_auth.png";
import figmaImg from "../../../../public/images/figma.png";
import Logos from "@/components/Logos/Logos";
import Provider from "@/components/Provider/Provider";
import { FcGoogle } from "react-icons/fc";
import { BsDiscord } from "react-icons/bs";
import { GitHub, Markunread } from "@mui/icons-material";
import { PrimaryButton } from "@/MUI_components/PrimaryButton";
import { useRouter } from "next/navigation";
const NextAuthBox = () => {
  const theme = useTheme();
  const router = useRouter();
  const handleClick = () => {
    router.push(process.env.NEXT_PUBLIC_NEXT_AUTH_REGISTER_PAGE);
  };
  return (
    <Box className={`grid jcs aic g30 pad20 ${styles.next_auth_box}`}>
      <Head align={"center"}>
        <Typography variant="h4" sx={{ color: theme.palette.nextAuth }}>
          Next Auth Authentication
        </Typography>
      </Head>
      <Logos logos={[webGhoulLogo, nextAuthLogo]} />
      <Box className={`grid jcfs aic g20 ${styles.providers_box}`}>
        <Head line={true} lineColor={theme.palette.nextAuth} align={"left"}>
          <Typography variant="h5" sx={{ color: "#000" }}>
            Providers
          </Typography>
        </Head>
        <Box className={`grid jcfs aic g10 ${styles.providers}`}>
          <Provider logo={<Markunread />} title={"Email & Password"} />
          <Provider logo={<FcGoogle />} title={"Google"} />
          <Provider logo={<GitHub />} title={"Github"} />
          <Provider img={figmaImg} title={"Figma"} />
          <Provider logo={<BsDiscord />} title={"Discord"} />
        </Box>
      </Box>
      <PrimaryButton
        sx={{
          backgroundColor: theme.palette.nextAuth,
          borderColor: theme.palette.nextAuth,
          "&:hover": { color: theme.palette.nextAuth },
        }}
        onClick={handleClick}
      >
        Start Auth
      </PrimaryButton>
    </Box>
  );
};

export default NextAuthBox;
