// Zustand 상태 관리 라이브러리와 필요한 타입들을 import
import { create } from 'zustand';

// 게시판 관련 상태들의 타입 정의
interface BoardStore {
  // 게시글 제목
  title: string;
  // 게시글 내용
  content: string;
  // 게시글 이미지 파일 리스트
  boardImageFileList: File[];

  // 제목 설정 메서드
  setTitle: (title: string) => void;
  // 내용 설정 메서드
  setContent: (content: string) => void;
  // 이미지 파일 리스트 설정 메서드
  setBoardImageFileList: (boardImageFileList: File[]) => void;
  // 게시판 상태 초기화 메서드
  resetBoard: () => void;
}

// Zustand store 생성
const useBoardStore = create<BoardStore>((set) => ({
  // 초기 상태 값들
  title: '',
  content: '',
  boardImageFileList: [],

  // 제목 업데이트 메서드
  setTitle: (title) => {
    set((state) => ({ ...state, title }));
  },

  // 내용 업데이트 메서드
  setContent: (content) => {
    set((state) => ({ ...state, content }));
  },

  // 이미지 파일 리스트 업데이트 메서드
  setBoardImageFileList: (boardImageFileList) => {
    set((state) => ({ ...state, boardImageFileList }));
  },

  // 모든 상태를 초기값으로 리셋하는 메서드
  resetBoard: () => {
    set((state) => ({
      ...state,
      title: '',
      content: '',
      boardImageFileList: []
    }));
  }
}));

// store를 외부에서 사용할 수 있도록 export
export default useBoardStore;