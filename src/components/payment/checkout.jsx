import React, { useState, useEffect } from 'react';
import './checkout.css';
import { useHistory } from 'react-router-dom';

const CheckoutPage = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    payment_status: false,
    oid:''
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      history.push('/final-payment');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form className="row g-3 address" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputEmail4" name="name" required placeholder='Billing to: ' onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Contact number</label>
          <input type="text" className="form-control" id="inputPassword4" name="contactNumber" required pattern="[0-9]{10}" title="Contact number must be exactly 10 digits" onChange={handleInputChange} placeholder='phone-no' />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" name="address" required placeholder="Qr no, house number , etc" onChange={handleInputChange} />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" name="address2" required placeholder="sector, appartment ,streets" onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" required id="inputCity" name="city" placeholder='city' onChange={handleInputChange} />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select" name="state" onChange={handleInputChange}>
            <option selected>Choose...</option>
            <option>Jharkhand</option>
            <option>Odisha</option>
            <option>West Bengal</option>
            <option>Tamil Nadu</option>
            <option>Maharashtra</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input
            type="text"
            className="form-control"
            id="inputZip"
            name="zip"
            required
            pattern="[0-9]{6}"
            title="Zip code must be exactly 6 digits"
            placeholder='pin-code'
            onChange={handleInputChange}
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" name='termsChecked'required onChange={handleInputChange} />
            <label className="form-check-label" htmlFor="gridCheck">
              Read terms and conditions, return policy
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Proceed to payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;


