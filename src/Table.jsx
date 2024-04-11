
import { AgGridReact } from 'ag-grid-react';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { TiExport } from "react-icons/ti";
import { MdFilterAltOff } from "react-icons/md";


function Table(props, ref) {

  let gridApi = useRef();

  useImperativeHandle(ref, () => {
    console.log("from imperative handler");
    return {
      unFilter: () => unFilterAll(),
      filterExport: () => onExportData(),
    };
  })

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
    { field: 'productName', filter: true, sortable: true, headerName: "Product Name", minWidth: 300, floatingFilter: true, suppressHeaderMenuButton: true, },
    { field: 'quantity', sortable: true, headerName: "Quantity", minWidth: 150 },
    { field: 'price', filter: true, sortable: true, headerName: "Price", minWidth: 150 },
  ];

  const onGridReady = (params) => {
    gridApi = params.api
  }

  // to export data
  let params = {
    "fileName": "product.csv"
  }
  const onExportData = () => {
    gridApi.exportDataAsCsv(params);
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
     
      {/* <MdFilterAltOff size={50} style={{ cursor: 'pointer' }} onClick={() => unFilterAll()}></MdFilterAltOff> */}
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

export default forwardRef(Table);