import { createMuiTheme } from '@material-ui/core/styles';
import Minecraft from "./Minecraft.ttf";

export const theme = createMuiTheme({
    typography: {
        fontFamily: "Minecraft",
        fontSize: 12,
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': {
                    fontFamily: 'Minecraft',
                    src: `
                    local('Minecraft'),
                    url(${Minecraft}) format('truetype')
                  `,
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