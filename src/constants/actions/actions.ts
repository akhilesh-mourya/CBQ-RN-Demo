export const createActionConst = (name: String) => {
  return {
    REQUEST: `${name}.REQUEST`,
    SUCCESS: `${name}.SUCCESS`,
    FAILURE: `${name}.FAILURE`,
  };
};

export const actions = {
  ADD_DATA: 'ADD_DATA',
  GET_DATA: 'GET_DATA',
};
