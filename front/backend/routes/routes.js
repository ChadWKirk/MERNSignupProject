const express = require("express");
const router = express.Router();
const signupTemplateCopy = require(".../models/signupmodels");

router.post("/signup", (req, res) => {
  const signedUpUser = new signupTemplateCopy({
    //make new schema from models.js and input values into it
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  signedUpUser
    .save() //update signedUpUser. returns a promise.
    .then((data) => {
      //if save succeeds, then res.json the new signedUpUser (data is the new saved doc)
      res.json(data);
    })
    .catch((error) => {
      //if save fails, res.json error
      res.json(error);
    });
});

module.exports = router;
