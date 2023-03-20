/* eslint-disable react/react-in-jsx-scope */
import { Meta, Story } from "@storybook/react/types-6-0";

import Header, { IHeaderProps } from "./Header";

export default {
  component: Header,
  parameters: {
    docs: {
      description: {
        component: "Header",
      },
    },
  },
  title: "Header",
} as Meta;

export const Template: Story<IHeaderProps> = ({ title }: IHeaderProps) => (
  <Header title={title} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Demo Title",
};
