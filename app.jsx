import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Edit from "./src/pages/Edit"
import FourOFour from "./src/pages/FourOFour"
import Home from "./src/pages/Home";
import SongIndex from "./src/pages/SongIndex";
import New from "./src/pages/New";
import Show from "./src/pages/Show";

//COMPONENTS
import NavBar from "./src/components/NavBar";


function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/songs" element={<SongIndex />} />
                        <Route path="/songs/new" element={<New />} />
                        <Route path="/songs/:index" element={<Show />} />
                        <Route path="/songs/:index/edit" element={<Edit />} />
                        <Route path="*" element={<FourOFour />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;

