// 필요한 React 훅들과 컴포넌트들을 import
import { ChangeEvent, useEffect, useRef } from 'react';
import './style.css';

// Zustand store에서 board 관련 상태와 메서드들을 import
import { useBoardStore } from '../../../stores';

// BoardWrite 컴포넌트 정의
export default function BoardWrite() {
  // Zustand store에서 필요한 상태와 메서드들을 가져옴
  const { title, content, setTitle, setContent, resetBoard } = useBoardStore();

  // textarea 요소에 접근하기 위한 ref 생성
  const contentRef = useRef<HTMLTextAreaElement | null>(null);

  // 컴포넌트가 마운트될 때 board 상태 초기화
  useEffect(() => {
    resetBoard();
  }, [resetBoard]);

  // 제목 입력 필드의 변경 이벤트 핸들러
  const onTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitle(value);
  }

  // 내용 입력 필드의 변경 이벤트 핸들러
  const onContentChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setContent(value);
  }

  // 이미지 입력 필드의 변경 이벤트 핸들러 (아직 구현되지 않음)
  const onImageInputChangeHandler = () => {
  }

  // JSX로 UI 구성
  return (
    <div className='board-write-wrap'>
      <div className='board-write-container'>
        <div className='board-write-box'>
          {/* 제목 입력 섹션 */}
          <div className='board-write-title-box'>
            <input
              className='board-write-title-input'
              type='text'
              placeholder='제목을 작성해주세요.'
              value={title}
              onChange={onTitleChangeHandler}
            />
          </div>
          {/* 내용 입력 섹션 */}
          <div className='board-write-content-box'>
            <textarea
              ref={contentRef}
              className='board-write-content-textarea'
              placeholder='본문을 작성해주세요.'
              value={content}
              onChange={onContentChangeHandler}
            />
            {/* 이미지 업로드 버튼 */}
            <div className='icon-button'>
              <div className='icon image-box-light-icon'></div>
            </div>
          </div>
          {/* 이미지 미리보기 섹션 */}
          <div className='board-write-images-box'>
            {/* 이미지 미리보기 1 */}
            <div className='board-write-image-box'>
              <img className='board-write-image' src='https://opinionnews.co.kr/news/photo/201905/18042_13312_1145.jpg' />
              <div className='icon-button image-close'>
                <div className='icon close-icon'></div>
              </div>
            </div>
            {/* 이미지 미리보기 2 */}
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