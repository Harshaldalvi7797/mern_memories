/** @format */

import * as api from "../api/index";
import { FETCH_ALL, CREATE } from "../constants/actionTypes";

//Actions creator

export const getPosts = () => async dispatch => {
  try {
    const { data } = await api.fetchPosts();
    // const action = { type: FETCH_ALL, payload: data };
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createPost = post => async dispatch => {
  try {
    const data = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
