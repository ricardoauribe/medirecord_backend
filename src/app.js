import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';

const app = express();

//Setting up where the static content is
//This is what we build from the react app at the front end
app.use(express.static(path.join(__dirname, '/build')));

//This will tell the app that the requests may have a body to be parsed
app.use(bodyParser.json());

//Function to handle DB connection
//This will handle regular DB connection and validation and will receive a function to execute an operation over the DB
//The function itself is async and will requiere an await on the received function (operations)
//The function also receives the res object to be able to send the response over the catch section
const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true});
    const db = client.db('med-records');

    await operations(db);
    client.close();

  } catch (error) {
    res.status(500).json({message: 'Error connecting to db', error});
  }
}

app.get('/', (req, res)=> res.send('Welcome to the family medical record!'));

//Get all existing members
//TODO: Limit the query to a fixed number

app.get('/api/members', async (req, res)=> {

  withDB( async (db) => {
    const memebersCollection = await db.collection('members').find({}).toArray()
    res.status(200).json(memebersCollection);

  }, res);
});

//Get data from a given document(member) in Mongo DB
//This calls  withDB and sends a function to query the received article through params

app.get('/api/member/:name', async (req, res) => {

  withDB( async (db) => {

    const memberName = req.params.name;
    const memeberInfo = await db.collection('members').findOne({name: memberName});
    res.status(200).json(memeberInfo);
  
  }, res);
})


app.get('/appoitment', (req, res)=> res.send('Appointment Information!'));

app.get('/history', (req, res)=> res.send('History Records for a family member!'));

app.get('/bill', (req, res)=> res.send('Bill instance!'));

app.get('/query', (req, res)=> res.send('Section to make complex queries!'));

app.listen(8000, () => console.log('Listening on port 8000'));