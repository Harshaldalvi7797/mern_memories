/** @format */

import React from "react";
import Post from "./post/Post";
import useStyles from "./styles";
export default function Posts() {
  const classess = useStyles();
  return (
    <React.Fragment>
      <h1>Posts</h1>
      <Post />
      <Post />
    </React.Fragment>
  );
}
