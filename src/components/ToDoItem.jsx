import React, { useState } from "react";

function ToDoItem(props) {

    const[isDone , SetIsDone] = useState(false);

    function handleclick(){
        SetIsDone(prevValue => {
            return !prevValue;
        });
    }
  return (
    <div
      onClick = {handleclick}
      onDoubleClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li style = { {textDecoration: isDone? "line-through" : "none"}}>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
