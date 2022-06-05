import { useSelector } from "react-redux";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import ProximaNovaRegular from "../assets/fonts/ProximaNova-Regular.otf";
import ProximaNovaLight from "../assets/fonts/ProximaNova-Light.otf";
import ProximaNovaBold from "../assets/fonts/ProximaNova-Bold.otf";
import Dark from "../assets/images/dark.jpg";
import Light from "../assets/images/light.jpg";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pregular';
    src: url(${ProximaNovaRegular});
  }
  @font-face {
    font-family: 'Plight';
    src: url(${ProximaNovaLight});
  }
  @font-face {
    font-family: 'Pbold';
    src: url(${ProximaNovaBold});
  }
  body {
    font-family: ${({ theme }) => theme.fonts.regular};
  }
`;

const breakPoints = {
  xs: 468,
  sm: 600,
  m: 768,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const themeLight = {
  colors: {
    cardTextColor: "#000000",
    cardColor: "#ffffff",
    modalColor: "#22303C",
    cardTitles: "#757575",
    white: "#FFFFFF",
    black: "#000000",
    noBgTextColor: "#000000",
    todoTitles: "#ffffff",
    successColor: "#28A745",
    dangerColor: "#DC3545",
    warningColor: "#E0A800",
    infoColor: "#17A2B8",
  },
  breakPoints,
  backgrounds: {
    modalBackground: "#15202B",
    menuBackground: "#15202B",
    profileAccordions: "#b4b4b4",
    cardBackground: "#FFFFFF",
    todoAccordions: "rgb(0, 76, 153)",
    onlineUsers: "rgb(0, 76, 153)",
  },
  borders: {
    todoBorders: "1px solid rgb(0, 127, 255)",
  },
  fonts: {
    regular: "Pregular",
    light: "Plight",
    bold: "Pbold",
  },
  fontSizes: {
    extraSmall: "10px",
    small: "14px",
    medium: "16px",
    large: "18px",
    extraLarge: "20px",
  },
  darkModal: "#ffffff",
  buttonColors: {
    dark: "#22303c",
  },
  mainBackground: Light,
};

const themeDark = {
  colors: {
    cardTextColor: "#ffffff",
    cardColor: "#222B45",
    modalColor: "#22303C",
    cardTitles: "#c0c0c0",
    white: "#FFFFFF",
    black: "#000000",
    noBgTextColor: "#FFFFFF",
    todoTitles: "#ffffff",
    successColor: "#28A745",
    dangerColor: "#DC3545",
    warningColor: "#E0A800",
    infoColor: "#17A2B8",
  },
  breakPoints,
  backgrounds: {
    modalBackground: "#FFFDF9",
    menuBackground: "#415469",
    profileAccordions: "#3c4b75",
    cardBackground: "#222B45",
    todoAccordions: "rgb(0, 30, 60)",
    onlineUsers: "rgb(0, 30, 60)",
  },
  borders: {
    todoBorders: "1px solid rgb(30, 73, 118)",
  },
  darkModal: "#222B45",
  fonts: {
    regular: "Pregular",
    light: "Plight",
    bold: "Pbold",
  },
  fontSizes: {
    extraSmall: "10px",
    small: "14px",
    medium: "16px",
    large: "18px",
    extraLarge: "20px",
  },
  buttonColors: {
    dark: "#22303c",
  },
  mainBackground: Dark,
};

const DarkThemeProvider = ({ children }) => {
  const darkMode = false
  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;