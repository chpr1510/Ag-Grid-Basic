
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import { useRef } from 'react';

export default function Table() {

  let gridApi = useRef();
  const rowData = [
    {
      "productId": "1",
      "productName": "Pens",
      "quantity": 100,
      "price": 5,
    },
    {
      "productId": "2",
      "productName": "Notes",
      "quantity": 50,
      "price": 50,
    },
    {
      "productId": "3",
      "productName": "Biscuits",
      "quantity": 150,
      "price": 20,
    },
    {
      "productId": "4",
      "productName": "Bags",
      "quantity": 200,
      "price": 75,
    },
    {
      "productId": "5",
      "productName": "Bottle",
      "quantity": 60,
      "price": 99,
    },


  ];
  const columnDefs = [
    { field: 'productId', filter: true, sortable: true, headerName: "Product ID", minWidth: 100 },
    { field: 'productName', filter: true, sortable: true, headerName: "Product Name", minWidth: 300 },
    { field: 'quantity', filter: true, sortable: true, headerName: "Quantity", minWidth: 150 },
    { field: 'price', filter: true, sortable: true, headerName: "Price", minWidth: 150 },
  ];

  const onGridReady = (params) => {
    gridApi = params.api
  }

  // to export data
  const onExportData = () => {
    gridApi.exportDataAsCsv();
  }

  // to display filtered data
  const onFilterChanged = () => {
    let rowData = [];
    gridApi.forEachNodeAfterFilter(node => {
      rowData.push(node.data);
    });
    console.log(rowData);
  }

  // to unfilter the data
  const unFilterAll = () => {
    gridApi.setFilterModel(null);
  }

  return (
    <div>
      <button onClick={() => onExportData()}>export data</button>
      <button onClick={() => unFilterAll()}>Unfilter</button>
      <div
        className='ag-theme-quartz-dark'
        style={{ height: 400, width: 900 }}
      >
        <AgGridReact
          useRef={gridApi}
          rowData={rowData}
          columnDefs={columnDefs}
          onFilterChanged={onFilterChanged}
          onGridReady={onGridReady} />
      </div>
    </div>

  );
};

