/* eslint-disable react/react-in-jsx-scope */
import { Meta, Story } from "@storybook/react/types-6-0";
import { store } from "../../redux/store/store";
import { Provider as StoreProvider } from "react-redux";

import Form from "./Form";

export default {
  component: Form,
  parameters: {
    docs: {
      description: {
        component: "Form",
      },
    },
  },
  title: "Form",
} as Meta;

export const Template: Story = () => (
  <StoreProvider store={store}>
    <Form />
  </StoreProvider>
);
