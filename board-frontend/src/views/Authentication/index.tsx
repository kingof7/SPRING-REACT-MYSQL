import { useState } from 'react';
import './style.css';

//        component: 인증 화면 컴포넌트         //
export default function Authentication() {

  //        state: 화면 상태                  //
  const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in'); // literal 상태라고 한다.

  //        component: sign in card 컴포넌트        //
  const SignInCard = () => {
    return (
      <div className='auth-card'></div>
    );
  };

  //        component: sign up card 컴포넌트        //
  const SignUpCard = () => {
    return (
      <div className='auth-card'></div>
    );
  };

  //        render: 인증 화면 컴포넌트         //
  return (
    <div id='auth-wrapper'>
      <div className='auth-container'>
        <div className='auth-jumbotron-box'>
          <div className='auth-jumbotron-contents'>
            <div className='auth-logo-icon'></div>
            <div className='auth-jumbotron-text-box'>
              <div className='auth-jumbotron-text'>{'환영합니다.'}</div>
              <div className='auth-jumbotron-text'>{'Bellflower\'s Board'}</div>
            </div>
          </div>
        </div>
        {view === 'sign-in' && <SignInCard / >}
        {view === 'sign-up' && <SignUpCard / >}
      </div>
    </div>
  )
}