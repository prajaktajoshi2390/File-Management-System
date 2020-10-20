import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, '/build')));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());

const con = mysql.createConnection({
    host     : 'mydbinstance.c4sckkbu6vld.us-east-2.rds.amazonaws.com',
    user     : 'mydbinstance',
    password : 'mydbinstance',
    database     : 'mydbinstance'
});
  
con.connect(function(err) {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }

    console.log('Connected to database.');
});

app.post('/fileUpload', (req, res) => {
    console.log('req', req.body);
    console.log('req', req.query);
    if (req.body.username && req.body.fileUploadedTime && req.body.fileUpdatedTime && req.body.fileDescription) {
        console.log('Request received');
        con.connect(function(err) {
            con.query(`insert into mydbinstance.FMSUsers (username, fileUploadedTime, fileUpdatedTime, fileDescription) values ('${req.body.username}',
            '${req.body.fileUploadedTime}', '${req.body.fileUpdatedTime}', '${req.body.fileDescription}')`, function(err, result, fields) {
                if (err) {
                    console.log('upload error----', err);
                    res.send(null);
                }
                if (result) res.send('File Upload Entry added to fatabase successfully');
                if (fields) console.log(fields);
            });
        });
    } else {
        console.log('Missing a parameter');
        res.send(null);
    }
});

app.post('/getFileList', (req, res) => {
    console.log('req', req.body);
    console.log('req', req.query);
    if (req.body.username) {
        console.log('Request received');
        const queryString = "select * from FMSUsers where username = ?";
        con.connect(function(err) {
            con.query(queryString, [req.body.username], function(err, result, fields) {
                if (err) res.send(null);
                if (result) {
                    console.log('result', JSON.stringify(result));
                    res.send(JSON.stringify(result));
                }
                if (fields) console.log(fields);
            });
        });
    } else {
        console.log('Missing username');
        res.send(null);
    }
});

app.get('/getFullFileList', (req, res) => {
    console.log('Request received');
    const queryString = "select * from FMSUsers";
    con.connect(function(err) {
        con.query(queryString, function(err, result, fields) {
            if (err) res.send(null);
            if (result) {
                console.log('result', JSON.stringify(result));
                res.send(JSON.stringify(result));
            }
            if (fields) console.log(fields);
        });
    });
});

app.post('/deleteFile', (req, res) => {
    console.log('req', req.body);
    console.log('req', req.query);
    if (req.body.username && req.body.filename) {
        console.log('Request received');
        const queryString = "DELETE FROM FMSUsers WHERE username=? and fileDescription=?";
        con.connect(function(err) {
            con.query(queryString, [req.body.username, req.body.filename], function(err, result, fields) {
                if (err) res.send(null);
                if (result) {
                    console.log('result', JSON.stringify(result));
                    res.send('Row Delete Successful');
                }
                if (fields) console.log(fields);
            });
        });
    } else {
        console.log('Missing parameters');
    }
});


app.post('/fileUpload', (req, res) => {
    console.log('req', req.body);
    console.log('req', req.query);
    if (req.body.username && req.body.fileUploadedTime && req.body.fileUpdatedTime && req.body.fileDescription) {
        console.log('Request received');
        con.connect(function(err) {
            con.query(`insert into mydbinstance.FMSUsers (username, fileUploadedTime, fileUpdatedTime, fileDescription) values ('${req.body.username}',
            '${req.body.fileUploadedTime}', '${req.body.fileUpdatedTime}', '${req.body.fileDescription}')`, function(err, result, fields) {
                if (err) {
                    console.log('upload error----', err);
                    res.send(null);
                }
                if (result) res.send('File Upload Entry added to fatabase successfully');
                if (fields) console.log(fields);
            });
        });
    } else {
        console.log('Missing a parameter');
        res.send(null);
    }
});
 
app.get('*', () => {
    res.sendFile(path.join(__dirname + 'build/index.html'));
});

app.listen(8000, () => {
    console.log('Port 8000');
});
