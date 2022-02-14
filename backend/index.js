const express = require('express');
const routes = require('./routes');

const app = express();
const cors = require('cors');

app.use(cors());
app.use(routes);
app.use(express.json());

app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
});