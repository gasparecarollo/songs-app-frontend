
import React from 'react';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import favicon from "front-end/public/favicon.ico";

const API = import.meta.env.VITE_APP_API_URL

function SongNewForm() {
    const navigate = useNavigate();
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        isFavorite: false
    });


    const addSong = () => {
        const songData = {
            name: song.name,
            artist: song.artist,
            album: song.album,
            time: song.time,
            is_favorite: song.isFavorite
        }

        try {
            fetch(`${API}/songs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(songData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to add song")
                    }
                    return response.json();
                })
                .then(() => navigate('/songs'))
        } catch (error) {
            console.error("Error adding the song", error)
        }
    };

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, isFavorite: !song.isFavorite });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSong();
        navigate('/songs')
    };

    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> Name: </label>
                <input
                    id="name"
                    value={song.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Song"
                    required
                />

                <label htmlFor="artist"> Artist: </label>
                <input
                    id="artist"
                    value={song.artist}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Artist"
                    required
                />

                <label htmlFor="album"> Album: </label>
                <input
                    id="album"
                    value={song.album}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Album"
                    required
                />

                <label htmlFor="time"> Time: </label>
                <input
                    id="time"
                    value={song.time}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Length of song"
                    required
                />

                <label htmlFor="isFavorite"> Is favorite: </label>
                <input
                    id="isFavorite"
                    type="checkbox"
                    checked={song.isFavorite}
                    onChange={handleCheckboxChange}
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <Link to={'/songs'} >
                <button> Nevermind!</button>
            </Link>
        </div>
    );
}

export default SongNewForm;