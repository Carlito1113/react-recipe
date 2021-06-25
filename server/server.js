
const express = require('express')
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const port = 3001
require("dotenv").config()

app.use(
    cors({
        origin: "*"
    })
)
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI || process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on("error", err => console.error(error))
db.once("open", () => console.log("connected to db"))
=======
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', err => console.error(error));
db.once('open', () => console.log('connected to db'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
