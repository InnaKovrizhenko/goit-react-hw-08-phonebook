// import { ContactForm } from './ContactForm/ContactForm'
// import { Filter } from './Filter/Filter'
// import { ContactList } from './ContactList/ContactList'
// import { Titleh1, Titleh2, Phonebook } from './App.styled'
// import { ToastContainer } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/services/fetchAPI';


// export const App = () => {

// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(fetchContacts());
// }, [dispatch]);


// return (
//   <Phonebook>
//   <Titleh1>Phonebook</Titleh1>
//   <ContactForm />
//   <Titleh2>Contacts</Titleh2>
//   <Filter />
//   <ContactList />
//   <ToastContainer autoClose={2000} />
// </Phonebook>)
// }

import { Routes, Route } from 'react-router-dom';
import { RegisterView } from 'pages/RegisterView/RegisterView';
import { LoginView } from 'pages/LoginView/LoginView';
import { HomeView } from 'pages/HomeView/HomeView';
import { AppBar } from './AppBar/AppBar';


// import authOperations from 'redux/auth/auth-operations';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

export const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(authOperations.refreshCurrentUser());
  // }, [dispatch]);

  return (
    <>
    <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomeView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="login" element={<LoginView />} />
          {/* <Route path="contacts" component={<ContactsView />} /> */}
        </Route>
    </Routes>
    </>
  );
};