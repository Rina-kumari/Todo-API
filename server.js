const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

app.get("/", (req, res) => {
    res.send("hello from node")
})

// db connect
mongoose.connect('mongodb://localhost/Todoassignment',
 {useNewUrlParser: true,
  useUnifiedTopology: true }
 )
 .then(()=>console.log('DB connected'))
 
 app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

 const TodoRoutes = require('./Routes/TodoRoute');

 app.use('/', TodoRoutes);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})