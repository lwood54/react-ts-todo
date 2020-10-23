
import React, { useState, useEffect, ChangeEvent } from 'react';
// import React from 'react';
// import styled from "styled-components";
import ToDoItem from './ToDoItem';

function ToDo() {

const [items, setItems] = useState<string[]>([]);
const [itemVal, setItemVal] = useState<string>('');

useEffect(() => {
  setItems([
  'banana',
  'apple',
  'grapes',
  'kiwi'
]);
}, []);

const handleRemoveItem = (item: string) => {
  console.log('removing item: ', item);
  let updatedList = items.filter((i) => i !== item);
  setItems(updatedList);
}

const listItems = items.map((item, i) => {
  return <ToDoItem item={item} key={i} remove={handleRemoveItem} ></ToDoItem>
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
  setItemVal(e.target.value);
}


const addItem = (e: React.MouseEvent<HTMLButtonElement>) => {
  const updatedItems = [...items, itemVal];
  console.log(updatedItems);
  setItems(updatedItems);
  setItemVal('');
}

  return (
    <div>
      <h1>To Do</h1>
      {listItems}
      <input type="text" value={itemVal} onChange={handleChange} />
      <button onClick={addItem} >add item</button>
    </div>
  )
}

export default ToDo
