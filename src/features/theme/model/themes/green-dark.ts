import {AppTheme} from "@features/theme";

export const greenDarkTheme: AppTheme = {
    id: "Green Dark",
    name: "Green Dark",
    colors: {
        main: {
            50: 'rgba(167,219,229,0.04)',
            100: 'rgba(183,237,231,0.08)',
            200: 'rgba(170,229,223,0.16)',
            300: 'rgba(170,230,229,0.2)',
            400: 'rgba(163,225,216,0.25)',
            500: 'rgba(169,225,232,0.35)',
            600: 'rgba(164,225,214,0.6)',
            700: 'rgba(191,237,233,0.7)',
            800: 'rgba(203,236,239,0.8)',
            900: 'rgb(218,253,250)'
        },
        primary: {
            50: 'rgb(0,230,203)',
            100: 'rgba(0,230,211,0.8)',
            200: 'rgba(41,255,218,0.7)',
            300: 'rgba(31,255,230,0.6)',
            400: 'rgba(40,255,232,0.6)',
            500: 'rgba(48,255,225,0.35)',
            600: 'rgba(22,255,236,0.25)',
            700: 'rgba(31,255,237,0.20)',
            800: 'rgba(0,230,188,0.15)',
            900: 'rgba(0,211,230,0.10)'
        },
        contrast: {
            50: 'rgba(0, 0, 0, 0.1)',
            100: 'rgba(0, 0, 0, 0.2)',
            200: 'rgba(0, 0, 0, 0.4)',
            300: 'rgba(0, 0, 0, 0.5)',
            400: 'rgba(0, 0, 0, 0.6)',
            500: 'rgba(0, 0, 0, 0.65)',
            600: 'rgba(0, 0, 0, 0.7)',
            700: 'rgba(0, 0, 0, 0.8)',
            800: 'rgba(0, 0, 0, 0.9)',
            900: 'rgba(0, 0, 0, 1)',
        },
    },
};
