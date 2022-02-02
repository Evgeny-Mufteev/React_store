/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogoutAction } from "../../../store/StoreRegPage/actions";
import { getUsersData } from "../../../store/StoreRegPage/selectors";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const userData = useSelector(getUsersData);
  const logoutHandler = () => {
    dispatch(userLogoutAction());
  };

  return (
    <header className={style["wrapper-example"]}>
      <Link to="/">
        <div className={style.logo}>
          <img src="/logo.png" alt="logo" />
        </div>
      </Link>
      <nav>
        <ul className={style.menu_list}>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/posts">post</Link>
          </li>
          <li>
            <Link to="//registration">post</Link>
          </li>
        </ul>
      </nav>
      {userData.firstName && userData.lastName ? (
        <div>
          <p>{userData.firstName}</p>
          <p>{userData.lastName}</p>
          <button type="button" className={style.btn} onClick={logoutHandler}>
            <span>LOGOUT</span>
          </button>
        </div>
      ) : (
        <Link to="/registration">
          <button type="button" className={style.btn}>
            <span>SIGN UP</span>
          </button>
        </Link>
      )}
    </header>
  );
};

export default Header;
