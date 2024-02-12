import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    // h2 : {fontSize: {lg: '48px', md: '48px', sm: '30px', xs: '20px'}, fontWeight: 700},
    // h3: {fontSize: {lg: '40px', md: '33px', sm: '25px', xs: '16px'}, fontWeight: 700},
    // h4: {fontSize: {lg: '32px', md: '26px', sm: '20px', xs: '13px'}},
    // h5: {fontSize: {lg: '24px', md: '20px', sm: '15px', xs: '10px'}},
    // h6: {fontSize: {lg: '20px', md: '16px', sm: '12px', xs: '8px'}},
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1160,
      xl: 1536,
      xxl: 1900,
      // добавьте свои кастомные breakpoints
      // custom1: 500,
      // custom2: 800,
    },
  },
  palette: {
    mainWhite: {
      main: "#FEFDFD",
    },
    mainBlue: {
      main: "#3278FF",
    },
    mainBlack: {
      main: "#353535",
    },
    lightGrey: {
      main: "#F0F0F0",
    },
    darkGrey: {
      main: "#8A8A8A",
    },
    // coral: {
    //     main: '#FF3278'
    // },
    // green: {
    //     main: '#58E011'
    // },
    // blue: {
    //     main: '#32DFFF'
    // },
    // orange: {
    //     main: '#FFB932'
    // },
    // customColor: {
    //     mainBlue: '#',
    //     mainBlack: '#353535',
    //     mainWhite: '#FEFDFD',
    //     lightGrey: '#F0F0F0',
    //     darkGrey: '#8A8A8A',
    //     coral: '#FF3278',
    //     green: '#58E011',
    //     blue: '#32DFFF',
    //     orange: '#FFB932',
    // },
  },
});

theme.typography.h1 = {
  fontSize: "96px",

  [theme.breakpoints.only("md")]: {
    fontSize: "80px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "60px",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "40px",
  },
};
theme.typography.h2 = {
  fontSize: "40px",
  lineHeight: '37.2px',
  fontWeight: 400,
  [theme.breakpoints.only("sm")]: {
    fontSize: "32px",
    lineHeight: '32px',
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "24px",
    lineHeight: '24px',
  },
};
theme.typography.h3 = {
  fontSize: "40px",
  [theme.breakpoints.only("md")]: {
    fontSize: "33px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "20px",
  },
};
theme.typography.h4 = {
  fontSize: "32px",
  fontWeight: 400,
  [theme.breakpoints.only("md")]: {
    fontSize: "26px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "16px",
  },
};
theme.typography.h5 = {
  fontSize: "24px",
  fontWeight: 400,
  [theme.breakpoints.only("md")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "15px",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "13px",
  },
};
theme.typography.h6 = {
  fontSize: "20px",
  fontWeight: 400,
  [theme.breakpoints.only("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.only("sm")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.only("xs")]: {
    fontSize: "10px",
  },
};
