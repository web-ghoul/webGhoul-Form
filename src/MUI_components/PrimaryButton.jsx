//MUI
import { Button } from "@mui/material";

//Style
import styled from "@emotion/styled";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  color:theme.palette.white,
  boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
  fontSize:"20px",
  fontWeight:"600",
  padding:"10px 20px",
  borderRadius:"0px",
  borderWidth:"2px",
  borderStyle:"solid",
  "&:hover":{
    backgroundColor:"transparent",
    cursor:"pointer",
  },
  [theme.breakpoints.down("md")]: {
    fontSize:"18px",
    padding:"8px 18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize:"16x",
    padding:"6px 15px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize:"14px",
    padding:"4px 12px",
  },
}));
