import React from "react";
import "./App.css";
import BoardListItem from "components/BoardListItem";
import { latestBoardListMocks } from "mocks";

function App() {
  return (
    <>
      {latestBoardListMocks.map(boardListItem => <BoardListItem boardListItem={boardListItem} />)}
    </>
  );
}

export default App;