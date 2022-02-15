import { extendTheme } from '@chakra-ui/react'
import { designTokens } from './designTokens'

const fonts = {
  body: designTokens.fonts.primary,
}

const colors = {
  brand: {
    primary: {
      pure: designTokens.colors.brand.primary,
    },
    secondary: {
      pure: designTokens.colors.brand.secondary.pure,
      medium: designTokens.colors.brand.secondary.medium,
    },
  },
  low: {
    pure: designTokens.colors.low.pure,
    light: designTokens.colors.low.light,
    medium: designTokens.colors.low.medium,
  },
  high: {
    pure: designTokens.colors.high.pure,
  },
}

const textStyles = {
  title: {
    fontWeight: designTokens.fontWeight.bold,
    fontStyle: designTokens.fontStyle.normal,
    fontSize: designTokens.fontSize.md,
    lineHeight: designTokens.lineHeight.md,
  },
}

const styles = {
  global: () => ({
    body: {
      minHeight: '100%',
      maxWidth: '570px',
      display: 'flex',
      top: '0',
      left: '0',
      margin: '0',
      padding: '0',
      fontFamily: 'Work Sans',
      boxSizing: 'border-box',
    },
  }),
}

export const theme = extendTheme({ fonts, colors, textStyles, styles })
