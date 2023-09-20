import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Login from "./Login/Login";
import "./Form.scss";
import Register from "./Register/Register";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "../../Authentications/firebase/config";
import { handleAlertToastify } from "@/Functions/reactToastify";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/Authentications/Supabase/config";

const Form = ({ type }) => {
  const router = useRouter();
  const pathname = usePathname();
  let arr = pathname.slice(1).split("-");
  const provider = arr.slice(0, arr.length - 1).join(" ");
  
  const registerSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    username: yup
      .string("Enter your username")
      .required("Username is required"),
    gender: yup
      .string("Enter your gender")
      .oneOf(["female", "male"])
      .required("Gender is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    confirm_password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const registerInitialValues = {
    email: "",
    username: "",
    gender: "",
    password: "",
    confirm_password: "",
  };

  const loginSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const loginInitialValues = {
    email: "",
    password: "",
  };

  const handleSignUpWithEmailWithFirebase = (values) => {
    createUserWithEmailAndPassword(firebaseAuth, values.email, values.password)
      .then((res) => {
        handleAlertToastify("Create Account Successfully!", "success");
        router.push(process.env.NEXT_PUBLIC_FIREBASE_LOGIN_PAGE);
      })
      .catch((err) => {
        handleAlertToastify(
          err.code.split("/")[1].split("-").join(" "),
          "error"
        );
      });
  };

  const handleSignUpWithEmailWithSupabase = async (values) => {
    await supabase.auth
      .signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            username: values.username,
            gender: values.gender,
          },
        },
      })
      .then((res) => {
        console.log(res)
        handleAlertToastify("Create Account Successfully!", "success");
        router.push(process.env.NEXT_PUBLIC_SUPABASE_LOGIN_PAGE);
      })
      .catch((err) => {
        console.log(err);
        handleAlertToastify("error", "error");
      });
  };

  const loginFormik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      signInWithEmailAndPassword(firebaseAuth, values.email, values.password)
        .then((res) => {
          handleAlertToastify("Log in Successfully!", "success");
        })
        .catch((err) => {
          handleAlertToastify(
            err.code.split("/")[1].split("-").join(" "),
            "error"
          );
        });
    },
  });

  const registerFormik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      if (provider === "firebase") {
        handleSignUpWithEmailWithFirebase(values);
      } else if (provider === "supabase") {
        handleSignUpWithEmailWithSupabase(values);
      }else{

      }
    },
  });

  // const handleRegister = async () => {
  //   const { data, error } = await supabase.auth.signUp({
  //     email: formData.email,
  //     password: formData.password,
  //     options: {
  //       data: {
  //         gender: "male",
  //       },
  //     },
  //   });
  //   console.log(data, error);
  // };
  // const handleLogin = async () => {
  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     email: formData.email,
  //     password: formData.password,
  //   });
  //   console.log(data, error);
  // };

  return (
    <form
      className={`grid jcs aic g0`}
      onSubmit={
        type === "login"
          ? loginFormik.handleSubmit
          : registerFormik.handleSubmit
      }
    >
      {type === "login" ? (
        <Login provider={provider} formik={loginFormik} />
      ) : (
        <Register formik={registerFormik} provider={provider} />
      )}
    </form>
  );
};

export default Form;
