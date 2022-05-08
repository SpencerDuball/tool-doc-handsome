import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "components/header/header";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);
