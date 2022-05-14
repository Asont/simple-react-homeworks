import React from 'react'
import {NavLink} from "react-router-dom";
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import style from "./Header.module.css"

function Header() {
    return (
        <div className={style.dropdown}>

            <SuperButton>Menu</SuperButton>
            <div className={style.dropdownContent}>
            <NavLink to={"/pre-junior"}>PreJunior</NavLink>
            <NavLink to={"/junior"}>Junior</NavLink>
            <NavLink to={"/junior-plus"}>Junior+</NavLink>
        </div>
        </div>
    )
}

export default Header
