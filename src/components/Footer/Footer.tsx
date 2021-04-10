import classes from "./Footer.scss";

const Footer = () => {
  return (
    <div className={classes["footer"]}>
      <ul className={classes["nav"]}>
        <li className={classes["nav__item"]}>
          <a href="#" className={classes["nav__link"]}>
            Contact
          </a>
        </li>
        <li className={classes["nav__item"]}>
          <a href="#" className={classes["nav__link"]}>
            More
          </a>
        </li>
        <li className={classes["nav__item"]}>
          <a href="#" className={classes["nav__link"]}>
            About
          </a>
        </li>
      </ul>
      <div className={classes["contact"]}>
        <ul className={classes["contact__items"]}>
          <li className={classes["contact__item"]}>
            <div>dusan.stanic97@hotmail.com</div>
          </li>
          <li className={classes["contact__item"]}>
            <div>065-2323-839</div>
          </li>
        </ul>
      </div>
      <p className={classes["copyright"]}>
        &copy; Copyright 2021 by Dusan Stanic.
      </p>
    </div>
  );
};

export default Footer;
