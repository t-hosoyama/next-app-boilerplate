/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import '@emotion/react'

declare module '@emotion/react' {
  interface Theme {
    colors: Colors
  }
}

interface Colors = {
  primary: string
  secondary: string
}
