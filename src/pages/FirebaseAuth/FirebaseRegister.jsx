import { MyBox } from "@/MUI_components/MyBox";
import { Container} from "@mui/material";
import React from "react";
import Form from "@/components/Form/Form";

const FirebaseRegister = () => {
  return (
    <MyBox>
      <Container>
        <Form type="register"/>
      </Container>
    </MyBox>
  );
};

export default FirebaseRegister;
