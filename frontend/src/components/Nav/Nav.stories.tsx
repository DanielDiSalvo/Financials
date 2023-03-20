/* eslint-disable react/react-in-jsx-scope */
import { Meta, Story } from "@storybook/react/types-6-0";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./Nav";

export default {
  component: Nav,
  parameters: {
    docs: {
      description: {
        component: "Nav",
      },
    },
  },
  title: "Nav",
} as Meta;

export const Template: Story = () => (
  <Router>
    <Nav />
  </Router>
);
