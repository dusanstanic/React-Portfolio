import ProjectI from "../../shared/models/ProjectI";
import * as actionTypes from "../actions/actionTypes/projectData";
import { ActionTypes } from "../actions/projectData";

export interface ProjectDataState {
  projects: ProjectI[];
  error: boolean;
  loading: boolean;
}

const initialState: ProjectDataState = {
  projects: [],
  error: false,
  loading: false,
};

const projectData = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        projects: action.payload.projects,
        loading: false,
      };
    case actionTypes.FETCH_FAILED:
      return { ...state, error: true };
    default:
      return state;
  }
};

export default projectData;
