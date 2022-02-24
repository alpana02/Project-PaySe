const express = require("express");
const cors = require('cors')
const app = express();
const port = 5000;


// For parsing application/json
app.use(express.json());

//for calling direct from browser
app.use(cors())

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hello");
});

//Available routes
app.use("/consent", require("./routes/consent"));



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});