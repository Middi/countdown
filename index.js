const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// DB Config
const db = require('./keys').mongoURI;


// Use Routes
app.use('/api/items', items)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});  

// Connect to Mongo
mongoose.connect(db || process.env.mongoURI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));