/* eslint-disable react/react-in-jsx-scope */
import { Meta, Story } from "@storybook/react/types-6-0";
import { BusinessMockData } from "../../mocks/Business/Business";
import DataGridBusiness, { IDataGridBusinessProps } from "./DataGridBusiness";

export default {
  component: DataGridBusiness,
  parameters: {
    docs: {
      description: {
        component: "DataGridBusiness",
      },
    },
  },
  title: "DataGridBusiness",
} as Meta;

const Template: Story<IDataGridBusinessProps> = ({
  data,
}: IDataGridBusinessProps) => <DataGridBusiness data={data} />;

export const Primary = Template.bind({});
Primary.args = {
  data: BusinessMockData,
};
