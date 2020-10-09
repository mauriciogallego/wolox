import { func } from "prop-types";
import { CHANGE_LANGUAGE, LOGIN, LOGOUT } from "~/utils/constants";

const initialState = {
  user: {
    email: "",
    remeber: false,
  },
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
      localStorage.setItem("language", payload.language);
      return {
        ...state,
        language: payload.language,
      };
    case LOGIN:
      console.log("entro", payload.user.remember);
      if (payload.user.remember) {
        localStorage.setItem("email", payload.user.email);
        localStorage.setItem("token", payload.auth.token);
      }
      return {
        ...state,
        user: {
          ...state.user,
          email: payload.user.email,
          remember: payload.user.remember,
        },
        auth: {
          ...state.auth,
          token: payload.auth.token,
        },
      };
    case LOGOUT:
      localStorage.setItem("email", null);
      localStorage.setItem("token", null);
      return {
        ...initialState,
        language: state.language,
      };
    default:
      const email = localStorage.getItem("email");
      const token = localStorage.getItem("token");
      const language = localStorage.getItem("language") || state.language;
      return {
        ...state,
        language,
        user: {
          ...state.user,
          email,
        },
        auth: {
          ...state.auth,
          token,
        },
      };
  }
}
