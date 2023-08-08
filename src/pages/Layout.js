import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBar from '../components/NavBar'

export default function Layout (){
    return (
        <div id= "wrapper">
            <div id= "main">
            <div id= "inner">
            <NavBar/>

            <Outlet/>
            </div>
            </div>
        </div>
    )
}