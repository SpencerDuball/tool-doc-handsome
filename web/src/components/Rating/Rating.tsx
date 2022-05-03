import { HStack, Icon, StackProps } from '@chakra-ui/react'
import * as React from 'react'
import { FaStar } from 'react-icons/fa'
import { theme, useThemedColor } from '@dub-stack/chakra-radix-colors'

interface Props {
  defaultValue?: number
  max?: number
  size?: 'sm' | 'md' | 'lg' | 'xl'
  rootProps?: StackProps
  colorScheme?: keyof typeof theme['colors']
}

const Rating = (props: Props) => {
  const c = useThemedColor()
  const {
    defaultValue = 0,
    max = 5,
    size = 'md',
    rootProps,
    colorScheme = '_gray',
  } = props
  const color = c(`_gray.3`)
  const activeColor = c(`${colorScheme}.9`)
  return (
    <HStack spacing="0.5" {...rootProps}>
      {Array.from({ length: max })
        .map((_, index) => index + 1)
        .map((index) => (
          <Icon
            key={index}
            as={FaStar}
            fontSize={size}
            color={index <= defaultValue ? activeColor : color}
          />
        ))}
    </HStack>
  )
}

export default Rating
