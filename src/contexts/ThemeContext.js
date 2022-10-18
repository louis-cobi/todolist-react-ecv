import { createContext } from "react";

export const themes = {
  dark: {
    isDark : true,
    class :"dark-bg",
    color: "#fff" ,
    backgound: "#1c1c1c",
    backgoundItem: "#11181C",
    gradient :  "45deg, $yellow600 -20%, $red600 100%",
  },
  light: {
    isDark: false,
    class :"",
    color: "#1c1c1c" ,
    backgound: "#fff",
    backgoundItem: "#F1F3F5",
    gradient:  "45deg, $blue600 -20%, $pink600 50%",
  },
};

export const ThemeContext = createContext({
  theme: themes.light,
  changeTheme: () => {},
});
