import React from "react";
 

const Person = (props)=>{

    return (
        <>
        <p className="title-text"> i'm {props.name} and i 'm {props.age} </p>
        <p className="title" >{props.children}</p>
        </>
    )
}
export default Person;