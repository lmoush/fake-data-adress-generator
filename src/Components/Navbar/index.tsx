import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import UsersList from "../ListUsers";

export const inputContext = React.createContext();

export default function Navbar() {
  const [ithaveClass, setithaveClass] = useState(false);
  const [InputValue, setInputValue] = useState("");

  const Input_add = useRef();

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const growInputHandler = () => {
    if (!ithaveClass) {
      Input_add.current.classList.add("grow_input");
    } else {
      Input_add.current.classList.remove("grow_input");
    }
    setithaveClass(!ithaveClass);
  };

  useEffect(() => {}, []);

  return (
    <>
      <h1>FAKE USERS</h1>
      <header className="main_nav">
        <div>
          <button onChange={onChangeHandler} onClick={growInputHandler}>
            SEARCH
          </button>
          <input
            placeholder="Seach By Name"
            ref={Input_add}
            className="input_user"
            type="text"
            onChange={onChangeHandler}
          />
        </div>
      </header>
      <inputContext.Provider value={InputValue}>
        <UsersList />
      </inputContext.Provider>
    </>
  );
}
