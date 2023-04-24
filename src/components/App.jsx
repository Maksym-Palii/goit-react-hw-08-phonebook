import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Register from 'pages/registerPage/Register';
import Login from 'pages/loginPage/Login';
import Contacts from 'pages/contactsPage/Contacts';
import NotFound from './notFound/NotFound';
import Navigation from './navigation/Navigation';

import css from 'components/App.module.css';
export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
