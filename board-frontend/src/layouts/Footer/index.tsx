import React from 'react'
import './style.css'
import 'App.css'

//          component: Footer layout            //
export default function index() {

  //          event handler: insta icon 버튼 클릭 처리            //
  const onInstaIconButtonClickHandler = () => {
    window.open('https://www.instagram.com/ljh0117');
  }
  
  //          event handler: naver blog icon 버튼 클릭 처리            //
  const onNaverBlogIconButtonClickHandler = () => {
    window.open('https://blog.naver.com/vlfl0');
  }

  //          render: Footer layout            //
  return (
    <div id="footer">
        <div className='footer-container'>
            <div className='footer-top'>
                <div className='footer-logo-box'>
                    <div className='icon-box'>
                        <div className='icon logo-light-icon'></div>
                    </div>
                    <div className='footer-logo-text'>{'Bellflower\'s Board'}</div>
                </div>
                <div className='footer-link-box'>
                    <div className='footer-email-link'>{'kingof2501@gmail.com'}</div>
                    <div className='icon-button' onClick={onInstaIconButtonClickHandler}>
                        <div className='icon insta-icon'></div>
                    </div>
                    <div className='icon-button' onClick={onNaverBlogIconButtonClickHandler}>
                        <div className='icon naver-blog-icon'></div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-copyright'>{'Copyright @ 2024 Bellflower. All Rights Reserved.'}</div>
            </div>
        </div>
    </div>
  );

};
