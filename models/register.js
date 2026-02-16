const express = require('express');
const app = express();

app.use("express.json");

app.get('/hello', (req, res) => {
  res.send('hello world')
})



// app.post('/auth/register', async (req, res) => {
    
// });



app.post('/requests/:id/comments', async (req, res) => {
 "status":true;
 "data":[]
});
