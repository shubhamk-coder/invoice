import React, { useState, useEffect } from "react";
import { TextField, Grid } from "@material-ui/core";

const InvoiceForm = ({ onSubmit }) => {
  const [fields, setFields] = useState({
    qty: "",
    price: "",
    discountPercent: "",
    discount: "",
    taxPercent: "",
    tax: "",
    totalPrice: "",
  });

  useEffect(() => {
    const calculateDiscountPercent = () => {
      const discountPercent = (fields.discount / fields.price) * 100 || "";
      setFields((prevFields) => ({ ...prevFields, discountPercent }));
    };
    calculateDiscountPercent();
  }, [fields.discount, fields.price]);

  useEffect(() => {
    const calculateDiscount = () => {
      const discount = (fields.discountPercent / 100) * fields.price || "";
      setFields((prevFields) => ({ ...prevFields, discount }));
    };
    calculateDiscount();
  }, [fields.discountPercent, fields.price]);

  useEffect(() => {
    const calculateTaxPercent = () => {
      const taxPercent = (fields.tax / fields.price) * 100 || "";
      setFields((prevFields) => ({ ...prevFields, taxPercent }));
    };
    calculateTaxPercent();
  }, [fields.tax, fields.price]);

  useEffect(() => {
    const calculateTax = () => {
      const tax = (fields.taxPercent / 100) * fields.price || "";
      setFields((prevFields) => ({ ...prevFields, tax }));
    };
    calculateTax();
  }, [fields.taxPercent, fields.price]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice = fields.price - fields.discount + fields.tax || "";
      setFields((prevFields) => ({ ...prevFields, totalPrice }));
    };
    calculateTotalPrice();
  }, [fields.qty, fields.price, fields.discount, fields.tax]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({ ...prevFields, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(fields);
    setFields({
      qty: "",
      price: "",
      discountPercent: "",
      discount: "",
      taxPercent: "",
      tax: "",
      totalPrice: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <TextField
            name="qty"
            label="Qty"
            variant="outlined"
            fullWidth
            value={fields.qty}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="price"
            label="Price"
            variant="outlined"
            fullWidth
            value={fields.price}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="discountPercent"
            label="Discount %"
            variant="outlined"
            fullWidth
            value={fields.discountPercent}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="discount"
            label="Discount"
            variant="outlined"
            fullWidth
            value={fields.discount}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="taxPercent"
            label="Tax %"
            variant="outlined"
            fullWidth
            value={fields.taxPercent}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="tax"
            label="Tax"
            variant="outlined"
            fullWidth
            value={fields.tax}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            name="totalPrice"
            label="Total Price"
            variant="outlined"
            fullWidth
            value={fields.totalPrice}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <button type="submit">Add</button>
        </Grid>
      </Grid>
    </form>
  );
};

export default InvoiceForm;
