import React, { useState } from "react";
import { ReactComponent as Caret } from "./icons/caret.svg";
import { CSSTransition } from "react-transition-group";
import "./style.css";

const SelectInput = (props) => {
  const [menu, menuToggle] = useState(false);
  const [selected, setSelected] = useState("");
  const handleSelect = (e) => {
    setSelected(e.target.innerHTML);
    menuToggle(!menu);
  };
  return (
    <div className="select-container">
      <div className="select-input">
        <div className="select-input-selected">
          {selected ? selected : "Select a slot"}
          <CSSTransition
            in={menu}
            classNames="select-input-selected-caret"
            timeout={600}
          >
            <Caret onClick={() => menuToggle(!menu)} />
          </CSSTransition>
        </div>
        <CSSTransition
          in={menu}
          classNames="select-input-menu"
          unmountOnExit
          timeout={600}
        >
          <div>
            <div className="select-input-menu-item" onClick={handleSelect}>
              Margao
            </div>
            <div className="select-input-menu-item" onClick={handleSelect}>
              Curchorem
            </div>
            <div className="select-input-menu-item" onClick={handleSelect}>
              Ponda
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default SelectInput;


