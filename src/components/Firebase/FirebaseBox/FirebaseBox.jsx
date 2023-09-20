import Head from "@/components/Head/Head";
import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./FirebaseBox.module.scss";
import webGhoulLogo from "../../../../public/images/webGhoul.png";
import firebaseLogo from "../../../../public/images/firebase.png";
import Logos from "@/components/Logos/Logos";
import Provider from "@/components/Provider/Provider";
import { FcGoogle } from "react-icons/fc";
import { GitHub, Markunread } from "@mui/icons-material";
import { PrimaryButton } from "@/MUI_components/PrimaryButton";
import { useRouter } from "next/navigation";
const FirebaseBox = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(process.env.NEXT_PUBLIC_FIREBASE_REGISTER_PAGE);
  };
  return (
    <Box className={`grid jcs aic g30 pad20 ${styles.firebase_box}`}>
      <Head align={"center"}>
        <Typography variant="h4" sx={{ color: "#FFCB2B" }}>
          Firebase Authentication
        </Typography>
      </Head>
      <Logos logos={[webGhoulLogo, firebaseLogo]} />
      <Box className={`grid jcfs aic g20 ${styles.providers_box}`}>
        <Head line={true} lineColor={"#FFCB2B"} align={"left"}>
          <Typography variant="h5" sx={{ color: "#000" }}>
            Providers
          </Typography>
        </Head>
        <Box className={`grid jcfs aic g10 ${styles.providers}`}>
          <Provider logo={<Markunread />} title={"Email & Password"} />
          <Provider logo={<FcGoogle />} title={"Google"} />
          <Provider logo={<GitHub />} title={"Github"} />
        </Box>
      </Box>
      <PrimaryButton
        onClick={handleNavigate}
        sx={{
          backgroundColor: "#FFCB2B",
          borderColor: "#FFCB2B",
          "&:hover": { color: "#FFCB2B" },
        }}
      >
        Start Auth
      </PrimaryButton>
    </Box>
  );
};

export default FirebaseBox;
