import React from 'react';
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_APP_API_URL;

function SongDetails() {

    return (
        <div className='SongDetails'>
            <h2>Song Details</h2>
        </div>
    )
}



export default SongDetails;