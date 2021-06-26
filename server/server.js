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

db.on("error", err => console.error(err))
db.once("open", () => console.log("connected to db"))

const recipebookRouter = require("./routes/Recipebook")
app.use("/api/recipebook", recipebookRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// I used the rest client extension to test the requests
////// this is for testing purposes, real users information will be safely stored within database
const bcrypt = require('bcrypt')
const users = [{ name: "mike", password: "password" }]

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    console.log(salt)
    console.log(hashedPassword)
    const user = { name: req.body.name, password: hashedPassword }
    users.push(user)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})

app.post('/users/login', async (req, res) => {
  const user = users.find(user => user.name === req.body.name)
  if (user === null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if (bcrypt.compare(req.body.password, user.password)) {
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})
///////////////////////////////////////////////////////