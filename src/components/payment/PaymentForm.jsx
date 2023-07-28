import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useHistory } from 'react-router-dom'; // Import useHistory to handle navigation

import './checkout.css';
const PaymentForm = () => {
  const history = useHistory();

  const handlePaymentMethodSelect = (event) => {
    
    history.push('/otpForm');
  };
  return (
    <div>
      <form className="row g-3 address" onSubmit={handlePaymentMethodSelect}>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Name on card</label>
          <input type="text" className="form-control" id="inputAddress" name="address" required placeholder="Name on the card"  />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">card number</label>
          <input type="text" className="form-control" id="inputAddress2" name="address2" required placeholder="Enter the 16 digit card number" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputCity" className="form-label">Expiry month</label>
          <select id="inputState" className="form-select" name="state" required >
            <option selected>Choose...</option>
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </select>
         
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">Expiry Year</label>
          <select id="inputState" className="form-select" name="state" required>
            <option selected>Choose...</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
            <option>2028</option>
          </select>
        </div>
        {/* <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">OTP</label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            name="zip"
            required
            pattern="[0-9]{6}"
            title="OTP must be exactly 6 digits"
            placeholder='Otp sent to your mobile'
          />
        </div> */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Get otp
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm
