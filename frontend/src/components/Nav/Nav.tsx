import React from "react";
import { styles } from "./styles";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={styles.container}>
      <ul style={styles.ul}>
        <Link to="/" style={styles.li}>
          Home
        </Link>
        <Link to="/about" style={styles.li}>
          About
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
