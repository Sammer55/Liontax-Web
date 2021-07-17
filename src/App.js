import React from 'react';
import Header from './components/Header';
import Global from './styles/generic/Global';
// import Content from './components/Users/Create';
import Search from './components/Users/Search';

function App() {
  return (
    <React.Fragment>
      <Global />
      <Header />
      <Search />
    </React.Fragment>
  );
}

export default App;
