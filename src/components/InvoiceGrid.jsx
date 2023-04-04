import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "qty", headerName: "Qty", width: 100 },
  { field: "price", headerName: "Price", width: 120 },
  { field: "discountPercent", headerName: "Discount %", width: 150 },
  { field: "discount", headerName: "Discount", width: 120 },
  { field: "taxPercent", headerName: "Tax %", width: 120 },
  { field: "tax", headerName: "Tax", width: 120 },
  { field: "totalPrice", headerName: "Total Price", width: 150 },
];

const InvoiceGrid = ({ rows, onEdit }) => {
  const [selectionModel, setSelectionModel] = useState([]);

  const handleSelectionModelChange = (newSelection) => {
    setSelectionModel(newSelection.selectionModel);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        selectionModel={selectionModel}
        onSelectionModelChange={handleSelectionModelChange}
        onEditCellChangeCommitted={({ id, field, props }) =>
          onEdit(id, field, props.value)
        }
      />
    </div>
  );
};

export default InvoiceGrid;
