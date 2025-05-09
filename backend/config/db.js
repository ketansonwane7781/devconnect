// MongoDB configuration (use Mongoose)
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/devconnect', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error: ' + err));