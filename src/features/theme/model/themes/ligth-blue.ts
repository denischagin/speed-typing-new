import {AppTheme} from "@features/theme";

const lightBlueTheme: AppTheme = {
    id: "Main light",
    name: "Main light",
    colors: {
        main: {
            50: 'rgb(0, 0, 0, 0.1)',
            100: 'rgb(0, 0, 0, 0.2)',
            200: 'rgb(0, 0, 0, 0.3)',
            300: 'rgb(0,0,0, 0.4)',
            400: 'rgb(0, 0, 0, 0.5)',
            500: 'rgb(0, 0, 0, 0.6)',
            600: 'rgb(0, 0, 0, 0.6)',
            700: 'rgb(0, 0, 0, 0.7)',
            800: 'rgb(0, 0, 0, 0.8)',
            900: 'rgb(0,0,0)'
        },
        primary: {
            50: "rgba(157,255,232,0.16)",
            100: "rgba(59,255,209,0.21)",
            200: "rgba(53,253,200,0.36)",
            300: "rgba(1,216,168,0.52)",
            400: "rgba(0,255,217,0.53)",
            500: "rgba(0,255,200,0.65)",
            600: "rgba(0,255,200,0.62)",
            700: "rgba(0,255,200,0.7)",
            800: "rgba(0,255,200,0.84)",
            900: "#00ffc8"
        },
        contrast: {
            50: 'rgb(255, 255, 255)',
            100: 'rgb(255, 255, 255, 0.9)',
            200: 'rgb(255, 255, 255, 0.8)',
            300: 'rgb(255, 255, 255, 0.7)',
            400: 'rgb(255, 255, 255, 0.6)',
            500: 'rgb(255, 255, 255, 0.5)',
            600: 'rgb(255, 255, 255, 0.4)',
            700: 'rgb(255, 255, 255, 0.3)',
            800: 'rgb(255, 255, 255, 0.2)',
            900: 'rgb(255, 255, 255, 0.1)',
        }
    }
};

export default lightBlueTheme;
