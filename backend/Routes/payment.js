// server.js (or hashGenerator.js)
import express from 'express'
import bodyParser from 'body-parser';
import crypto from 'crypto';

const paymentRouter = express.Router();

const MERCHANT_KEY = 'iV8n95';
const SALT = 'HmY3XkAh3IyKZ775zzzlo6AtC28tk575';

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
    '', '', '', '', '', '', '', '', '',
    SALT,
  ].join('|');

  console.log("Hash sequence:", hashSequence); // Debugging line
  debugger;
  return crypto.createHash('sha512').update(hashSequence).digest('hex');
}

paymentRouter.post('/generate-hash', (req, res) => {
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

  res.json({ hash });
});

export default paymentRouter;


