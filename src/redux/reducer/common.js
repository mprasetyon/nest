import { CURRENT_PAGE, CURRENT_PAGESIZE } from "../types";

const initialState = {
  currentPage: 1,
  currentPageSize: 20,
};

const a = function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case CURRENT_PAGESIZE:
      return {
        ...state,
        currentPageSize: payload,
      };
    default:
      return state;
  }
};

export default a;
