import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/hello-world">Hello World</Link>
        </li>
        <li>
          <Link to="/comp">Comp</Link>
        </li>
        <li>
          JSX
          <ul>
            <li>
              <Link to="/jsx1">JSX1</Link>
            </li>
            <li>
              <Link to="/jsx2">JSX2</Link>
            </li>
            <li>
              <Link to="/jsx3">JSX3</Link>
            </li>
            <li>
              <Link to="/jsx4">JSX4</Link>
            </li>
            <li>
              <Link to="/jsx5">JSX5</Link>
            </li>
            <li>
              <Link to="/jsx-practise">JSX Practise</Link>
            </li>
          </ul>
        </li>

        <li>
          Styles

          <ul>
            <li>
              <Link to="/style1">Style1</Link>
            </li>
            <li>
              <Link to="/style2">Style2</Link>
            </li>
            <li>
              <Link to="/style3">Style3</Link>
            </li>
          </ul>
        </li>

        <li><Link to="/exchange">Exchange</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;