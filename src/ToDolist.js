import React from 'react';

const ToDolist =(props)=>{
    return (
      <>  
      <div className="icon-style">
     <span onClick={()=>{
         props.onSelect(props.id)
     }}>X</span>
    <li>{props.text}</li>
    </div>
    </>
    );
};
export default ToDolist;