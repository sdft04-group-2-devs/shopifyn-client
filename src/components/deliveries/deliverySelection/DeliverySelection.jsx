/* eslint-disable no-unused-vars */
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import './DeliverySelection.css'
import mailjet from 'node-mailjet';

const mailjetClient = mailjet.connect('352bb8e0120c8880cdd76d3ad2d16a82', 'fd0e850b2a461f5746571bcc796551f0');

const DeliverySelection = () => {
  return (
    <div className='select-delivery-method'>
        <FormControl>
            <FormLabel id='demo-radio-buttons-group-label'>Delivery Options</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="standard"
                name="radio-buttons-group">
            <FormControlLabel value="standard" control={<Radio />} label="Standard: 5-7 business days: free" />
            <FormControlLabel value="2-4-business-days" control={<Radio />} label="2-4 business days: Ksh. 300" />
            <FormControlLabel value="same-day" control={<Radio />} label="Same day delivery: Ksh. 600" />
        </RadioGroup>
    </FormControl>
    </div>
  )
}

export default DeliverySelection