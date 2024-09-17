import { User } from 'types/interface';
import { create } from 'zustand';

interface LoginUserStore {
    loginUser: User | null;
    setLoginUser: (loginUser: User) => void;
    resetLoginUser: () => void;
};

const useLoginUserStore = create<LoginUserStore>(set => ({
    loginUser: null, // 상태
    setLoginUser: loginUser => set(state => ({...state, loginUser})), // 상태 변경 set 함수
    resetLoginUser: () => set(state => ({ ...state, loginUser: null })) // 상태 변경 set 함수
}));

export default useLoginUserStore;