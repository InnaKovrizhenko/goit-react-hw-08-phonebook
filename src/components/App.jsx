import { Routes, Route } from 'react-router-dom';
import { RegisterView } from 'pages/RegisterView/RegisterView';
import { LoginView } from 'pages/LoginView/LoginView';
import { HomeView } from 'pages/HomeView/HomeView';
import { AppBar } from './AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { getRefreshing } from 'redux/auth/auth-selectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/auth-operations';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { ContactsView } from 'pages/ContactsView/ContactsView';


export const App = () => {
  const dispatch = useDispatch();
  const refreshing = useSelector(getRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return refreshing ? ('Waiting for user data') : (
    <>
    <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomeView />} />
          <Route path="/register"
                 element={<RestrictedRoute redirectTo='/contacts'
                 component={<RegisterView />} /> } />
          <Route path="/login"
                 element={<RestrictedRoute redirectTo='/contacts'
                 component={<LoginView />} /> } />
          <Route path="/contacts"
                 element={<PrivateRoute redirectTo='/login'
                 component={<ContactsView />} /> } />   
        </Route>
    </Routes>
    </>
  );
};