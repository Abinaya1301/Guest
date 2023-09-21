//import logo from './logo.sv
import './Logform.css'
import Validation from './Validation';
import React,{ useState } from "react";
import axios from 'axios';
const Logform = () => {
    const [action,setAction]=useState("Login");
    const [values,setValues]=useState({
        Emailid:'',
        Password:'',
        Address:'',
        Age:'',
        PhoneNumber:'',
        Numberofrooms:'',
        Numberofguests:''
    })
    const [erroes,setErroes] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        setErroes(Validation(values));
        if(erroes.phoneno === "" && erroes.email==="" && erroes.password === ""){
            axios.post('https://localhost:8081/signup',values)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    }
    return (
        <div classname="container" >
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <input type="text" placeholder="Name" />
                </div>}
                <div className="input">
                    <input type="text" placeholder="Email Id" />
                </div>
                <div className="input">
                    <input type="text" placeholder="Password" />
                </div>
                <div className="input">
                    <input type="text" placeholder="Address" />
                </div>
                <div className="input">
                    <input type="text" placeholder="Age" />
                </div>
                <div className="input">
                    <input type="text" placeholder="Phone Number" />
                </div>
                <div className="input">
                    <input type="text" placeholder="Number of rooms" />
                </div>
                <div className="input">
                    <input type="text" placeholder="Number of guests" />
                </div>
                <center><button onClick={()=>alert('Submit')}><h4>Submit</h4></button></center>
                <div className="submit-container">
                    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div> 
                    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div>
        </div>
    );
}
export default Logform; 