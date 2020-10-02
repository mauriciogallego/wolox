import { CHANGE_LANGUAGE } from "~/utils/constants";

const initialState = {
  user:{},
  auth:{
    token: null
  },
  language : 'spanish'
};

export default function todos(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
