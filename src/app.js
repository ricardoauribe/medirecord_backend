import express from 'express';

const app = express();

app.get('/', (req, res)=> res.send('Hello!'));

app.get('/member', (req, res)=> res.send('Hello!'));

app.get('/appoitment', (req, res)=> res.send('Hello!'));

app.get('/history', (req, res)=> res.send('Hello!'));

app.get('/bill', (req, res)=> res.send('Hello!'));

app.get('/query', (req, res)=> res.send('Hello!'));

app.listen(8000, () => console.log('Listening on port 8000'));