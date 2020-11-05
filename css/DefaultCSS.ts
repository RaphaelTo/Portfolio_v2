import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    typography: {
        fontFamily: "Minecraft",
        fontSize: 12,
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': {
                    fontFamily: 'minecraft',
                    src: `
                        url('/font/Minecraft.ttf') format('truetype'),
                        url('/font/Minecraft.woff') format('woff'),
                        url('/font/Minecraft.woff2') format("woff2");
                    `
                },
                'html, body, #__next, #layout': {
                    backgroundColor: 'black',
                    color: 'white',
                    width: '100%',
                    height: '100%',
                },
                'button, input, textarea': {
                    fontFamily: "Minecraft"
                }
            }
        }
    }
});