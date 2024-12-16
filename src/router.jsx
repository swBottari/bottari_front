import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Main from './pages/main/Main';
import NotFoundError from './pages/error/NotFound';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import Reservation from './pages/reservation/Reservation';
import MyPage from './pages/mypage/MyPage';
import About from './pages/about/About';
import Tracking from './pages/tracking/Tracking';
import Inquiry from './pages/inquiry/Inquiry';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'reservation',
        element: <Reservation />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: 'tracking',
        element: <Tracking />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'inquiry',
        element: <Inquiry />,
      },
    ],
    errorElement: <NotFoundError />,
  },
]);

export default router;
