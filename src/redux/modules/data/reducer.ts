// @flow

import { ADD_DATA, GET_DATA } from '../../../constants/actions';

type AccountProps = {
  isLoading: boolean;
  error: any;
  data: any;
};

type ActionProps = {
  type: string;
  error: any;
  payload: any;
};

const initialState: AccountProps = {
  isLoading: false,
  error: null,
  data: null,
};

export default function data(state = initialState, action: ActionProps) {
  const { type, payload, error } = action;

  switch (type) {
    case GET_DATA.REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case GET_DATA.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
        error: null,
      };
    }
    case GET_DATA.FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    }
    case ADD_DATA.REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case ADD_DATA.SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }
    case ADD_DATA.FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    }
    default:
      return state;
  }
}
