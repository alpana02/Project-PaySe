const express = require("express");
const router = express.Router();

//
router.post("/createconsent", async (req, res) => {
    try {
        
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Oops internal server error occured");
    }
  });

  module.exports = router;