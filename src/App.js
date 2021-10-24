//import React, { useState, Fragment } from "react";
import React, {Component} from "react";
//import { nanoid } from "nanoid";
import "./App.css";
//import ReadOnlyRow from "./components/ReadOnly";
//import EditableRow from "./components/TableEdit";

//class App extends Component {
   // constructor(props) {
    //    super(props);
     //   this.state = { 
    //        songs: [],
      //      title: '',
     //       artist: '',
     //       album: '',
     //       genre: '',
      //      release_date: ''
    
     //    }
   // }
class getAllSongs extends Component {
     state = {
        Title: '',
        Artist: '',
        Album: '',
        Genre: '',
        Release_Date: ''
        errors: {
             Title: '',
             Artist: '',
             Album: '',
             Genre: '',
             Release_Date: ''
        
    }

}

handleInputChange = (event) => {
    let errors = this.state.errors;

    switch(event.target.name){
        case 'Title':
            errors.Title = event.target.value.length < 2 ? " must be at least two chracters" : null;
        case 'Artist':
            errors.Artist = event.target.value.length < 2 ? " must be at leasr two characters" : null ;
        case 'Album':
            errors.Album = event.target.value.length < 2 ? "must be at least two characters": null;
        case 'Genre':
            errors.Genre = event.target.value.length < 2 ? "must be at least two characters": null;
        case 'Release_Date':
            errors.Release_Date =event.target.value.length < 2 ? "must be at least two characters": null;
        default :
            break ;
    }

        this.setState({
            [event.target.name]: event.target.value,
            errors:errors
        })
  };
 
  handleAddFormSubmit = (event) => {
    event.preventDefault();
    alert('Title: ${this.state.Title} Artist: ${this.state.Artist} Album: ${this.state.Album} Genre: ${this.state.Genre} Release_Date: ${this.state.Release_Date}')
  };

  render() { 
    return ( 
        <form onSubmit={(event) => this.handleAddFormSubmit(event)}>
            <label>Title</label>
            <input type= "text" name="title" onChange={this.handleInputChange} value={this.state.Title}/>
            <label>Artist</label>
            <input type= "text" name="artist" onChange={this.handleInputChange} value={this.state.Artist}/>
            <label>Album</label>
            <input type= "text" name="title" onChange={this.handleInputChange} value={this.state.Album}/>
            <label>Genre</label>
            <input type ="text" name="genre" onChange={this.handleInputChange} value={this.state.Genre}/>
            <label>Release_Date</label>
            <input type= "text" name="release_date" onChange={this.handleInputChange} value={this.state.Release_Date}/>
        </form>

    
export default getAllSongs;



    // Implement the componentDidMount lifecycle method
        // Inside of this method call your getAllSongs method

    // Create a getAllSongs method that makes an axios GET request
    // to you backend api to get all of the songs from the database
        // Once you get the response from the AXIOS request, update the "songs" state
        // property to the API respone's data

   // handleInputChange = (event) => {
     //   event.preventDefault();
        // Update the state object properties
      //  this.setState({[event.target.name]: event.target.value})
     // };
    


    
  //   handleAddFormSubmit = (event) => {
  //      event.preventDefault();
/       // Create a new song from the state properties
        // Make and axios POST request to your backend API
        // Re-call getAllSongs
    //  };
    
      // Dont worry about these until the table is displaying data, 
      // you can add a new song, and can delete a song

    //   handleEditFormChange = (event) => {
    //     event.preventDefault();

    //   };

    //  handleEditFormSubmit = (event) => {
    //   };
    
    //  handleEditClick = (event, song) => {
    //     event.preventDefault();
    //   };
    
    //  handleCancelClick = () => {
    //   };

      // UP
    
     handleDeleteClick = (songId) => {
        // Make a delete request to your backend api and send the songId in the endpoint
      };


   // render() { 
        return ( 
         //   <div className="app-container">
            {/* <form onSubmit={handleEditFormSubmit}>
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
                          handleEditFormChange={handleInputChange}
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
            </form> */}

         //   {/* Map over songs and generate ReadOnlyRows in a table */}
      
            //<h2>Add a Song</h2>
          //  <form onSubmit={this.handleAddFormSubmit}>
          //    <input
         //      type="text"
          //      name="title"
           //     required="required"
           //     placeholder="Enter a title..."
           //     value={this.state.title}        
            //    onChange={this.handleInputChange}
          //    />
            //  <input
             //   type="text"
            //    required="required"
              //  value={this.state.album}
             //   placeholder="Enter an album..."
             //   onChange={handleInputChange}
           //   />
            //  <input
                //type="text"
               // name="artist"
              //  required="required"
               // value={this.state.artist}
               // placeholder="Enter an artist..."
               // onChange={handleInputChange}
              //>
            //   <input
               // type="text"
                //name="genre"
               // required="required"
               // value={this.state.genre}
              //  placeholder="Enter a genre..."
              //  onChange={handleInputChange}
              />
             //  <input
             //   type="text"
             //   name="release_date"
              //  required="required"
              //  value={this.state.release_date}
              //  placeholder="Enter a release date..."
              //  onChange={handleInputChange}
           //   />
              
            //  <button type="submit">Add</button>
          //  </form>
        //  </div>
     );
    //}
//}
 
