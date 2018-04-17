const functions = require('firebase-functions');
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());

app.get('/code/:filename/:ext', (req, res) => {
    const pathName = req.params.path;
    const fileName = req.params.filename;
    const extension = req.params.ext;
    console.log(pathName+"/"+fileName +"." + extension);
    fs.readFile(path.join(__dirname, `/code/${fileName}.${extension}`), (err, data) => {
        if (err)
            res.sendStatus(404);
        else
            res.send(data);
    });
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
});

exports.app = functions.https.onRequest(app);
