import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import React from "react";
import "./Login.css";

const Login = () => {
  const signIn = () => {
    // Google Login
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };
  return (
    <div className='login'>
      <h2>Login Page</h2>
      <div className='login__logo'>
        <img
          src='https://www.wepc.com/wp-content/uploads/2021/01/discord-logo.jpg'
          alt=''
        />
      </div>
      <Button onClick={signIn}>Sign In </Button>
    </div>
  );
};

export default Login;
