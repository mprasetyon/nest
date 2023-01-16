import { CURRENT_PAGE, CURRENT_PAGESIZE } from "../types";

export const setCurrentPage = (value) => (dispatch) => {
  dispatch({
    type: CURRENT_PAGE,
    payload: value,
  });
  return Promise.resolve();
};

export const setCurrentPageSize = (value) => (dispatch) => {
  dispatch({
    type: CURRENT_PAGESIZE,
    payload: value,
  });
  return Promise.resolve();
};
