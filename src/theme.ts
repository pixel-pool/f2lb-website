import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export const Palette = {

  primary:{
    f2lbBlue:'#3a75e2e0',
  },
  secondary:{
    f2lbBlue:'#3a75e2a0',
  },
  box:{
      dark:"#2c313d",
      light:"#edf2f7",
      dark2:"##2e313a",
      light2:"#d2d6db",
  }
}

export default theme