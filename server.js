const express = require('express');
const app = express();
const env = require('dotenv').config();
// require error handler 
require('./error-handler');

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
});

app.get('/', (req, res, next) => {
    return res.status(200).json({
        success: true,
        data: 'welcome to products api'
    });
});