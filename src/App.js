import React from "react";
import "./App.css";
import Info from "./components/Info/Info";
import TasksList from "./components/TasksList";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="app">
      <div className="body">
        <app className="container">
          <Info />
          <TasksList />
        </app>
        <Comment />
      </div>
    </div>
  );
}

export default App;
