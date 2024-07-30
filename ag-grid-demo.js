import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"
import React, { useState } from "react";
import { useMemo } from 'react';

const GridDemo = () =>{
    const rowData = [
        {Make:"Tesla",Model: "Model Y", Price:64950,Electric:true},
        {Make:"Ford",Model: "F-Series", Price:33850,Electric:false},
        {Make:"Toyota",Model: "Corolla", Price:29600,Electric:false},
    ]
    const colDefs = [
        {field:"Make"},
        {field:"Model"},
        {field:"Price"},
        {field:"Electric"},
    ]
    const defaultColDef = useMemo<colDefs>(() => {
      return {
        editable: true,
        enableRowGroup: true,
        enablePivot: true,
        enableValue: true,
        sortable: true,
        resizable: true,
        filter: true,
        flex: 1,
        minWidth: 100,
      };
    }, []);

    return(
        <div className={"ag-theme-quartz"}
style={{
    height: "90vh",
    width: "100%"
  }}
>
    <AgGridReact
    rowData={rowData}
    columnDefs={colDefs}
    defaultColDef={defaultColDef}
    pagination={true}
    />

   </div>
    )
}

export default GridDemo