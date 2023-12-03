import React, { useState } from "react"
import style from "./home.module.css"
import axios from "axios"
import { Navigate } from "react-router-dom"
const Createusers=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("DATA HAS BEEN UPLOADED");
        }).catch(()=>{
            console.log("SOMETHING WENT WRONG")
        })
        Navigate("/users")
    }

return(
    <div id={style.myForm}>
               <form action="">
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={nameData}/><br />
                <label htmlFor="">Salary</label>
                <input type="number" value={salary} onChange={salaryData}/><br />
                <label htmlFor="">Company</label>
                <input type="text" value={company} onChange={companyData} /><br />
                <button onClick={formHandle}>Submit</button>
            </form>
        
    </div>
)
}
export default Createusers