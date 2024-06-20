import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Logo from ".";
import { LogoProps } from "./props";
import { LanguageProvider } from "@/context/language";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

const meta: Meta = {
  title: "Example/Logo",
  component: Logo,
  argTypes: {
    className: { control: "text" },
  },
  decorators: [
    (Story) => (
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </LanguageProvider>
    ),
  ],
};

export default meta;

const Template: StoryFn<LogoProps> = (args) => {
  return <Logo {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: "",
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  className: "custom-logo-class",
};
