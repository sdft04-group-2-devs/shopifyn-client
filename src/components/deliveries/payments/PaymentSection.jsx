/* eslint-disable no-unused-vars */
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import './PaymentSection.css'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
//import mailjet from 'node-mailjet';

//const mailjetClient = mailjet.connect('352bb8e0120c8880cdd76d3ad2d16a82', 'fd0e850b2a461f5746571bcc796551f0');

const PaymentSection = () => {
    const [paymentMethod, setPaymentMethod] = useState('delivery');
    const [showCardInput, setShowCardInput] = useState(false);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setShowCardInput(event.target.value === 'card');
  };

  return (
    <div className='select-payment-method'>
        <FormControl>
            <FormLabel id='demo-radio-buttons-group-label'>Payment Options</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={paymentMethod}
                name="radio-buttons-group"
                onChange={handlePaymentMethodChange}
                >
            <FormControlLabel value="delivery" control={<Radio />} label="Pay on Delivery" />
            <FormControlLabel value="mpesa" control={<Radio />} label="Pay with M-pesa" />
            <FormControlLabel value="card" control={<Radio />} label="Pay with Credit/Debit Card" />
        </RadioGroup>
    </FormControl>
    {showCardInput && (
        <div className='card-details'>
          <TextField
            label='Card Number'
            variant='outlined'
            className='card-input'
            fullWidth
            required
          />
          <div className='card-details-row'>
            <TextField
              label='MM/YY'
              variant='outlined'
              className='card-input'
              required
            />
            <TextField
              label='CVV'
              variant='outlined'
              className='card-input'
              required
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PaymentSection