import React, { useEffect } from "react";
import {
  NavLink,
  Route,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";

import classes from "./Projects.scss";

import StoreI from "../../shared/models/StoreI";
import ProjectI from "../../shared/models/ProjectI";

import Projectt from "../../components/Project/Project";
import ProjectTile from "../../components/ProjectTile/ProjectTile";

import { animateOnViewChildren } from "../../shared/animation/onViewChildren";
import Aux from "../../hoc/Auxiliary/Auxiliary";

interface PropsI extends RouteComponentProps {
  projects: ProjectI[];
}

const Project = ({ projects, match }: PropsI) => {
  const projectList = React.useRef<HTMLUListElement>();

  const renderProjectTiles = () => {
    if (!projects.length) {
      return [];
    }

    const projectTiles = projects.map((project, index) => {
      return (
        <Aux key={index}>
          <ProjectTile
            project={project}
            match={match}
            classes={{ ...classes }}
          />
        </Aux>
      );
    });

    return projectTiles;
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!projectList.current || !projects.length) {
      return;
    }

    let handler = animateOnViewChildren(
      projectList,
      classes.moveInRightAn,
      classes.fadeOutAn
    );

    return () => {
      document.removeEventListener("scroll", handler);
    };
  }, [projects]);

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
          {renderProjectTiles()}
        </ul>
      </section>
    </div>
  );
};

const mapStateToProp = (state: StoreI) => {
  return {
    projects: state.projectData.projects,
  };
};

export default connect(mapStateToProp, {})(withRouter(Project));

// const items = projectList.current.children;

// for (let i = 0; i < items.length; i++) {
//   const item = { current: items[i] } as RefObject<HTMLElement>;
//   if (i % 2 === 0) {
//     animateOnView(item, classes.fadeInAn, classes.fadeOutAn);
//     continue;
//   }
//   animateOnView(item, classes.moveInRightAn, classes.fadeOutAn);
// }

// if (item1) {
//   animateOnView(item1, classes.fadeInAn, classes.fadeOutAn);
// }
