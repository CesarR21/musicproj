import React from "react";

const TableEdit = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a song..."
          name="songTitle"
          value={editFormData.songTitle}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an album..."
          name="album"
          value={editFormData.album}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter artist..."
          name="artist"
          value={editFormData.artist}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="txt"
          required="required"
          placeholder="Enter genre..."
          name="genre"
          value={editFormData.genre}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <input
          type="text"
          required="required"
          placeholder="Enter releaseDate..."
          name="releaseDate"
          value={editFormData.releaseDate}
          onChange={handleEditFormChange}
        ></input>
        
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default TableEdit;
