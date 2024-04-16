import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note){
    setNotes(prevNotes=>{
      return [...prevNotes,note]
    })

  }
  function deleteNote(id){
    const newNotes = notes.filter((note,index)=>{
      return index!==id
    })
    setNotes(newNotes)
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {notes.map((note,index)=>{
        return (<Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>)
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
