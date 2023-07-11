import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const PaymentForm = () => {
  const [payment, setPayment] = useState({
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPayment((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your code to process the payment goes here
    // Show the order confirmation to the user
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Payment and Checkout
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Card Number"
          name="cardNumber"
          value={payment.cardNumber}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Cardholder Name"
          name="cardName"
          value={payment.cardName}
          onChange={handleInputChange}
          required
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <FormControl sx={{ width: "calc(50% - 0.5rem)" }}>
            <InputLabel id="expiry-month-label">Expiry Month</InputLabel>
            <Select
              labelId="expiry-month-label"
              id="expiry-month"
              name="expiryMonth"
              value={payment.expiryMonth}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="01">01</MenuItem>
              <MenuItem value="02">02</MenuItem>
              {/* Add more months here */}
            </Select>
          </FormControl>
          <FormControl sx={{ width: "calc(50% - 0.5rem)" }}>
            <InputLabel id="expiry-year-label">Expiry Year</InputLabel>
            <Select
              labelId="expiry-year-label"
              id="expiry-year"
              name="expiryYear"
              value={payment.expiryYear}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="2022">2022</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
              {/* Add more years here */}
            </Select>
          </FormControl>
        </Box>
        <TextField
          fullWidth
          margin="normal"
          label="CVV"
          name="cvv"
          value={payment.cvv}
          onChange={handleInputChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: "2rem" }}
        >
          Pay Now
        </Button>
      </form>
    </Box>
  );
};

export default PaymentForm;
