import styles from "./LoginForm.module.scss";
import { useRef, useState } from "react";
import React from "react";
import { loginHandler } from "../utility/authHttpHandler";
import { registrationHandler } from "../utility/authHttpHandler";
import { useNavigate } from "react-router";
import { authActions } from "../../store/authSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [loggingIn, setLoggingIn] = useState(true);
  const enteredEmail = useRef();
  const enteredPass = useRef();
  const navigate = useNavigate();

  const switchHandler = (e) => {
    setLoggingIn(!loggingIn);
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    const status = await loginHandler({
      email: enteredEmail.current.value,
      pass: enteredPass.current.value,
    });
    if (status === "Error") {
      alert(
        "There was an error logging in, Please ensure that you have entered the correct details"
      );
    } else {
      dispatch(authActions.setLogin(status));
      navigate("/");
    }
  };

  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    const status = await registrationHandler({
      email: enteredEmail.current.value,
      pass: enteredPass.current.value,
    });
    if (status !== "Success") {
      alert(status);
    } else {
      alert("Registration Successful, navigating back to home now...");
      navigate("/");
    }
  };
  return (
    <div className={styles.formContainer}>
      {loggingIn && (
        <React.Fragment>
          <h3>Login</h3>
          <form className={styles.loginForm} onSubmit={loginSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" ref={enteredEmail} />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              ref={enteredPass}
            />
            <button type="submit" className={styles.button}>
              Login
            </button>
            <a onClick={switchHandler}>Need to Register?</a>
          </form>
        </React.Fragment>
      )}
      {!loggingIn && (
        <React.Fragment>
          <h3>Register</h3>
          <form className={styles.loginForm} onSubmit={registerSubmitHandler}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" ref={enteredEmail} />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              ref={enteredPass}
            />
            <button type="submit" className={styles.button}>
              Register
            </button>
            <a onClick={switchHandler}>Already have account?</a>
          </form>
        </React.Fragment>
      )}
    </div>
  );
};

export default LoginForm;
