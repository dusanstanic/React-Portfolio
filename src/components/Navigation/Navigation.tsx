import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.scss";

import Aux from "../../hoc/Auxiliary/Auxiliary";

const Navigation = () => {
  return (
    <Aux>
      <nav className={classes["nav"]}>
        <ul className={classes["nav__items"]}>
          <li
            className={`${classes["nav__item"]} ${classes["nav__item-brand"]}`}
          >
            <div>Dusan Stanic</div>
          </li>
          <li className={classes["nav__item"]}>
            <NavLink to={"/home"} className={classes["nav__link"]}>
              Home
            </NavLink>
          </li>
          <li className={classes["nav__item"]}>
            <NavLink to={"/project"} className={classes["nav__link"]}>
              Projects
            </NavLink>
          </li>
          <li className={classes["nav__item"]}>
            <NavLink to={"/about"} className={classes["nav__link"]}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </Aux>
  );
};

export default Navigation;
