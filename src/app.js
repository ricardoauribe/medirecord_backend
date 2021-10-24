import express from 'express';

const app = express();

app.get('/', (req, res)=> res.send('Welcome to the family medical record!'));

app.get('/member', (req, res)=> res.send('Member Information!'));

app.get('/appoitment', (req, res)=> res.send('Appointment Information!'));

app.get('/history', (req, res)=> res.send('History Records for a family member!'));

app.get('/bill', (req, res)=> res.send('Bill instance!'));

app.get('/query', (req, res)=> res.send('Section to make complex queries!'));

app.listen(8000, () => console.log('Listening on port 8000'));