import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import firebaseLogo from "../../../../public/images/firebase.png";
import supabaseLogo from "../../../../public/images/supabase.png";
import nextAuthLogo from "../../../../public/images/next_auth.png";
import Image from "next/image";
import Head from "@/components/Head/Head";
import { useTheme } from "@emotion/react";
import { PrimaryButton } from "@/MUI_components/PrimaryButton";
import Or from "@/components/Or/Or";
import Logo from "@/components/Logo/Logo";
import AuthButton from "@/components/AuthButton/AuthButton";
import figmaLogo from "../../../../public/images/figma.png";
import { FcGoogle } from "react-icons/fc";
import { FaYahoo } from "react-icons/fa";
import { FacebookRounded, GitHub } from "@mui/icons-material";
import { BsDiscord } from "react-icons/bs";
import { useRouter } from "next/navigation";
import firebaseRegisterImg from "../../../../public/images/bill.jpg";
import supabaseRegisterImg from "../../../../public/images/steve.jpg";
import nextAuthRegiserImg from "../../../../public/images/alan.jpg";
import { signInWithPopup } from "firebase/auth";
import {
  facebookProvider,
  firebaseAuth,
  githubProvider,
  googleProvider,
  yahooProvider,
} from "@/Authentications/firebase/config";
import { handleAlertToastify } from "@/Functions/reactToastify";

const Register = ({ formik, provider }) => {
  const router = useRouter();
  const theme = useTheme();
  const [value, setValue] = useState("male");
  const handleChange = (event) => {
    setValue(event.target.value);
    formik.values.gender = event.target.value;
  };
  const handleSignInWithFirebaseGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider)
      .then((res) => {
        handleAlertToastify("Log in Successfully!", "success");
        router.push(process.env.NEXT_PUBLIC_DASHBOARD_PAGE);
      })
      .catch((err) => {
        handleAlertToastify(
          err.code.split("/")[1].split("-").join(" "),
          "error"
        );
      });
  };

  const handleSignInWithFirebaseYahoo = () => {
    signInWithPopup(firebaseAuth, yahooProvider)
      .then((res) => {
        console.log(res);
        handleAlertToastify("Log in Successfully!", "success");
        router.push(process.env.NEXT_PUBLIC_DASHBOARD_PAGE);
      })
      .catch((err) => {
        handleAlertToastify(
          err.code.split("/")[1].split("-").join(" "),
          "error"
        );
      });
  };

  const handleSignInWithFirebaseGithub = () => {
    signInWithPopup(firebaseAuth, githubProvider)
      .then((res) => {
        handleAlertToastify("Log in Successfully!", "success");
        router.push(process.env.NEXT_PUBLIC_DASHBOARD_PAGE);
      })
      .catch((err) => {
        handleAlertToastify(
          err.code.split("/")[1].split("-").join(" "),
          "error"
        );
      });
  };

  const handleSignInWithFirebaseFacebook = () => {
    signInWithPopup(firebaseAuth, facebookProvider)
      .then((res) => {
        handleAlertToastify("Log in Successfully!", "success");
        router.push(process.env.NEXT_PUBLIC_DASHBOARD_PAGE);
      })
      .catch((err) => {
        handleAlertToastify(
          err.code.split("/")[1].split("-").join(" "),
          "error"
        );
      });
  };
  
  return (
    <>
      <Box
        className={`grid jcfs aifs g30 pad20 form_auth_cover`}
        sx={{
          backgroundImage: `url(${
            provider === "firebase"
              ? firebaseRegisterImg.src
              : provider === "supabase"
              ? supabaseRegisterImg.src
              : nextAuthRegiserImg.src
          })`,
        }}
      >
        <Box className={`flex jcfs aic g10 firebase_auth_head`}>
          <Image
            src={
              provider === "firebase"
                ? firebaseLogo
                : provider === "supabase"
                ? supabaseLogo
                : nextAuthLogo
            }
            alt={provider}
          />
          <Head
            line={true}
            lineColor={
              provider === "supabase"
                ? theme.palette.supabase
                : provider === "firebase"
                ? theme.palette.firebase
                : theme.palette.nextAuth
            }
          >
            <Typography
              sx={{
                color: (theme) =>
                  provider === "supabase"
                    ? theme.palette.supabase
                    : provider === "firebase"
                    ? theme.palette.firebase
                    : theme.palette.nextAuth,
              }}
              variant="h4"
              className={`ttcap`}
            >
              {provider} Register
            </Typography>
          </Head>
        </Box>
        <Box className={`overlay`} />
      </Box>
      <Box className={`form_box pad20 grid jcs aic g30`}>
        <Logo title={`webGhoul`} />
        <Box className={`grid jcs aic g10`}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="username"
            name="username"
            label="username"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={formik.values.gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            fullWidth
            id="confirm_password"
            name="confirm_password"
            label="confirm_password"
            type="password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirm_password &&
              Boolean(formik.errors.confirm_password)
            }
            helperText={
              formik.touched.confirm_password && formik.errors.confirm_password
            }
          />
        </Box>
        <Box className={`grid jcs aic g10`}>
          <PrimaryButton
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              borderColor: (theme) => theme.palette.primary.main,
              "&:hover": { color: (theme) => theme.palette.primary.main },
            }}
            type="submit"
          >
            Register
          </PrimaryButton>
          <Button
            onClick={() =>
              router.push(
                provider === "firebase"
                  ? process.env.NEXT_PUBLIC_FIREBASE_LOGIN_PAGE
                  : provider === "supabase"
                  ? process.env.NEXT_PUBLIC_SUPABASE_LOGIN_PAGE
                  : process.env.NEXT_PUBLIC_NEXT_AUTH_LOGIN_PAGE
              )
            }
          >
            Have an Account ?
          </Button>
        </Box>
        <Box className={`grid jcs aic g0`}>
          <Or />
          <Typography
            className={`tac`}
            sx={{ color: (theme) => theme.palette.primary.main }}
            variant="h6"
          >
            Register With
          </Typography>
          <Box className={`grid jcs aic g10`}>
            <AuthButton
              icon={<FcGoogle />}
              title={"Register with Google"}
              color={theme.palette.gmail}
              clickable={
                provider === "firebase"
                  ? handleSignInWithFirebaseGoogle
                  : provider === "supabase" && ""
              }
            />
            <AuthButton
              icon={<FacebookRounded />}
              title={"Register with Facebook"}
              color={theme.palette.facebook}
              clickable={
                provider === "firebase"
                  ? handleSignInWithFirebaseFacebook
                  : provider === "supabase" && ""
              }
            />
            <AuthButton
              icon={<GitHub />}
              title={"Register with Github"}
              color={theme.palette.github}
              clickable={
                provider === "firebase"
                  ? handleSignInWithFirebaseGithub
                  : provider === "supabase" && ""
              }
            />
            {provider !== "firebase" && (
              <AuthButton
                img={figmaLogo}
                title={"Register with Figma"}
                color={theme.palette.figma}
              />
            )}
            <AuthButton
              icon={<FaYahoo />}
              title={"Register with Yahoo"}
              color={theme.palette.yahoo}
              clickable={
                provider === "firebase"
                  ? handleSignInWithFirebaseYahoo
                  : provider === "supabase" && ""
              }
            />
            {provider !== "firebase" && (
              <AuthButton
                icon={<BsDiscord />}
                color={theme.palette.discord}
                title={"Register with Dicord"}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Register;
