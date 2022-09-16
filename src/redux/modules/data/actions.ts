import { ADD_DATA, GET_DATA } from '../../../constants/actions';

export const addUserData = (data: any) => {
  return {
    type: ADD_DATA.REQUEST,
    data,
  };
};

export const addUserDataSuccess = () => {
  return {
    type: ADD_DATA.SUCCESS,
  };
};

export const addUserDataFailure = (error: any) => {
  return {
    type: ADD_DATA.FAILURE,
    error,
  };
};

export const getUserData = () => {
  return {
    type: GET_DATA.REQUEST,
  };
};

export const getUserDataSuccess = (payload: any) => {
  return {
    type: GET_DATA.SUCCESS,
    payload,
  };
};

export const getUserDataFailure = (error: any) => {
  return {
    type: GET_DATA.FAILURE,
    error,
  };
};
