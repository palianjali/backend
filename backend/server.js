const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
require('dotenv').config();

const bcrypt = require('bcrypt');

const auth = require('./middleware/auth')

const app = express();
app.use(cors());
app.use(express.json());

const signupRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');

app.use('/api/signup', signupRoutes);
app.use('/api/login', loginRoutes);


app.get('/api/profile', auth, (req, res) => {
  res.send(`Welcome, user ID: ${req.user.userId}`);
});


mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(()=>console.log('MongoDB connected'))
  .catch(err=>console.log(err)
  )
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, ()=>console.log(`server running on port ${PORT}`)
  )