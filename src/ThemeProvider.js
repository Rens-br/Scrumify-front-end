const Themes = [{
    "--color-background-primary": "#FAFAFA",
    "--color-background-dark": "#EDEDED",
    "--color-text-primary": "#000000",
    "--color-text-secondary": "#FAFAFA"
},{
    "--color-background-primary": "#18181B",
    "--color-background-dark": "#0E0E10",
    "--color-text-primary": "#FAFAFA",
    "--color-text-secondary": "#000000"
}];

const Highlights = [{
    //RED
    "--gradient-primary": "linear-gradient(#d32f2f,#e53935)",
    "--color-primary": "#d32f2f",
    "--color-primary-dark": "#c62828",
    "--color-primary-light": "#e53935",
},{
    //GREEN
    "--gradient-primary": "linear-gradient(#388E3C,#43A047)",
    "--color-primary": "#388E3C",
    "--color-primary-dark": "#2E7D32",
    "--color-primary-light": "#43A047",
},{
    //BLUE
    "--gradient-primary": "linear-gradient(#1976D2,#1E88E5)",
    "--color-primary": "#1976D2",
    "--color-primary-dark": "#1565C0",
    "--color-primary-light": "#1E88E5",
},{
    //ORANGE
    "--gradient-primary": "linear-gradient(#E64A19,#F4511E)",
    "--color-primary": "#E64A19",
    "--color-primary-dark": "#D84315",
    "--color-primary-light": "#F4511E",
}];


export const ThemeEnum = {
    LIGHT: 0,
    DARK: 1
};

export const HighlightEnum = {
    RED: 0,
    GREEN: 1,
    BLUE: 2,
    ORANGE: 3
};

export let CurrentTheme = {...Themes[0]};
export let CurrentHighlight = {...Highlights[0]};

export const SetTheme = theme => {
    CurrentTheme = Themes[theme];
    ApplyStyle();
  };

export const NextTheme = () => {
    CurrentTheme = Themes[(Themes.indexOf(CurrentTheme) + 1) % Themes.length];
    ApplyStyle();
};

export const SetHighlight = highlight => {
    CurrentHighlight = Highlights[highlight];
    ApplyStyle();
};

export const NextHighlight = () => {
    CurrentHighlight = Highlights[(Highlights.indexOf(CurrentHighlight) + 1) % Highlights.length];
    ApplyStyle();
};

const ApplyStyle = () => {
    const AppStyle = {...CurrentTheme, ...CurrentHighlight};

    Object.keys(AppStyle).map(key => {
        const value = AppStyle[key];
        document.documentElement.style.setProperty(key, value);
        return AppStyle;
    });
};
