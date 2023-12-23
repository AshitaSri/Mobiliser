require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const helmet = require('helmet');
app.use(helmet());

const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

const UserModel = require('./models/Employee');
const Approved = require('./models/Approved');

// Update your MongoDB connection string here
const mongoDBURI = 'mongodb+srv://ashitasri0405:0405@candidateregis.utxunqx.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const PORT = process.env.PORT || 3001;

app.post('/register', async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

app.get('/students', async (req, res) => {
  try {
    
    const students = await UserModel.find({});
    res.send({status:"ok" , data: students});
  } catch (error) {
    
    console.error('Error fetching candidates:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/updateCandidate', async (req, res) => {
  const { userId, updatedData } = req.body;
  console.log('User ID:', userId);
  console.log('Updated Data:', updatedData);

  try {
    // Implement logic to update the candidate data in the database
    await UserModel.findByIdAndUpdate(userId, updatedData);
    return res.json({ status: "ok", data: 'Candidate updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "error", error: 'Internal Server Error' });
  }
});

app.post("/deleteUser", async (req, res) => {
  const { userid } = req.body;
  try {
    await UserModel.deleteOne({ _id: userid });
    res.send({ status: "Ok", data: "Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "error", data: "Internal Server Error" });
  }
});

app.post("/approveUser", async (req, res)=>{;
  const { userId, approvalData} = req.body;
  console.log('User ID:', userId);
  console.log('approval Data:', approvalData);

  try{
    const newUser = new Approved({...approvalData});

    const savedUser = await newUser.save();
    console.log('User saved to approval database:', savedUser);
    res.status(201).json(savedUser);

  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
