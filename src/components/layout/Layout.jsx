import React from 'react';
import Header from '../header/Header';
import Form from '../form/Form'
import List from '../list/List'
import './style.css';
import {useState} from 'react';

function Layout() {

  const [todo, setTodo] = useState([]); 

    return (
      <div className="Layout">
        <Header/>
        <Form todo={todo} setTodo={setTodo}/>
        <List todo={todo} setTodo={setTodo}/>
      </div>
      );
  }
  
  export default Layout;