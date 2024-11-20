/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "views/Main";
import Authentication from "views/Authentication";
import Search from "views/Search";
import UserP from "views/User";
import BoardDetail from "views/Board/Detail";
import BoardWrite from "views/Board/Write";
import BoardUpdate from "views/Board/Update";
import Container from "layouts/Container";
import { AUTH_PATH, BOARD_DETAIL_PATH, BOARD_PATH, BOARD_UPDATE_PATH, BOARD_WRITE_PATH, MAIN_PATH, SEARCH_PATH, USER_PATH } from "constant";
import { useCookies } from 'react-cookie';
import userLoginUserStore from 'stores/login-user.store';
import { getSignInUserRequest } from 'apis';
import { User } from "types/interface";
import { GetSignInUserResponseDto } from 'apis/response/user';
import { ResponseDto } from 'apis/response';

//    component: Application 컴포넌트       //

function App() {

  //    state: 로그인 유저 전역 상태                                 //
  const { setLoginUser, resetLoginUser } = userLoginUserStore();
  //    state: cookie 상태                                          //
  const [cookies, setCookie] = useCookies();

  //    function: get sign in user response 처리 함수               //
  const getSignInUserResponse = (responseBody: GetSignInUserResponseDto | ResponseDto | null) => {
    if (!responseBody) return;
    const { code } = responseBody;
    if (code === 'AF' || code === 'NU' || code === 'DBE') {
      resetLoginUser();
      return;
    }
    const loginUser: User = { ...responseBody as GetSignInUserResponseDto };
    setLoginUser(loginUser);
  };

  //    effect: accessToken cookie 값이 변경될 때 마다 실행할 함수    //
  useEffect(() => {
    if (!cookies.accessToken) {
      resetLoginUser();
      return;
    }
    getSignInUserRequest(cookies.accessToken).then(getSignInUserResponse);
  }, [cookies.accessToken]);

  //    description: 기능 : url - componentName //
  //    description: 메인 화면 : '/' - Main    //
  //    description: 로그인 + 회원가입 : '/auth' - Authentication    //
  //    description: 검색 화면 : '/search/:searchWord' - Search    //
  //    description: 유저 페이지 : '/user/:userEmail' - User    //
  //    description: 게시물 상세보기 : '/board/detail/:boardNumber' - BoardDetail    //
  //    description: 게시물 작성하기 : '/board/write' - BoardWrite    //
  //    description: 게시물 수정하기 : '/board/update/:boardNumber' - BoardUpdate    //

  //    render: Application 컴포넌트       //
  return (
    <>
      <Routes>
        <Route element={<Container />}>
          <Route path={MAIN_PATH()} element={<Main />}></Route>
          <Route path={AUTH_PATH()} element={<Authentication />}></Route>
          <Route path={SEARCH_PATH(':searchWord')} element={<Search />}></Route>
          <Route path={USER_PATH(':userEmail')} element={<UserP />}></Route>
          <Route path={BOARD_PATH()}>
            <Route path={BOARD_WRITE_PATH()} element={<BoardWrite />}></Route>
            <Route path={BOARD_DETAIL_PATH(':boardNumeber')} element={<BoardDetail />}></Route>
            <Route path={BOARD_UPDATE_PATH(':boardNumeber')} element={<BoardUpdate />}></Route>
          </Route>
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;