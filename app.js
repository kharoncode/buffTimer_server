const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
   .connect(
      'mongodb+srv://sharoncode:B2Xu5i5eeeOAkzDd@bufftimer.upogigw.mongodb.net/?retryWrites=true&w=majority&appName=BuffTimer',
      { useNewUrlParser: true, useUnifiedTopology: true }
   )
   .then(() => console.log('MongoDB Connected !'))
   .catch(() => console.log('Error to connect MongoDB'));

app.use(express.json());
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
   );
   res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, PATCH, OPTIONS'
   );
   next();
});
app.use('/api/auth', usersRoutes);

module.exports = app;
