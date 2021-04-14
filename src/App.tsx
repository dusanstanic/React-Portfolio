import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router";

import Home from "./container/Home/Home";
import Projects from "./container/Projects/Projects";
import Project from "./components/Project/Project";

import * as projectDataActions from "./store/actions/index";

import Layout from "./hoc/Layout/Layout";
import ProjectI from "./shared/models/ProjectI";

import Store from "./shared/models/StoreI";

interface PropsI extends RouteComponentProps {
  projectDataCheckState: Function;
  projects: ProjectI[];
}

const App: FunctionComponent<PropsI> = ({
  projects,
  projectDataCheckState,
}) => {
  useEffect(() => {
    projectDataCheckState();
    // history.push({ pathname: "/home" });
  }, []);

  if (projects) {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/projects/project/:id" component={Project} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </Layout>
      </div>
    );
  } else {
    return <div>Hello</div>;
  }
};

const mapStateToProp = (state: Store) => {
  return {
    projects: state.projectData.projects,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    projectDataCheckState: () => dispatch(projectDataActions.fetchProjects()),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(withRouter(App));
