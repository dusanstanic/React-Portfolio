import { connect } from "react-redux";
import ProjectI from "../../shared/models/ProjectI";
import SearchParams from "../../shared/models/SearchParams";
import StoreI from "../../shared/models/StoreI";
import * as projectService from "../../shared/services/project";

import * as actionTypes from "./actionTypes/projectData";

const projectDataCheckState = () => {
  return (dispatch: any) => {
    dispatch(fetchProjects());
  };
};

const fetchProjects = () => {
  return async (dispatch: any, getState: () => StoreI) => {
    try {
      const projects = await projectService.fetch();
      dispatch(fetchSuccess(projects));
    } catch {
      console.log("Error");
      dispatch(fetchFailed());
    }
  };
};

const fetchSuccess = (projects: ProjectI[]): FetchSuccessAction => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload: {
      projects,
    },
  };
};

const fetchFailed = () => {
  return {
    type: actionTypes.FETCH_FAILED,
    payload: {
      projects: [],
      loading: false,
      error: true,
    },
  };
};

export { fetchProjects, projectDataCheckState };

interface FetchSuccessAction {
  type: typeof actionTypes.FETCH_SUCCESS;
  payload: { projects: ProjectI[] };
}

interface FetchFailedAction {
  type: typeof actionTypes.FETCH_FAILED;
}

export type ActionTypes = FetchSuccessAction | FetchFailedAction;
