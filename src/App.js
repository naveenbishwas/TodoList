import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("delete");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="Add a Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}>+ </button>

          <ul>
            {items.map((itemValue, index) => {
              return (
                <TodoList
                  text={itemValue}
                  key={index}
                  id={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
