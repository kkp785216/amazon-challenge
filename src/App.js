import './App.css';
import Header from './Components/Header/Header';

import React from 'react'
import Home from './Components/Home/Home';

export const Layout = (props) => {
  return (<>
    <Header />
    {props.children}
  </>)
}

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
