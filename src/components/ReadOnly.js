
import React from "react";

const ReadOnly = ({ song, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{song.song}</td>
      <td>{song.title}</td>
      <td>{song.album}</td>
      <td>{song.artist}</td>
      <td>{song.genre}</td>
      <td>{song.releaseDate}</td>
      
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, song)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(song.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};
export default ReadOnly;
