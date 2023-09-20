import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "./Home.module.scss";
import Head from "@/components/Head/Head";
import { MyBox } from "@/MUI_components/MyBox";
import webGhoulLogo from "../../../public/images/webGhoul.png";
import firebaseLogo from "../../../public/images/firebase.png";
import supabaseLogo from "../../../public/images/supabase.png";
import Logos from "@/components/Logos/Logos";
import FirebaseBox from "@/components/Firebase/FirebaseBox/FirebaseBox";
import SupabaseBox from "@/components/Supabase/SupabaseBox/SupabaseBox";
import { useParams, usePathname } from "next/navigation";

const Home = () => {
  return (
    <MyBox className={`${styles.home_box}`}>
      <Container className={`grid jcs aifs g30 ${styles.home_contain}`}>
        <Head align={"center"}>
          <Typography variant="h3" sx={{ color: "#fff" }}>
            webGhoul Form
          </Typography>
        </Head>
        <Box className={`grid jcs aic g30`}>
          <Logos
            logos={[firebaseLogo, webGhoulLogo, supabaseLogo]}
          />
          <Box className={`grid jcsb aifs g50 ${styles.auth_options}`}>
            <FirebaseBox />
            <SupabaseBox />
            {/* <NextAuthBox /> */}
          </Box>
        </Box>
      </Container>
    </MyBox>
  );
};

export default Home;
