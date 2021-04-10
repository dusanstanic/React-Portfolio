import { NavLink, RouteComponentProps } from "react-router-dom";
import classes from "./Project.scss";

interface PropsI extends RouteComponentProps<{}> {}

import projectImage1 from "../../images/Checkers.png";
import projectImage2 from "../../images/NewsDaily.png";
import projectImage3 from "../../images/GreenEarth.jpg";
import projectImage4 from "../../images/NintendoShop.png";
import React, { RefObject, useEffect } from "react";
import { animateOnView } from "../../shared/animation/onView";

const Project = (props: PropsI) => {
  const projectList = React.useRef<HTMLUListElement>();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!projectList.current) {
      return;
    }

    const items = projectList.current.children;

    for (let i = 0; i < items.length; i++) {
      const item = { current: items[i] } as RefObject<HTMLElement>;
      if (i % 2 === 0) {
        animateOnView(item, classes.fadeInAn, classes.fadeOutAn);
        continue;
      }
      animateOnView(item, classes.moveInRightAn, classes.fadeOutAn);
    }

    // if (item1) {
    //   animateOnView(item1, classes.fadeInAn, classes.fadeOutAn);
    // }
  }, []);

  return (
    <div className={classes["project"]}>
      <header className={classes["header"]}>
        <div className={classes["header__intro"]}>
          <h2 className={classes["header__title"]}>Welcome To The Projects</h2>
          <button className={`${classes["header__button"]} ${classes["btn"]}`}>
            <a href="#projects" className={classes["header__link"]}>
              View Projects
            </a>
          </button>
        </div>
      </header>

      <h3 id="projects" className={classes["project__title"]}>
        Projects
      </h3>

      <section className={classes["projects"]}>
        <ul className={classes["projects__items"]} ref={projectList}>
          <li className={classes["projects__item"]}>
            <img className={classes["projects__image"]} src={projectImage4} />
            <NavLink
              className={`${classes["link"]} ${classes["projects__link"]}`}
              to={{ pathname: `${props.match.url}/details` }}
            >
              Nintendo Shop
            </NavLink>
          </li>
          <li className={classes["projects__item"]}>
            <img className={classes["projects__image"]} src={projectImage2} />
            <NavLink
              className={`${classes["link"]} ${classes["projects__link"]}`}
              to={{ pathname: `${props.match.url}/details` }}
            >
              News Daily
            </NavLink>
          </li>
          <li className={classes["projects__item"]}>
            <img className={classes["projects__image"]} src={projectImage1} />
            <NavLink
              className={`${classes["link"]} ${classes["projects__link"]}`}
              to={{ pathname: `${props.match.url}/details` }}
            >
              Checkers
            </NavLink>
          </li>
          <li className={classes["projects__item"]}>
            <img className={classes["projects__image"]} src={projectImage3} />
            <NavLink
              className={`${classes["link"]} ${classes["projects__link"]}`}
              to={{ pathname: `${props.match.url}/details` }}
            >
              Green Earth
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Project;
