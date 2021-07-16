import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Global from './styles/generic/Global';

function App() {
  return (
    <React.Fragment>
      <Global />
      <Header />
      <Footer />
    </React.Fragment>
  );
}

export default App;
