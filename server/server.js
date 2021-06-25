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

<<<<<<< HEAD
app.get('/', (req, res) => {
  res.send('Hellasdasdo!');
});
=======
const recipebookRouter = require("./routes/Recipebook")

app.use("/api/recipebook", recipebookRouter)
>>>>>>> a3d50b58c2de1f290b5e0e273d2229458dc34aed

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
