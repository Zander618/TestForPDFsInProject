
import React from "react";
import SinglePage from "./single-page";


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/


export default function App() {
  return (
    <div className="App">
      <h4>Single Page</h4>
      <SinglePage pdf="http://ia800207.us.archive.org/5/items/Cantorion_sheet_music_collection/09011231b36f8c7524f09378a273362d.pdf#track_/download/4/09011231b36f8c7524f09378a273362d/F%C3%BCr%20Elise%20Original%20version%20-%20Piano.pdf" />
      <button>Like</button>
    </div>
  );
}
