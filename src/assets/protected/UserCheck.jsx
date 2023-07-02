import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext";

function UserCheck(){
    const {token} = useContext(AuthContext);
    const config = {
        'method' : 'get',
        'url' : `${import.meta.env.VITE_BACKEND_URL}/games/action`,
        'headers' : {
            'authorization' : `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios(config).then((response) => {
            console.log("enviaste un token bueno y te logueaste")
        }).catch((error) => {
            console.log("no estás logueado", error);
        })
    }, [])

    return (
        <h1>Algo</h1>
    )
}