import styles from "./Header.module.scss";
import { useSelector } from "react-redux";
import SearchIcon from "../UI/searchIcon";
import React from "react";
import { authActions } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const logoutHandler = (e) => {
    dispatch(authActions.setLogout());
    navigation("/");
  };

  const loginHandler = (e) => {
    navigation("login");
  };

  const myListHandler = (e) => {
    navigation("/myList");
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <SearchIcon />
        <Link to="/" className={styles.link}>
          <h2>Search and Store</h2>
        </Link>
      </div>
      {loginState && (
        <motion.div
          animate={{
            opacity: 1,
            transition: { duration: 0.8 },
          }}
          className={styles.btndiv}
        >
          <button onClick={myListHandler}>My List</button>
          <button onClick={logoutHandler}>Logout</button>
        </motion.div>
      )}
      {!loginState && (
        <motion.div
          animate={{
            opacity: 1,
            transition: { duration: 0.8 },
          }}
          className={styles.btndiv}
        >
          <button onClick={loginHandler}>Login</button>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
