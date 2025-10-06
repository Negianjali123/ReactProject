import express from 'express'
const app = express();
import mongoose from 'mongoose';
const PORT = 7000;
import { createSession} from './pages/session.js';
import { authenticateUser } from './pages/middleware/auth.js';
import userRouter  from './Routes/dashbord.js';
import paymentRouter from './Routes/payment.js';
import Register from './models/Registration.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import crypto from 'crypto';
const MERCHANT_KEY = 'iV8n95';
const SALT = 'HmY3XkAh3IyKZ775zzzlo6AtC28tk575';
app.use(cookieParser());
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
  app.get('/session-check', async (req, res) => {
   
    try {
      if (req.cookies && req.cookies.session) {
        // console.log("Session cookie found:", req.cookies.session);
          // res.clearCookie('session', {
          //   httpOnly: true,
          //   secure: false,
          //   sameSite: 'lax',
          //   path: '/',
          // });
      
      return res.status(200).json({ success: true, message: 'dashboard'});
    }else{
      return res.status(200).json({ success: true, message: 'home' });
    }
   } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  })

app.post('/login', async (req, res) => {
    try {
     
      const { email, password } = req.body
      // console.log(req.body)
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
          await createSession(res, user._id.toString());
          return res.status(200).json({success: true,message: 'Login successful', user });
        }
      }
    } catch (err) {
      return res.status(500).json({success: false,message: 'Failed', details: err.message });
    }
  })

  app.use('/user', userRouter);
  // app.use('/payment', paymentRouter);
  // server.js (or hashGenerator.js)
 
  
 
  
  function generateHash(data) {
    /*
      Hash string format:
      hashString = key|txnid|amount|productinfo|firstname|email|||||||||||salt
    */
    const hashSequence = [
      data.key,
      data.txnid,
      data.amount,
      data.productinfo,
      data.firstname,
      data.email,
      '', '', '', '', '', '', '', '', '','',      // 10 empty values
      SALT,
    ].join('|');
  
    // console.log("Hash sequence:", hashSequence); // Debugging line
    // debugger;
    return crypto.createHash('sha512').update(hashSequence).digest('hex');
  }
  
  app.post('/generate-hash', (req, res) => {
    console.log("Request body for hash generation:", req.body);
    const paymentData = req.body;
    // console.log("Received payment data for hash generation:", paymentData);
  
    // Validate required fields here (amount, txnid, etc)
  
    const hash = generateHash({
      key: MERCHANT_KEY,
      txnid: paymentData.txnid,
      amount: paymentData.amount,
      productinfo: paymentData.productinfo,
      firstname: paymentData.firstname,
      email: paymentData.email,
    });
  // console.log("Received payment data for hash generation:", paymentData);
    res.json({ hash });
  });
  
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});