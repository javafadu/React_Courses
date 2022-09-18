import React, { useContext } from "react";
import { FormGroup, Input } from "reactstrap";
import StoreContext from "../../store";
import "./topbar.scss";

const Topbar = () => {
  // Merkezi state e erişmek için
  const store = useContext(StoreContext);
  const { currencies, darkMode, setDarkMode } = store;
  // ***************

  return (
    <nav className="exchange-topbar">
      <ul>
        <li>
          <h2>
            Exchange
            <FormGroup switch>
              <Input type="switch" checked={darkMode} onClick={() => setDarkMode(prev=> !prev)} />
            </FormGroup>
          </h2>
        </li>
        <li>
          <span>
            <b>$:</b> {(1 / currencies.USD).toFixed(2)}₺{" "}
          </span>
          <span>
            <b>€:</b> {(1 / currencies.EUR).toFixed(2)}₺{" "}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;