import { MyBox } from "@/MUI_components/MyBox";
import Form from "@/components/Form/Form";
import { Container } from "@mui/material";
import React from "react";

const SupabaseRegister = () => {
  return (
    <MyBox>
      <Container>
        <Form type="register" />
      </Container>
    </MyBox>
  );
};

export default SupabaseRegister;
