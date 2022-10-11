import React from "react";
import "./assets/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
 return (
  <div className="nav">
   <ul>
    <li>
     <Link to="/">HOME</Link>
     <br />
     <Link to="/category">Category</Link>
     <br />
     <Link to="/karaoke">Karaoke</Link>
     <br />
     <Link to="/follow">Theo dõi</Link>
     <br />
     <Link to="/radio">Radio</Link>
     <br />
     <Link to="/Nhacmoi">Nhạc Mới</Link>
     <br />
     <Link to="/Zingchart">#Zingchart</Link>
     <br />
     <Link to="/Xephang">Top 100</Link>
     <br />
     <Link to="/MV">MV</Link>
    </li>
   </ul>
  </div>
 );
}

export default Nav;
