import React, { useState } from "react";
import Item from "./Item";

const ListDisplay = (props) => {
  const { list } = props;
  const [selected, setSelected] = useState("");

  const listMapped = list
    .filter((item) => {
      if (selected) return item.category === selected;
      return item;
    })
    .map((item, index) => {
      return (
        <Item
          key={index}
          item={item}
          index={index}
          setList={props.setList}
          list={props.list}
        />
      );
    });

  return (
    <div>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option defaultValue selected></option>
        <option value="chores">chores</option>
        <option value="errands">errands</option>
        <option value="work">work</option>
      </select>
      {listMapped}
    </div>
  );
};

export default ListDisplay;
