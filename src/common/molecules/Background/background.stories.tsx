import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Background from ".";

const meta: Meta = {
  title: "Example/Background",
  component: Background,
};

export default meta;

const Template: StoryFn = (args) => {
  return <Background {...args} />;
};

export const Default = Template.bind({});
