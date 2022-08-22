const express = require("express");
const router = express.Router();
const signupTemplateCopy = require(".../models/signupmodels");
const { request } = require("express");

router.post("/signup", (req, res) => {
  const signedUpUser = new signupTemplateCopy({
    //make new schema from models.js and input values into it
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
