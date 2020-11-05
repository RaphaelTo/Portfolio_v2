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
                    fontFamily: 'Minecraft',
                    src: `url("/font/Minecraft.ttf") 
                    url("/font/Minecraft.woff") 
                    url("/font/Minecraft.woff2") 
                    local('Minecraft')
                    format(truetype)`
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