/** @format */
let express = require("express");
let router = express.Router();

//import {getPost } from "../controllers/post"
const { getPost, createPost } = require("../controllers/post");
router.get("/", getPost);
router.get("/cr", createPost);

module.exports = router;
