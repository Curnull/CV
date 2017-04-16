import * as actions from '../actions/CVActions';

const initialState = {
  isLoading: true,
  cv: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CV:
      return { ...state, cv: action.cv, isLoading: false };
    default:
      return state;
  }
};
