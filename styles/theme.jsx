import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    layout: {
      50: "#1C1A17",
      100: "rgba(0, 0, 0, 0.6)",
      200: "#16181A",
      300: "#ffffff",
      400: "#ECEDEE",
      500: "rgba(236,237,238,0.2)",
      600: "rgba(255, 255, 255, 0.15)",
      700: "#ffffff",
      800: "#000000",
    },
    primary: {
      50: "#10253E",
      100: "#102C4C",
      200: "#0F3158",
      300: "#0D3868",
      400: "#0A4281",
      500: "#0952A5",
      600: "#0072F5",
      700: "#3694FF",
      800: "#3694FF",
      900: "#EAF4FF",
    },
    accents: {
      100: "#16181A",
      200: "#26292B",
      300: "#2B2F31",
      400: "#313538",
      500: "#3A3F42",
      600: "#4C5155",
      700: "#697177",
      800: "#787F85",
      900: "#ECEDEE",
    },
    transparent: "transparent",
  },
  fonts: {
    heading: "Darker Grotesque, sans-serif",
    body: "Darker Grotesque, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "10px",
      },
      variants: {
        primary: {
          bg: "primary.500",
          color: "white",
          _hover: {
            bg: "primary.600",
          },
        },
        secondary: {
          bg: "transparent",
          color: "white",
          border: "1px solid",
          borderColor: "white",
          _hover: {
            bg: "white",
            color: "black",
          },
        },
      },
    },
    Input: {
      baseStyle: {
        borderRadius: "0px",
        borderColor: "white",
        _hover: {
          borderColor: "white",
        },
        _focus: {
          borderColor: "white",
        },
      },
    },
    Text: {
      baseStyle: {
        color: "white",
        font: "Darker Grotesque, sans-serif",
      },
    },
    Link: {
      baseStyle: {
        color: "white",
      },
    },
  },
});

export default theme;
