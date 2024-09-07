import React from "react";
import "./style.css";

//         component : Board List Item 컴포넌트         //
export default function BoardListItem() {
  //         render : Board List Item 컴포넌트 렌더링         //
  return (
    <div className="board-list-item">
      <div className="board-list-item-main-box">
        <div className="board-list-item-top">
          <div className="board-list-item-profile-box">
            <div
              className="board-list-item-profile-image"
              style={{
                backgroundImage: `url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbackground%2F&psig=AOvVaw3UOZLp6pB-rpkLzIfykF9N&ust=1725829613516000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj9k7vesYgDFQAAAAAdAAAAABAE)`,
              }}
            ></div>
          </div>
          <div className="board-list-item-write-box">
            <div className="board-list-item-nickname">
              {"안녕하세요나는준코야키"}
            </div>
            <div className="board-list-write-datetime">{"2022. 05. 12."}</div>
          </div>
        </div>
        <div className="board-list-item-middle">
          <div className="board-list-item-title">
            {"오늘 점심 뭐먹지? 맛있는 거 먹고 싶어. 점메추좀..."}
          </div>
          <div className="board-list-item-content">
            {"오늘 점심 뭐먹지? 맛있는 거 먹고 싶어. 점메추좀... 부타악 해요~!"}
          </div>
        </div>
        <div className="board-list-item-bottom">
          <div className="board-list-item-counts">
            {`댓글 0   .   좋아요 0   .   조회수 1`}
          </div>
        </div>
      </div>
      <div className="board-list-item-image-box">
        <div
          className="board-list-item-image"
          style={{
            backgroundImage: `url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fwooden-board-sign--content-box--text-box_5774400.html&psig=AOvVaw1vBXQPuJDmCmhCxj3arcfO&ust=1725829712261000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOj82O3esYgDFQAAAAAdAAAAABAE)`,
          }}
        ></div>
      </div>
    </div>
  );
}
