import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';

export default function App() {
  return (
    <div className='container'>
      <Header title="Tell us what you think" />
      <Form />
      <Footer foot="Copyright: Appfolio Inc. Onboarding" />
    </div>
  );
}

App.propTypes = {};