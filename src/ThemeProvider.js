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
    //PINK
    "--gradient-primary": "linear-gradient(#eb5757,#f08080)",
    "--gradient-overlay": "linear-gradient(#eb5757D0,#f0808090)",
    "--color-primary": "#eb5757",
    "--color-primary-dark": "#eb494e",
    "--color-primary-light": "#f08080",
},{
    //RED
    "--gradient-primary": "linear-gradient(#d32f2f,#e53935)",
    "--gradient-overlay": "linear-gradient(#d32f2fD0,#e5393590)",
    "--color-primary": "#d32f2f",
    "--color-primary-dark": "#c62828",
    "--color-primary-light": "#e53935",
},{
    //GREEN
    "--gradient-primary": "linear-gradient(#388E3C,#43A047)",
    "--gradient-overlay": "linear-gradient(#388E3CD0,#43A04790)",
    "--color-primary": "#388E3C",
    "--color-primary-dark": "#2E7D32",
    "--color-primary-light": "#43A047",
},{
    //BLUE
    "--gradient-primary": "linear-gradient(#1976D2,#1E88E5)",
    "--gradient-overlay": "linear-gradient(#1976D2D0,#1E88E590)",
    "--color-primary": "#1976D2",
    "--color-primary-dark": "#1565C0",
    "--color-primary-light": "#1E88E5",
},{
    //ORANGE
    "--gradient-primary": "linear-gradient(#E64A19,#F4511E)",
    "--gradient-overlay": "linear-gradient(#E64A19D0,#F4511E90)",
    "--color-primary": "#E64A19",
    "--color-primary-dark": "#D84315",
    "--color-primary-light": "#F4511E",
},{
    //YELLOW
    "--gradient-primary": "linear-gradient(#FFB300,#FFC107)",
    "--gradient-overlay": "linear-gradient(#FFB300D0,#FFC10790)",
    "--color-primary": "#FFB300",
    "--color-primary-dark": "#FFA000",
    "--color-primary-light": "#FFC107",
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

let CurrentThemeIndex = 0;
let CurrentHighlightIndex = 0;

export const LoadTheme = () => {
    let themeJson = localStorage.getItem('theme');

    if(themeJson){
        let themeHolder = JSON.parse(themeJson);
        SetTheme(themeHolder.theme);
        SetHighlight(themeHolder.highlight);
    }
    else{
        SetTheme(0);
        SetHighlight(0);
    }
}

export const SetTheme = theme => {
    CurrentTheme = Themes[theme];
    CurrentThemeIndex = theme;
    ApplyStyle();
  };

export const NextTheme = () => {
    let index = (Themes.indexOf(CurrentTheme) + 1) % Themes.length
    CurrentTheme = Themes[index];
    CurrentThemeIndex = index;
    ApplyStyle();
};

export const SetHighlight = highlight => {
    CurrentHighlight = Highlights[highlight];
    CurrentHighlightIndex = highlight;
    ApplyStyle();
};

export const NextHighlight = () => {
    let index = (Highlights.indexOf(CurrentHighlight) + 1) % Highlights.length;
    CurrentHighlight = Highlights[index];
    CurrentHighlightIndex = index;
    ApplyStyle();
};

const ApplyStyle = () => {
    const AppStyle = {...CurrentTheme, ...CurrentHighlight};

    localStorage.setItem('theme', JSON.stringify({theme: CurrentThemeIndex, highlight: CurrentHighlightIndex}))

    Object.keys(AppStyle).map(key => {
        const value = AppStyle[key];
        document.documentElement.style.setProperty(key, value);
        return AppStyle;
    });
};
