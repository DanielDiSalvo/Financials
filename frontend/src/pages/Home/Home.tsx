import React from "react";
import { styles } from "./styles";
import type { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";
import Form from "../../components/Form/Form";
import DataGridAccount from "../../components/DataGridAccount/DataGridAccount";
import DataGridBusiness from "../../components/DataGridBusiness/DataGridBusiness";

const Home = () => {
  const accountsData = useSelector(
    (state: RootState) => state.fetchAccounts.accounts
  );

  const businessData = useSelector(
    (state: RootState) => state.fetchBusinnes.business
  );

  return (
    <main style={styles.container}>
      <Form />

      {businessData.length ? <DataGridBusiness data={businessData} /> : null}

      {accountsData.length ? <DataGridAccount data={accountsData} /> : null}
    </main>
  );
};

export default Home;
