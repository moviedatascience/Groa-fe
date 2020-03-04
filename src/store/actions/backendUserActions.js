import constants from "../constants";

export const Login = Id => {
  return { type: constants.USER_LOGIN, payload: Id };
};
