import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import ContactForm from './components/ContactForm';
import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <LandingPage />
      <ContactForm />
    </>
  );
}

export default App;
