import React, { useState } from 'react';

const PAYU_BASE_URL = 'https://test.payu.in/_payment'; // For production
// For testing use: https://test.payu.in/_payment

function PayUPayment() {
  const [formData, setFormData] = useState({
    key: 'iV8n95',
    txnid: `TXN${Date.now()}`, // Unique transaction ID
    amount: '1.00',
    productinfo: 'Test Product',
    firstname: 'John',
    email: 'john@example.com',
    phone: '9999999999',
    surl: 'http://localhost:3000/user/dashboard',  // Success URL
    furl: 'http://localhost:3000/user/addtocard',  // Failure URL
  });

  const [hash, setHash] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateHash = async () => {
    const response = await fetch('http://localhost:7000/generate-hash', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setHash(data.hash);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await generateHash();

    // console.log("Generated hash:", hash);
    // debugger
    // After hash is generated, submit form programmatically
    setTimeout(() => {
      document.getElementById('payu-form').submit();
    }, 1000);
  };

  return (
    <>
      <form
        id="payu-form"
        method="post"
        action={PAYU_BASE_URL}
      >
        <input type="hidden" name="key" value={formData.key} />
        <input type="hidden" name="txnid" value={formData.txnid} />
        <input type="hidden" name="amount" value={formData.amount} />
        <input type="hidden" name="productinfo" value={formData.productinfo} />
        <input type="hidden" name="firstname" value={formData.firstname} />
        <input type="hidden" name="email" value={formData.email} />
        <input type="hidden" name="phone" value={formData.phone} />
        <input type="hidden" name="surl" value={formData.surl} />
        <input type="hidden" name="furl" value={formData.furl} />
        <input type="hidden" name="hash" value={hash} />
        <button type="submit" onClick={handleSubmit}>
        </button>
      </form>
    </>
  );
}

export default PayUPayment;
