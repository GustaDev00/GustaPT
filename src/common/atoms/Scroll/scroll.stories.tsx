import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Scroll from ".";
import { LanguageProvider } from "@/context/language";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

const meta: Meta = {
  title: "Example/Scroll",
  component: Scroll,
  decorators: [
    (Story) => (
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </LanguageProvider>
    ),
  ], // Adicione o LanguageProvider como um decorador
};

export default meta;

const Template: StoryFn = (args) => {
  return <Scroll {...args} />;
};

export const Default = Template.bind({});
