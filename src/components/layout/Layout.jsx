import React from 'react';
import Header from '../header/Header';
import Form from '../form/Form'
import List from '../list/List'
import './style.css';
import {useState} from 'react';

function Layout() {

  const [arr, setArr] = useState([]); 

    return (
      <div className="Layout">
        <Header/>
        <Form arr={arr} setArr={setArr}/>
        <List arr={arr} setArr={setArr}/>
      </div>
      );
  }
  
  export default Layout;