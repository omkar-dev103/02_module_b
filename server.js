const mongoose = require('mongoose');
const express = require('express')


const uri = 'mongodb+srv://gamingflash003_db_user:IaDD2XrdZ1yosnyK@cluster0.ktw2f9n.mongodb.net/?appName=Cluster0';
// const uri = 'mongodb://localhost:27017/';
const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://gamingflash003_db_user:IaDD2XrdZ1yosnyK@cluster0.ktw2f9n.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connect"))
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log("Mongodb Connected")
})