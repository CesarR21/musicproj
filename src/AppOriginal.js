import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./data.json";
import ReadOnlyRow from "./components/ReadOnly";
import EditableRow from "./components/TableEdit";

const App = () => {
  const [songs, setSongs] = useState(data);
  const [addFormData, setAddFormData] = useState({
    song: "",
    title: "",
    artist: "",
    album: "",
    genre:"",
    release_date:"",
  });

  const [editFormData, setEditFormData] = useState({
    song: "",
    title: "",
    artist: "",
    album: "",
    genre:"",
    release_date:"",
  });

  const [editSongId, setEditSongId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newSong = {
      song:  addFormData.song,
      title: addFormData.title,
      artist: addFormData.artist,
      album: addFormData.album,
      genre: addFormData.genre,
      release_date: addFormData.release_date,
    };

    const newSongs = [...songs, newSong];
    setSongs(newSongs);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedSong = {
      song: editFormData.song,
      title: editFormData.title,
      artist: editFormData.artist,
      album: editFormData.album,
      genre: editFormData.genre,
      release_date:editFormData.release_date,
    };

    const newSongs = [...songs];

    const index = songs.findIndex((song) => song.id === editSongId);

    newSongs[index] = editedSong;

    setSongs(newSongs);
    setEditSongId(null);
  };

  const handleEditClick = (event, song) => {
    event.preventDefault();
    setEditSongId(song.id);

    const formValues = {
      song: song.song,
      title: song.title,
      artist: song.artist,
      album: song.album,
      genre: song.genre,
      release_date: song.release_date,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditSongId(null);
  };

  const handleDeleteClick = (songId) => {
    const newSongs = [...songs];

    const index = songs.findIndex((song) => song.id === songId);

    newSongs.splice(index, 1);

    setSongs(newSongs);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Song</th>
              <th>Title</th>
              <th>Album</th>
              <th>Artist</th>
              <th>Genre</th>
              <th>Release Date</th>
              
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <Fragment>
                {editSongId === song.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    song={song}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Song</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="song"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter a title..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="album"
          required="required"
          placeholder="Enter an album..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="artist"
          required="required"
          placeholder="Enter an artist..."
          onChange={handleAddFormChange}
        />
         <input
          type="text"
          name="genre"
          required="required"
          placeholder="Enter a genre..."
          onChange={handleAddFormChange}
        />
         <input
          type="text"
          name="release_date"
          required="required"
          placeholder="Enter a release date..."
          onChange={handleAddFormChange}
        />
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;
