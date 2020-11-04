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
                    src: `
                      local('Minecraft'),
                      url('/public/font/Minecraft.ttf') format('ttf')
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