import React, { useState } from "react";
import "../App.css";

const Item = ({ task, item, index, setList, list }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleDelete = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  return (
    <div className="item">
      <h3
        onClick={() => setIsChecked(!isChecked)}
        className={isChecked ? "completed" : null}
      >
        {item.task_name}
      </h3>
      <h5>{item.title}</h5>
      <h3 onClick={() => handleDelete(index)}>X</h3>
    </div>
  );
};

export default Item;
