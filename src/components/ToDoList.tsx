// import React, { MouseEvent } from 'react';
import React from 'react';
// import styled from "styled-components";
import ToDoItem from './ToDoItem';


function ToDo() {

// const removeItem = (e: MouseEvent) => { 
//   console.log('item will get removed', e.target);
// }
  return (
    <div>
      <h1>To Do</h1>
      <ToDoItem item="item1" />
    </div>
  )
}

export default ToDo
