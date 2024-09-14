import React from "react";
import "./App.css";
import { commentListMock, favoriteListMock } from "mocks";
import CommentItem from "components/CommentItem";
import FavoriteItem from "components/FavoriteItem";

function App() {
  return (
    <>
      {/* <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {commentListMock.map(commentListItem => <CommentItem commentListItem={commentListItem} />)}
      </div> */}
      <div style={{ display: 'flex', flexDirection: 'column', columnGap: '30px', rowGap: '20px' }}>
        {favoriteListMock.map(favoriteListItem => <FavoriteItem favoriteListItem={favoriteListItem} />)}
      </div>
    </>
  );
}

export default App;