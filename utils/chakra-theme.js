import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
    fonts: {
        heading: "glitch",
        body: "glitch",
    },
    styles: {
        global: {
            "@font-face": [
                {
                    fontFamily: "glitch",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    src: `
                url('/fonts/SdglitchdemoRegular-YzROj.woff2') format('woff2'),
                url('/fonts/SdglitchdemoRegular-YzROj.woff') format('woff')
              `,
                    unicodeRange: "U+0000-FFFF",
                },
            ],
        },
    },

});

export default theme;