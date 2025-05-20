import { MD3LightTheme, MD3DarkTheme, configureFonts } from "react-native-paper"
import { DefaultTheme as NavigationLightTheme, DarkTheme as NavigationDarkTheme } from "@react-navigation/native"

const fontConfig = {
  fontFamily: "Poppins-Regular",
  headingFontFamily: "Poppins-SemiBold",
}

const baseTheme = {
  animation: {
    defaultDuration: 250,
    scale: 1.0,
  },
  roundness: 24,
  elevation: {
    level0: 0,
    level1: 2,
    level2: 3,
    level3: 4,
    level4: 6,
    level5: 8,
  },
  fonts: configureFonts({ config: fontConfig }),
}

export const lightTheme = {
  ...MD3LightTheme,
  ...NavigationLightTheme,
  ...baseTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...NavigationLightTheme.colors,
    primary: "#013a63",
    primaryContainer: "#cce0eb",
    secondary: "#c7f9cc",
    secondaryContainer: "#eefdf0",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    error: "#B00020",
    text: "#000000",
    onSurface: "#000000",
    disabled: "#BDBDBD",
    placeholder: "#757575",
    backdrop: "rgba(0, 0, 0, 0.5)",
    notification: "#FF4081",
    card: "#FFFFFF",
    border: "#E0E0E0",
  },
}

export const darkTheme = {
  ...MD3DarkTheme,
  ...NavigationDarkTheme,
  ...baseTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: "#66a3c3",
    primaryContainer: "#012e4f",
    secondary: "#8af294",
    secondaryContainer: "#16a023",
    background: "#121212",
    surface: "#1E1E1E",
    error: "#CF6679",
    text: "#FFFFFF",
    onSurface: "#FFFFFF",
    disabled: "#757575",
    placeholder: "#BDBDBD",
    backdrop: "rgba(0, 0, 0, 0.5)",
    notification: "#FF4081",
    card: "#1E1E1E",
    border: "#2C2C2C",
  },
}
