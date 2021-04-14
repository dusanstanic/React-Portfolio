import { match, RouteComponentProps } from "react-router";
// import classes from "./Project.scss";

import ProjectI from "../../shared/models/ProjectI";
import { NavLink } from "react-router-dom";

interface PropsI {
  project: ProjectI;
  match: match;
  classes: {};
}

const Project = ({ project, match, classes }: PropsI) => {
  return (
    <li className={classes["projects__item"]}>
      <img
        className={classes["projects__image"]}
        src={"http://localhost:3000/" + project.images[0].name}
      />
      <NavLink
        className={`${classes["link"]} ${classes["projects__link"]}`}
        to={{
          pathname: `${match.url}/project/` + project.id,
        }}
      >
        {project.title}
      </NavLink>
    </li>
  );
};

export default Project;
