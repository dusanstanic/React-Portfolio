import { RouteComponentProps, useParams, withRouter } from "react-router";
import classes from "./Project.scss";

import ProjectI from "../../shared/models/ProjectI";
import { connect } from "react-redux";
import StoreI from "../../shared/models/StoreI";
import { useEffect, useState } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";

interface PropsI extends RouteComponentProps {
  projects: ProjectI[];
}

interface Params {
  id: string;
}

const Project = ({ projects }: PropsI) => {
  const { id } = useParams<Params>();
  const [project, setProject] = useState<ProjectI>();

  useEffect(() => {
    if (!projects) {
      return;
    }

    setProject(projects[+id - 1]);
  }, [projects]);

  console.log(project);

  return (
    <Aux>
      <img
        className={classes["background"]}
        src={"http://localhost:3000/" + project?.images[0].name}
      ></img>
      <div className={classes["project"]}>
        <div className={classes["header"]}>
          <h2 className={classes["header__title"]}>{project?.title}</h2>
        </div>
        <div className={classes["about"]}>
          <h3 className={classes["about__title"]}>Summary</h3>
          <p className={classes["about__text"]}>{project?.summary}</p>
          <h3 className={classes["about__title"]}>Used</h3>
          <ul className={classes["about__items"]}>
            {project?.technologies.map((technology, index) => {
              return (
                <li className={classes["about__item"]} key={index}>
                  {technology.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes["detail"]}>
          <h3 className={classes["about__title"]}>Description</h3>
          <p className={classes["detail__text"]}>{project?.description}</p>
        </div>
      </div>
    </Aux>
  );
};

const mapStateToProp = (state: StoreI) => {
  return {
    projects: state.projectData.projects,
  };
};

export default connect(mapStateToProp, {})(withRouter(Project));
