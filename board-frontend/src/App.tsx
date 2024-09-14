import React from "react";
import "./App.css";
import { latestBoardListMocks, top3BoardListMocks } from "mocks";
import Top3Item from 'components/Top3Item';

function App() {
  return (
    <>
      {/* {latestBoardListMocks.map(boardListItem => <BoardListItem boardListItem={boardListItem} />)} */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px'}}>
        {top3BoardListMocks.map(top3ListItem => <Top3Item top3ListItem={top3ListItem} />)}
      </div>
    </>
  );
}

export default App;