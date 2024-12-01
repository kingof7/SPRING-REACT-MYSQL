import { useEffect, useRef, useState } from 'react';
import './style.css';
import { useBoardStore } from 'stores';

//        component: 게시물 작성 화면 컴포넌트         //
export default function BoardWrite() {

  //        state: 본문 영역 요소 참조(ref) 상태                //
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  //        state: 이미지 입력 요소 참조(ref) 상태                //
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  //        state: 게시물 상태                //
  const { title, setTitle } = useBoardStore();
  const { content, setContent } = useBoardStore();
  const { boardImageFileList, setBoardImageFileList } = useBoardStore();
  const { resetBoard } = useBoardStore();

  //        state: 게시물 이미지 미리보기 URL 상태    //
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  //        effect: 마운트 시, 실행할 함수            //
  useEffect(() => {
    resetBoard();
  }, [resetBoard]);

  //        event handler: 제목 변경 이벤트 처리      //
  const onTitleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };

  //        event handler: 내용 변경 이벤트 처리      //
  const onContentChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setContent(value);
  };

  //        render: 게시물 작성 화면 컴포넌트         //
  return (
    <div id='board-write-wrapper'>
      <div className='board-write-container'>
        <div className='board-write-box'>
          <div className='board-write-title-box'>
            <input
              className='board-write-title-input'
              type='text'
              placeholder='제목을 작성해주세요.'
              value={title}
              onChange={onTitleChangeHandler}
            />
          </div>
          <div className='divider'></div>
          <div className='board-write-content-box'>
            <textarea
              ref={contentRef}
              className='board-write-content-textarea'
              placeholder='본문을 작성해주세요.'
              value={content}
              onChange={onContentChangeHandler}
            />
            <div className='icon-button'>
              <div className='icon image-box-light-icon'></div>
            </div>
            <input ref={imageInputRef} type='file' accept='image/*' style={{ display: 'none' }} />
          </div>
          <div className='board-write-images-box'>
            <div className='board-write-image-box'>
              <img className='board-write-image' src='https://opinionnews.co.kr/news/photo/201905/18042_13312_1145.jpg' />
              <div className='icon-button image-close'>
                <div className='icon close-icon'></div>
              </div>
            </div>
            <div className='board-write-image-box'>
              <img className='board-write-image' src='https://www.kkday.com/ko/blog/wp-content/uploads/busan_tower_6.jpg' />
              <div className='icon-button image-close'>
                <div className='icon close-icon'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}