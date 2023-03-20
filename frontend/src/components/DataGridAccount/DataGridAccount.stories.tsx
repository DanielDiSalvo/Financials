/* eslint-disable react/react-in-jsx-scope */
import { Meta, Story } from "@storybook/react/types-6-0";
import { AccountsMockData } from "../../mocks/Accounts/Accounts";
import DataGridAccount, { IDataGridAccountProps } from "./DataGridAccount";

export default {
  component: DataGridAccount,
  parameters: {
    docs: {
      description: {
        component: "DataGridAccount",
      },
    },
  },
  title: "DataGridAccount",
} as Meta;

const Template: Story<IDataGridAccountProps> = ({
  data,
}: IDataGridAccountProps) => <DataGridAccount data={data} />;

export const Primary = Template.bind({});
Primary.args = {
  data: AccountsMockData,
};
