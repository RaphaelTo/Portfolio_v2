const withFonts = require('@preco21/next-fonts')
module.exports = withFonts({
    webpack(config, options) {
        return config
    }
})