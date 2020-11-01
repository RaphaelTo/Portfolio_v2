import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    typography: {
        fontFamily: "Minecraft",
        fontSize: 12,
        src: `url("/font/Minecraft.ttf") format("truetype")`
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
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