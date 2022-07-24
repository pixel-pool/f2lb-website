import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Spacer,
  HStack,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Header } from "./components/Header"
import { Mode } from "./components/Mode"
import { Footer } from "./components/Footer"

export const App = () => (
  <ChakraProvider theme={theme}>

    <Box textAlign="center" fontSize="xl">
      <Header />
      <Mode />
      <Footer />
    </Box>
  </ChakraProvider>
)
