// models/Registration.js
import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  designation: { type: String, required: true },
  active: { type: Boolean, default: true },
});

const register = mongoose.model('Register', registrationSchema);

export default register;


