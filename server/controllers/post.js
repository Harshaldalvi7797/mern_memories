/** @format */
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const postMessage = require("../models/postMessage");

const getPost = async (req, res) => {
  try {
    res.send("okkkk");
    const postMessages = await postMessage.find();
    res.status(200).json(postMessages);
    console.log(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new postMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: { error } });
  }
};
module.exports = { getPost, createPost };
