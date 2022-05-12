import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SideNav } from "components/side-nav/side-nav";

export default {
  title: "Components/SideNav",
  component: SideNav,
} as ComponentMeta<typeof SideNav>;

export const Default: ComponentStory<typeof SideNav> = (args) => (
  <SideNav h="100vh" />
);
