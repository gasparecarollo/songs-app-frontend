import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.REACT_APP_API_URL;

function SongEditForm() {
    let { index } = useParams();
    const navigate = useNavigate();

    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        isFavorite: false
    });

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };
    const handleCheckboxChange = () => {
        setSong({ ...song, isFavorite: !song.isFavorite });
    };

    const updateSong = async () => {
        const songData = {
            name: song.name,
            artist: song.artist,
            album: song.album,
            time: song.time,
            isFavorite: song.isFavorite
        }
        try {
            const fetchSong = await fetch(`${API}/songs/${index}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(songData)
            })
            if (!fetchSong.ok) {
                throw new Error({ Error: `Invalid response: ${fetchSong.status}` });
            };
            navigate(`/songs/${index}`);
        } catch (error) {
            return error
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSong();
    };

    return (
        <div className="Edit">
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
            <Link to={`/songs${index}`} >
                <button> Nevermind!</button>
            </Link>
        </div>
    );
}

export default SongEditForm;