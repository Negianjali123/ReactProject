import express from 'express'
const app = express();
const PORT = 7000;
import Register from './models/Registration.js';

// app.get('/', (req, res) => {
//     res.send('Hello, Geeks!');
// });
//login page by axios 
app.post('/login', async (req, res) => {

    try {
      const { email, password } = req.body
      const user = await Register.findOne({ email, active: true  });
      if (!user) {
        return res.json({ success: false,message: 'User with this email does not exist', email: email });
      }
      else {
        if (user.password !== password) {
          return res.json({success: false,message: 'Invalid password', password: password });
        }
        else {
          await createSession(res, user._id.toString());
          return res.json({success: true,message: 'Login successful', user });
        }
      }
    } catch (err) {
      return res.json({success: false,message: 'Failed', details: err.message });
    }
  })
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});