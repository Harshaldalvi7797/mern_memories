/** @format */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const postRoutes = require("./routes/post");
// @ts-ignore
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
// @ts-ignore
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());

app.use("/posts", postRoutes);

const connection_url =
  "mongodb+srv://harshal:harshal7797@test-cluster.1swf7.mongodb.net/demo?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

//connection
mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`port running on port : ${PORT}`);
    });
  })
  .catch(error => {
    console.log(`${error} did not connect`);
  });
mongoose.set("useFindAndModify", false);
