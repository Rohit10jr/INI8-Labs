import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import "../styles/Home.css";

function Edit() {
    const { id } = useParams(); // Get the note ID from the URL
    const [note, setNote] = useState({ title: "", content: "" });
    const navigate = useNavigate();

    useEffect(() => {
        getNote();
    }, []);

    const getNote = () => {
        api
            .get(`/api/notes/${id}/`) // Fetch the specific note
            .then((res) => {
                setNote(res.data); // Set the fetched note data to state
            })
            .catch((err) => alert(err));
    };

    const updateNote = (e) => {
        e.preventDefault();
        api
            .put(`/api/notes/${id}/`, note) // Send PUT request to update the note
            .then((res) => {
                if (res.status === 200) {
                    alert("Note updated!");
                    navigate("/"); // Redirect to home after updating
                } else {
                    alert("Failed to update note.");
                }
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="home-container">
            <nav className="navbar">
                <h1 className="nav-title">My Notes App</h1>
                <div className="nav-buttons">
                    <a className="nav-btn" href="/logout">Logout</a>
                </div>
            </nav>
            
            <div className="form-section">
                <h2>Edit Note</h2>
                <form onSubmit={updateNote} className="note-form">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        onChange={(e) => setNote({ ...note, title: e.target.value })}
                        value={note.title}
                    />
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        name="content"
                        required
                        value={note.content}
                        onChange={(e) => setNote({ ...note, content: e.target.value })}
                    ></textarea>
                    <input className="submit" type="submit" value="Update" />
                </form>
            </div>
        </div>
    );
}

export default Edit;