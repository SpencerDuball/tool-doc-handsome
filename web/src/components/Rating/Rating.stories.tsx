import { HStack } from '@chakra-ui/react'
import Rating from './Rating'

export const generated = () => {
  return (
    <HStack>
      <Rating defaultValue={4} />
      <Rating defaultValue={4} colorScheme="red" />
      <Rating defaultValue={4} colorScheme="blue" />
      <Rating defaultValue={4} colorScheme="amber" />
    </HStack>
  )
}

export default { title: 'Components/Rating' }
