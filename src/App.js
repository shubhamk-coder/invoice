import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceGrid from "./components/InvoiceGrid";
import "./App.css";

const App = () => {
  const [rows, setRows] = useState([]);

  const handleAddRow = (fields) => {
    const newRow = {
      id: rows.length + 1,
      ...fields,
    };
    setRows((prevRows) => [...prevRows, newRow]);
  };

  const handleEditRow = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <InvoiceForm onSubmit={handleAddRow} />
      </Grid>
      <Grid item xs={12}>
        <InvoiceGrid rows={rows} onEdit={handleEditRow} />
      </Grid>
    </Grid>
  );
};

export default App;
