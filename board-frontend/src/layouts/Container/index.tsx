import { Outlet, useLocation } from 'react-router-dom'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import { AUTH_PATH } from 'constant';

//          component: layout            //
export default function Container() {

  //          state: 현재 페이지 path name 상태         //
  const { pathname } = useLocation();

  //          render: layout            //
  return (
    <>  
        <Header />
        <Outlet />
        {pathname !== AUTH_PATH() && <Footer />}
    </>
  )
}
