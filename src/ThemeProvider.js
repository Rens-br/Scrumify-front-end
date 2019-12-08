import { ERROR } from "jest-validate/build/utils";

const lightTheme = {
    "--gradient-primary": "linear-gradient(#eb5757,#f08080)",
    "--color-primary": "#EB5757",
    "--color-background-primary": "#FAFAFA",
    "--color-background-dark": "#EDEDED",
    "--color-text-primary": "#000000",
    "--color-text-secondary": "#FAFAFA"
}

const darkTheme = {
    "--gradient-primary": "linear-gradient(#eb5757,#f08080)",
    "--color-primary": "#EB5757",
    "--color-background-primary": "#18181B",
    "--color-background-dark": "#0E0E10",
    "--color-text-primary": "#FAFAFA",
    "--color-text-secondary": "#000000"
}

export const ThemeEnum = {
    LIGHT: 0,
    DARK: 1
}

export let CurrentTheme = lightTheme;

export const ApplyTheme = themeN => {
    switch(themeN){
        case ThemeEnum.LIGHT:
                CurrentTheme = lightTheme;
            break;
        case ThemeEnum.DARK:
                CurrentTheme = darkTheme;
            break;
        default:
            throw ERROR('Unknown theme');
    }

    Object.keys(CurrentTheme).map(key => {
      const value = CurrentTheme[key];
      document.documentElement.style.setProperty(key, value);
      return CurrentTheme;
    });
  };