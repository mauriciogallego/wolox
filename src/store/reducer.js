import { CHANGE_LANGUAGE, LOGIN } from "~/utils/constants";

const initialState = {
  user: {},
  auth: {
    token: null,
  },
  language: "spanish",
  error: {
    show: false,
    message: "",
  },
};

export default function todos(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload.language,
      };
    case LOGIN:
      return {
        ...state,
        user: payload.user,
        auth: {
          ...state.auth,
          token: payload.auth.token,
        },
      };
    default:
      return state;
  }
}
