import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  StackProps,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import Rating from 'src/components/Rating/Rating'
import FavoriteButton from 'src/components/FavoriteButton/FavoriteButton'
import PriceTag from 'src/components/PriceTag/PriceTag'
import { Product } from 'src/components/ProductGrid/./_data'
import { theme, useThemedColor } from '@dub-stack/chakra-radix-colors'

interface Props {
  product: Product
  colorScheme?: keyof typeof theme['colors']
  rootProps?: StackProps
}

const ProductCard = (props: Props) => {
  const c = useThemedColor()
  const { product, rootProps, colorScheme = 'red' } = props
  const { name, imageUrl, price, salePrice, rating } = product
  return (
    <Stack spacing={useBreakpointValue({ base: '4', md: '5' })} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}
          />
        </AspectRatio>
        <FavoriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="medium" color={c('_gray.12')}>
            {name}
          </Text>
          <PriceTag price={price} salePrice={salePrice} currency="USD" />
        </Stack>
        <HStack>
          <Rating defaultValue={rating} size="sm" colorScheme={colorScheme} />
          <Text fontSize="sm" color={c('_gray.12')}>
            12 Reviews
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Button colorScheme={colorScheme} isFullWidth>
          Add to cart
        </Button>
        <Link
          textDecoration="underline"
          fontWeight="medium"
          color={c('_gray.12')}
        >
          Quick shop
        </Link>
      </Stack>
    </Stack>
  )
}

export default ProductCard
