import * as f from 'whatwg-fetch';

export const SET_CV = 'SET_CV';

export function setCV(cv) {
  return {
    type: SET_CV,
    cv
  };
}

export function fetchCV(cvName) {
  return (dispatch) => {
    return fetch(`${SERVER_ADDR}/cv/${cvName}`)
      .then(response => response.json())
      .then(cv =>
        dispatch(setCV(cv))
      );
  };
}
