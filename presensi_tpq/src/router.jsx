import { createBrowserRouter } from "react-router-dom";
import FirstPage from "./UI/View/FirstPage";
import Login from "./UI/View/Login";
import Register from "./UI/View/Register";
import NotFound from "./UI/Error/NotFound";
import MainPage from "./UI/MainPage";
import TcrPage from "./UI/View/TeacherPage/TcrPage";
import TcrMain from "./UI/View/TeacherPage/TeacherView/TcrMain";
import TcrMakePresence from "./UI/View/TeacherPage/TeacherView/TcrMakePresence";
import TcrRecap from "./UI/View/TeacherPage/TeacherView/TcrRecap";
import UsrMain from "./UI/View/UserPage/UserView/UsrMain";
import UsrPresence from "./UI/View/UserPage/UserView/UsrPresence";
import UsrPage from "./UI/View/UserPage/UsrPage";
import UsrHistory from "./UI/View/UserPage/UserView/UsrHistory";
import UsrMateri from "./UI/View/UserPage/UserView/UsrMateri";

const router = createBrowserRouter([
  {
    path: '',
    element: <FirstPage/>,
    children: [
      {
        path: '',
        element: <MainPage/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      }
    ]
  },
  {
    path: '/userpage',
    element: <UsrPage/>,
    children: [
      {
        path: '',
        element: <UsrMain/>
      },
      {
        path: 'materi',
        element: <UsrMateri/>
      },
      {
        path: 'quiz',
        element: <UsrPresence/>
      },
      {
        path: 'presence',
        element: <UsrPresence/>
      },
      {
        path: 'histPresence',
        element: <UsrHistory/>
      }
    ]
  },
  { 
    path: '/teacher',
    element: <TcrPage/>,
    children: [
      {
        path: '',
        element: <TcrMain/>
      },
      {
        path: 'makePresence',
        element: <TcrMakePresence/>
      },
      {
        path: 'recap',
        element: <TcrRecap/>
      }
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export default router