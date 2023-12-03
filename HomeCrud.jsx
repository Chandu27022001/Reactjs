import React from "react"
import style from "./home.module.css"
import {Link} from 'react-router-dom'
const HomeCrud=()=>{
    return(
        <section id={style.nav}>
            <Link to="/">CREATE-USER</Link>
            <Link to="/users">USER</Link>
        </section>
    )
}
export default HomeCrud