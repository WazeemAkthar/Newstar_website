import React, { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

const OrderForm = () => {
  const [order, setOrder] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    items: [],
    specialInstructions: "",
    paymentMethod: "",
  });

  const [selectedItems, setSelectedItems] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrder((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleItemChange = (event) => {
    setSelectedItems(event.target.value);
    setOrder((prevState) => ({ ...prevState, items: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your code to submit the order goes here
  };

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Place Your Order
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={order.name}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={order.email}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone"
          name="phone"
          value={order.phone}
          onChange={handleInputChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          value={order.address}
          onChange={handleInputChange}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="item-select-label">Select Items</InputLabel>
          <Select
            labelId="item-select-label"
            id="item-select"
            multiple
            value={selectedItems}
            onChange={handleItemChange}
            required
          >
            <MenuItem value="Cookie">Cookie</MenuItem>
            <MenuItem value="Cake">Cake</MenuItem>
            <MenuItem value="Cupcake">Cupcake</MenuItem>
            {/* Add more items here */}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          margin="normal"
          label="Special Instructions"
          name="specialInstructions"
          value={order.specialInstructions}
          onChange={handleInputChange}
          multiline
          rows={4}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="payment-select-label">Payment Method</InputLabel>
          <Select
            labelId="payment-select-label"
            id="payment-select"
            value={order.paymentMethod}
            onChange={handleInputChange}
            required
          >
            <MenuItem value="Credit Card">Credit Card</MenuItem>
            <MenuItem value="PayPal">PayPal</MenuItem>
            {/* Add more payment methods here */}
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: "2rem" }}
        >
          Place Order
        </Button>
      </form>
    </Box>
  );
};

export default OrderForm;
