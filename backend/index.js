import express from 'express'
const app = express();
import mongoose from 'mongoose';
const PORT = 7000;
import Register from './models/Registration.js';

import cors from 'cors'

app.use(cors({
  origin: 'http://localhost:3000',  // allow your React app origin
  credentials: true,                 // if you use cookies or auth headers
}));
app.use(express.json());
const uri = 'mongodb+srv://anegi:Anjali%401@anjali.xhwp36t.mongodb.net/anyProject?retryWrites=true&w=majority&appName=anjali';

// Replace with your actual connection string
mongoose.connect(uri)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.post('/login', async (req, res) => {
  
    try {
      const { email, password } = req.body
      console.log(req.body)
      const user = await Register.findOne({ email, active: true  });
      if (!user) {
      return res.status(404).json({ success: false,message: 'User with this email does not exist', email });
        // res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
      else {
        if (user.password !== password) {
          return res.status(404).json({success: false,message: 'Invalid password', password: password });
        }
        else {
          // await createSession(res, user._id.toString());
          return res.status(200).json({success: true,message: 'Login successful', user });
        }
      }
    } catch (err) {
      return res.status(500).json({success: false,message: 'Failed', details: err.message });
    }
  })
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});