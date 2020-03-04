import constants from "../constants";

const initialState = {
  isPostingUser: false,
  isPostingUserError: null,
  userid: null
};

export const dashboardMain = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.USER_LOGIN:
      return {
        ...state,
        isPostingUser: true,
        userid: payload
      };
    default:
      return state;
  }
};
