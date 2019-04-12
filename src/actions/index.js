import {APPLICATIONS} from "../constants";

export const loadImages = () => ({
  type: APPLICATIONS.LOAD
});

export const setImages = images => ({
  type: APPLICATIONS.LOAD_SUCCESS
});

export const setError = error => ({
  type: APPLICATIONS.LOAD_ERROR
});
