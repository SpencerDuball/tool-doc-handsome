import { Icon, IconButton, IconButtonProps, LightMode } from '@chakra-ui/react'
import * as React from 'react'
import { FiHeart } from 'react-icons/fi'
import { useThemedColor } from '@dub-stack/chakra-radix-colors'

const FavouriteButton = (props: IconButtonProps) => {
  const c = useThemedColor()
  return (
    <LightMode>
      <IconButton
        isRound
        bg={c('_gray.1')}
        color={c('_gray.12')}
        size="sm"
        _hover={{ transform: 'scale(1.1)' }}
        sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
        transition="all 0.15s ease"
        icon={<Icon as={FiHeart} transition="all 0.15s ease" />}
        boxShadow="base"
        {...props}
      />
    </LightMode>
  )
}

export default FavouriteButton
