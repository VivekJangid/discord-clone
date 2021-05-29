import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import SideBar from "./components/sidebar/SideBar";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className='app'>
      {user ? (
        <Fragment>
          <SideBar />
          <Chat />
        </Fragment>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
