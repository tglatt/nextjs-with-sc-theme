import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  primaryColor: string;
  main: string;
}

export const theme = {
  main: 'mediumseagreen',
};

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider };
