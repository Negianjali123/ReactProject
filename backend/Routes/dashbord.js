import express from 'express';
import { authenticateUser } from '../pages/middleware/auth.js';

const userRouter = express.Router();

userRouter.get('/dashboard', authenticateUser, async (req, res) => {
    try {
      return res.status(200).json({ success: true, message: 'Your profile is here'});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  });
  userRouter.get('/add-card', authenticateUser, async (req, res) => {
    try {
      return res.status(200).json({ success: true, message: 'Add to card page'});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  });
  userRouter.get('/logout',authenticateUser,async (req, res)=>{
    console.log("Logout route hit");
    res.clearCookie('session', { path: '/' });
    return res.json({ success: true, message: 'session is deleted' });
  });
  
  export default userRouter;