import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
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
import { GitHub } from "@mui/icons-material";
import { BsDiscord } from "react-icons/bs";
import { useRouter } from "next/navigation";
import firebaseLoginImg from "../../../../public/images/elon_musk.jpg";
import supabaseLoginImg from "../../../../public/images/mark.jpg";
import nextAuthLoginImg from "../../../../public/images/jiff.jpg";
import {
  firebaseAuth,
  githubProvider,
  googleProvider,
  yahooProvider,
} from "@/Authentications/firebase/config";
import { signInWithPopup } from "firebase/auth";
import { handleAlertToastify } from "@/Functions/reactToastify";
import { supabase } from "@/Authentications/Supabase/config";
import { FaYahoo } from "react-icons/fa";
import { SiZoom } from "react-icons/si";

const Login = ({ formik, provider }) => {
  const router = useRouter();
  const theme = useTheme();
  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ??
      process?.env?.NEXT_PUBLIC_VERCEL_URL ??
      "http://localhost:3000/dashboard";
    url = url.includes("http") ? url : `https://${url}`;
    url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
    return url;
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

  const handleSignInWithFirebaseYahoo = () => {
    signInWithPopup(firebaseAuth, yahooProvider)
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

  const handleSignInWithSupabaseGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: getURL(),
      },
    });
  };

  const handleSignInWithSupabaseGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: getURL(),
      },
    });
  };

  const handleSignInWithSupabaseFigma = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "figma",
      options: {
        redirectTo: getURL(),
      },
    });
  };

  const handleSignInWithSupabaseDiscord = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: getURL(),
      },
    });
  };

  const handleSignInWithSupabaseZoom = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "zoom",
      options: {
        redirectTo: getURL(),
      },
    });
  };
  return (
    <>
      <Box
        className={`grid jcfs aifs g30 pad20 form_auth_cover`}
        sx={{
          backgroundImage: `url(${
            provider === "firebase"
              ? firebaseLoginImg.src
              : provider === "supabase"
              ? supabaseLoginImg.src
              : nextAuthLoginImg.src
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
              {provider} Login
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
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
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
        </Box>

        <Box className={`grid jcs aic g10`}>
          <PrimaryButton
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              borderColor: (theme) => theme.palette.primary.main,
              "&:hover": { color: (theme) => theme.palette.primary.main },
            }}
            type={"submit"}
          >
            Login
          </PrimaryButton>
          <Button
            onClick={() =>
              router.push(
                provider === "firebase"
                  ? process.env.NEXT_PUBLIC_FIREBASE_REGISTER_PAGE
                  : provider === "supabase"
                  ? process.env.NEXT_PUBLIC_SUPABASE_REGISTER_PAGE
                  : process.env.NEXT_PUBLIC_NEXT_AUTH_REGISTER_PAGE
              )
            }
          >
            Create an Account ?
          </Button>
        </Box>
        <Box className={`grid jcs aic g0`}>
          <Or />
          <Typography
            className={`tac`}
            sx={{ color: (theme) => theme.palette.primary.main }}
            variant="h6"
          >
            Login With
          </Typography>
          <Box className={`grid jcs aic g10`}>
            <AuthButton
              icon={<FcGoogle />}
              title={"Log in with Google"}
              color={theme.palette.gmail}
              clickable={
                provider === "firebase"
                  ? handleSignInWithFirebaseGoogle
                  : provider === "supabase" && handleSignInWithSupabaseGoogle
              }
            />
            <AuthButton
              icon={<GitHub />}
              title={"Log in with Github"}
              color={theme.palette.github}
              clickable={
                provider === "firebase"
                  ? handleSignInWithFirebaseGithub
                  : provider === "supabase" && handleSignInWithSupabaseGithub
              }
            />
            {provider === "supabase" && (
              <>
                <AuthButton
                  img={figmaLogo}
                  title={"Log in with Figma"}
                  color={theme.palette.figma}
                  clickable={handleSignInWithSupabaseFigma}
                />
                <AuthButton
                  icon={<BsDiscord />}
                  title={"Log in with Dicord"}
                  color={theme.palette.discord}
                  clickable={handleSignInWithSupabaseDiscord}
                />
                <AuthButton
                  icon={<SiZoom />}
                  title={"Log in with Zoom"}
                  color={theme.palette.discord}
                  clickable={handleSignInWithSupabaseZoom}
                />
              </>
            )}
            {provider === "firebase" && (
              <AuthButton
                icon={<FaYahoo />}
                title={"Log in with Yahoo"}
                color={theme.palette.yahoo}
                clickable={handleSignInWithFirebaseYahoo}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
