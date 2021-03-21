import React, { useState } from 'react';
import './App.css';
import ToDolist from './ToDolist';

const App = () => {

  const [inputList , setinputList]= useState("");
  const [Item, setItem]= useState([]);

  const itemEvent = (event) => {
    setinputList(event.target.value);
  }
  const listofItem = () =>{
    setItem((oldItem) => {
         return[...oldItem, inputList ];
    });
    setinputList("");
  };

    const deleteItems = (id) => {
    console.log("deleted");
    setItem((oldItem)=>{
      return oldItem.filter((arryelement , index)=>{
        return index !== id;
      })
    })
};

  return (
          <>
          <div className=' Main-div' >
            <div className='center-div'> 
             <h1>To Do list</h1>
            <input type="text" placeholder="Add items"
            value={inputList} onChange={itemEvent}/>
            <button onClick={listofItem}>+</button>
            <ol>
             {Item.map((itemvalue , index)=>{
                  return <ToDolist key={index}
                  id={index} 
                  text={itemvalue}
                  onSelect={deleteItems}
                  />
             })
             }
            </ol>
                
            </div>
          </div>
          </>
  );
}
export default App;