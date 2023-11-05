import React from 'react';
import { useState, useEffect } from "react";
import Song from "./Song";

const API = import.meta.env.VITE_APP_API_URL;

function Songs() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch(`${API}/songs`)
            .then((response) => {
                return response.json();
            })
            .then((responseJSON) => setSongs(responseJSON))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="Songs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th> Favorite</th>
                            <th> Name</th>
                            <th> Artist </th>
                            <th> Album</th>
                            <th> Time </th>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song, index) => {
                            return <Song key={song.id} song={song} />;

                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Songs;