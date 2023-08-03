import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import './PaymentSection.css'

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