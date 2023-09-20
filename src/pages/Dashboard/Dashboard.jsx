import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "./Dashboard.module.scss";
import { MyBox } from "@/MUI_components/MyBox";
import { supabase } from "@/Authentications/Supabase/config";

const Dashboard = () => {
  supabase.auth.onAuthStateChange((event,session)=>{
    console.log(session)
  })
  return (
    <MyBox className={`${styles.dashboard_box}`}>
      <Container className={`grid jcs aifs g30`}>
      </Container>
    </MyBox>
  );
};

export default Dashboard;
