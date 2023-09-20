import { MyBox } from "@/MUI_components/MyBox";
import { Container} from "@mui/material";
import React from "react";
import Form from "@/components/Form/Form";

const FirebaseLogin = () => {
  return (
    <MyBox>
      <Container>
        <Form type="login"/>
      </Container>
    </MyBox>
  );
};

export default FirebaseLogin;
