import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./checkout.css";
import AlertInvertedColors from "./successToast";

const OtpForm = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setPaymentSuccess(true);
  };

  // useEffect(() => {
  //   if (paymentSuccess) {
  //     // After 5 seconds, navigate to the homepage
  //     setTimeout(() => {
  //       history.push("/");
  //     }, 5000); // Change 500000 to 5000 (5 seconds)
  //   }
  // }, [paymentSuccess, history]);

  useEffect(() => {
    if (paymentSuccess) {
      // After 5 seconds, navigate to the homepage
      setTimeout(() => {
        // "Payment successful" message to the API endpoint
        fetch("http://localhost:3001/payment_stat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: "Payment successful" }),
        })
          .then((response) => {
            if (response.ok) {
              console.log("Payment status posted successfully!");
            } else {
              console.error("Error posting payment status:", response.statusText);
            }
          })
          .catch((error) => {
            console.error("Error posting payment status:", error);
          });

        history.push("/home");
      }, 5000); // (5 seconds)
    }
  }, [paymentSuccess, history]);

  return (
    <div>
      <div className="col-md-6 successToast">{paymentSuccess && <AlertInvertedColors />}</div>
      <form className="row g-3 address" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputAddress" className="form-label">
            Enter the OTP
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            name="address"
            required
            placeholder="6 digit OTP"
            pattern="[0-9]{6}"
            title="OTP should be 6 digits long"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default OtpForm;
