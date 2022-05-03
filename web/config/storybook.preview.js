import * as React from 'react'
import { theme } from '@dub-stack/chakra-radix-colors'

import { ChakraProvider } from '@chakra-ui/react'

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
