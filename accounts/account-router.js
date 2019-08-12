const express = require("express");
const db = require("../data/dbConfig.js");
const router = express.Router();

// adding first() in get /
// for post why is it .insert(account, 'id') in guided
// put is not returning
// delete not working

router.get("/", (req, res) => {
  db("accounts")
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error retrieving the accounts." });
    });
});

router.get("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .first()
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res.status(500).json({
        message:
          "There was an error retrieving the account with the specified ID."
      });
    });
});

router.post("/", (req, res) => {
  const account = req.body;

  db("accounts")
    .insert(account)
    .then(account => {
      res.status(200).json(account);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error adding the account." });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db("accounts")
    .where({ id })
    .update(changes)
    .then(count => {
      console.log(count);
      if (count > 0) {
        res.status(200).json(count);
      } else {
        res
          .status(404)
          .json({ message: "There was an error updating the account." });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error getting the account information. "
      });
    });
});

router.delete("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if (count > 0) {
        res.status(200).json(count);
      } else {
        res
          .status(404)
          .json({ message: "There was an error deleting the account." });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error getting the account information. "
      });
    });
});

module.exports = router;
