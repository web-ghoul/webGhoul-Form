import Head from "@/components/Head/Head";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import styles from "./SupabaseBox.module.scss";
import webGhoulLogo from "../../../../public/images/webGhoul.png";
import supabaseLogo from "../../../../public/images/supabase.png";
import figmaImg from "../../../../public/images/figma.png";
import Logos from "@/components/Logos/Logos";
import Provider from "@/components/Provider/Provider";
import { FcGoogle } from "react-icons/fc";
import { BsDiscord } from "react-icons/bs";
import { GitHub, Markunread } from "@mui/icons-material";
import { PrimaryButton } from "@/MUI_components/PrimaryButton";
import { useRouter } from "next/navigation";
const SupabaseBox = () => {
  const theme = useTheme();
  const router = useRouter();
  const handleClick = () => {
    router.push(process.env.NEXT_PUBLIC_SUPABASE_REGISTER_PAGE);
  };
  return (
    <Box className={`grid jcs aic g30 pad20 ${styles.supabase_box}`}>
      <Head align={"center"}>
        <Typography variant="h4" sx={{ color: theme.palette.supabase }}>
          Supabase Authentication
        </Typography>
      </Head>
      <Logos logos={[webGhoulLogo, supabaseLogo]} />
      <Box className={`grid jcfs aic g20 ${styles.providers_box}`}>
        <Head line={true} lineColor={theme.palette.supabase} align={"left"}>
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
          backgroundColor: theme.palette.supabase,
          borderColor: theme.palette.supabase,
          "&:hover": { color: theme.palette.supabase },
        }}
        onClick={handleClick}
      >
        Start Auth
      </PrimaryButton>
    </Box>
  );
};

export default SupabaseBox;
