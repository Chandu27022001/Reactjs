import axios from "axios"
import React, { useEffect, useState } from "react"
import style from "./home.module.css"
import { Link } from "react-router-dom"
const Users=()=>{
    let[content,setContent]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((responce)=>{
            console.log("got the data")
            setContent(responce.data)
        })
        .catch(()=>{
            console.log("something is worng");
        })

    },[])

    let deleteData=(abc)=>{
        axios.delete(`http://localhost:3000/users/$(abc)`)
        window.location.assign("/users")
    }
    return(
        <div id={style.homepage}>
        {content.map((x)=>{
            return(
            <div id={style.cards}>
            <table>
                <tr>
                    <th colSpan="2"><h5>user {x.id}</h5></th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{x.name}</td>
                </tr>
                <tr>
                    <td>Salary</td>
                    <td>{x.salary}</td>
                </tr>
                <tr>
                    <td>Company</td>
                    <td>{x.company}</td>
                </tr>
                <tr>
                    <td><Link to={`/edit/$(x.id)`}>EDIT</Link></td>
                    <td><button onClick={()=>{deleteData(x.id)}}>DELETE</button></td>
                </tr>
            </table>
            </div>
        )})}
        </div>
    )
}
export default Users