import "bootswatch/dist/lux/bootstrap.min.css"
import React, { useState } from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Create from "./screens/Create";
import Home from "./screens/Home";
import Notes from "./screens/Notes";

function App() {
  const [notes, setNotes] = useState([])

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/notes">
          <Notes notes={notes} setNotes={setNotes} />
        </Route>
        <Route path="/create">
          <Create notes={notes} setNotes={setNotes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
