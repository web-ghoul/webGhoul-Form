import { MyBox } from "@/MUI_components/MyBox";
import Form from "@/components/Form/Form";
import { Container } from "@mui/material";
import React from "react";

const SupabaseLogin = () => {
  return (
    <MyBox>
      <Container>
        <Form type="login" />
      </Container>
    </MyBox>
  );
};

export default SupabaseLogin;
