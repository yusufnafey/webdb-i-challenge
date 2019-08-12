const express = require("express");
const db = require("../data/dbConfig.js");
const router = express.Router();

// adding first() in get /

router.get("/", (req, res) => {
  db.select("id", "name", "budget")
    .from("accounts")
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error retrieving the accounts." });
    });
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {
  const account = req.body;

  db("accounts")
    .insert(account)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error adding the account." });
    });
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
