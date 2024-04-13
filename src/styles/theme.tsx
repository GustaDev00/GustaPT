import "styled-components";

export const theme = {};

export type ColorFamily = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ColorFamily {}
}
