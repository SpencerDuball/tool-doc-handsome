import PriceTag from './PriceTag'
import { HStack } from '@chakra-ui/react'

export const generated = () => {
  return (
    <HStack>
      <PriceTag currency="USD" price={124.0} />
      <PriceTag currency="USD" price={124.0} salePrice={119.0} />
    </HStack>
  )
}

export default { title: 'Components/PriceTag' }
