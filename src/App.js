import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {SideMenu} from "./components/SideMenu/SideMenu";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>

      </div>
    );
  }
}

export default App;
