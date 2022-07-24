import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export const Palette = {
    box:{
        dark:"#2c313d",
        light:"#edf2f7",
        dark2:"##2e313a",
        light2:"#d2d6db",
    }
}

export default theme