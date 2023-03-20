import React from "react";
import { styles } from "./styles";

export interface IHeaderProps {
  title?: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <header style={styles.container}>
      <h1 style={styles.title}> {title} </h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Financials App",
};

export default Header;
