import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useHistory } from 'react-router-dom'; // Import useHistory to handle navigation

import './checkout.css';

const FinalPaymentPage = () => {
  const history = useHistory();

  const handlePaymentMethodSelect = (event) => {
    
    history.push('/paymentForm');
  };

  return (
    <div className='payMethod'>
      <h2>Pay with</h2>
      <p>Please select one of the payment options:</p>
      <Box sx={{ minWidth: 240 }}>
        <RadioGroup
          aria-labelledby="example-payment-channel-label"
          overlay
          name="example-payment-channel"
          defaultValue="Credit Card"
          onClick={handlePaymentMethodSelect} // Call the function when a payment method is selected
        >
          <List
            component="div"
            variant="outlined"
            sx={{
              borderRadius: '12px',
              boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
              bgcolor: 'background.body',
            }}
          >
            {['Credit Card', 'Debit Card', 'Gift card'].map((value, index) => (
              <React.Fragment key={value}>
                {index !== 0 && <Divider />}
                <ListItem button>
                  <Radio value={value} label={value} />
                  <Typography>{value}</Typography>
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </RadioGroup>
      </Box>
    </div>
  );
};

export default FinalPaymentPage;
