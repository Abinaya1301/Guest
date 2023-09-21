import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { useState } from "react";
function ReactDatePicker(){
    const[selectDate]=useState(null);
    const handleDateChange=(date)=>{
        selectDate=(date);
    }

    return(
        <div>
            <h2>Date</h2>
            <DatePicker selected={selectDate} onChange={handleDateChange} dateFormat={"DD/MM/YYYY" } />
        </div>
        
    )
}
export default ReactDatePicker;