import ProductCard from './ProductCard'
import { products } from 'src/components/ProductGrid/_data'
import { HStack } from '@chakra-ui/react'

export const generated = () => {
  return (
    <HStack>
      <ProductCard
        rootProps={{ w: 64 }}
        key={products[0].id}
        product={products[0]}
      />
      <ProductCard
        rootProps={{ w: 64 }}
        key={products[1].id}
        product={products[1]}
      />
      <ProductCard
        rootProps={{ w: 64 }}
        key={products[2].id}
        product={products[2]}
      />
    </HStack>
  )
}

export default { title: 'Components/ProductCard' }
