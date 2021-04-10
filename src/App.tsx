import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";

import Home from "./container/Home/Home";
import Project from "./container/Project/Project";

import * as newsDataActions from "./store/actions/index";

import Layout from "./hoc/Layout/Layout";
import Article from "./shared/models/Article";

import Store from "./shared/models/StoreI";

interface PropsI extends RouteComponentProps {
  articleDataCheckState: Function;
  articles: Article[];
}

const App: FunctionComponent<PropsI> = ({ history, articleDataCheckState }) => {
  useEffect(() => {
    // articleDataCheckState();
    // history.push({ pathname: "/home" });
  }, []);

  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/project" component={Project} />
        </Switch>
      </Layout>
    </div>
  );
};

const mapStateToProp = (state: Store) => {
  return {
    articles: state.articleData.articles,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    articleDataCheckState: () =>
      dispatch(newsDataActions.articleDataCheckState()),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(withRouter(App));
