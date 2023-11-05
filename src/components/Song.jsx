import React from 'react';
import { Link } from "react-router-dom";


function Song({ song, index }) {
    return (
        <tr>
            <td>
                {song.isFavorite ? (
                    <span> ⭐️</span>
                ) : (
                    <span> &nbsp; &nbsp; &nbsp; &nbsp; </span>
                )}
            </td>
            <td>
                <Link to={`/songs/${song.id}`} > {song.name} </Link>
            </td>
        </tr >

    )
}

export default Song;