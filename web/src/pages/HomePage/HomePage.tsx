import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {
  Container,
  Text,
  IconButton,
  Link as ChakraLink,
  HStack,
  Icon,
  Flex,
  Spacer,
  Stack,
  Box,
  Image,
  Heading,
  Skeleton,
  Select,
  useColorMode,
} from '@chakra-ui/react'
import { RiStore2Fill, RiSunFill } from 'react-icons/ri'
import { FaArrowRight } from 'react-icons/fa'
import { theme, useThemedColor } from '@dub-stack/chakra-radix-colors'
import ProductGrid from 'src/components/ProductGrid/ProductGrid'
import ProductCard from 'src/components/ProductCard/ProductCard'
import { products } from 'src/components/ProductGrid/_data'
import { useState } from 'react'

const HomePage = () => {
  const c = useThemedColor()
  const { toggleColorMode } = useColorMode()
  const [color, setColor] = useState('red')

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {/* Header */}
      <Container as="header" maxW="container.xl" py={4}>
        <Flex>
          {/* Left-Aligned Content */}
          <HStack>
            <ChakraLink
              to={routes.home()}
              as={Link}
              _hover={{ textDecoration: 'none', bg: c('_gray.4') }}
              py={1}
              px={2}
              borderRadius="md"
            >
              <HStack>
                <Icon as={RiStore2Fill} h={8} w={8} />
                <Text as="p" fontWeight="bold">
                  The Market
                </Text>
              </HStack>
            </ChakraLink>
          </HStack>
          <Spacer />
          {/* Right-Aligned Content */}
          <HStack>
            <Select value={color} onChange={(e) => setColor(e.target.value)}>
              {Object.keys(theme.colors)
                .filter(
                  (color) =>
                    !(
                      color.endsWith('Dark') ||
                      color.endsWith('DarkA') ||
                      color.endsWith('A')
                    )
                )
                .map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
            </Select>
            <IconButton
              icon={<RiSunFill />}
              aria-label="Toggle theme"
              variant="ghost"
              onClick={toggleColorMode}
            />
          </HStack>
        </Flex>
      </Container>
      {/* Hero */}
      <Container maxW="container.xl" mx="auto" py={{ base: '0', lg: '12' }}>
        <Stack
          direction={{ base: 'column-reverse', lg: 'row' }}
          spacing={{ base: '0', lg: '20' }}
        >
          <Box
            width={{ lg: 'sm' }}
            transform={{ base: 'translateY(-50%)', lg: 'none' }}
            bg={{
              base: c(`${color}.3`),
              lg: 'transparent',
            }}
            mx={{ base: '6', md: '8', lg: '0' }}
            px={{ base: '6', md: '8', lg: '0' }}
            py={{ base: '6', md: '8', lg: '12' }}
          >
            <Stack spacing={{ base: '8', lg: '10' }}>
              <Stack spacing={{ base: '2', lg: '4' }}>
                <Heading size="xl" color={c(`${color}.9`)}>
                  Misguided
                </Heading>
                <Heading size="xl" fontWeight="normal">
                  Refresh your wardrobe
                </Heading>
              </Stack>
              <HStack spacing="3">
                <ChakraLink
                  color={c(`${color}.9`)}
                  fontWeight="bold"
                  fontSize="lg"
                >
                  Discover now
                </ChakraLink>
                <Icon color={c(`${color}.9`)} as={FaArrowRight} />
              </HStack>
            </Stack>
          </Box>
          <Flex flex="1" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="450px"
              minW="300px"
              objectFit="cover"
              flex="1"
            />
            <Image
              display={{ base: 'none', sm: 'initial' }}
              src="https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="450px"
              objectFit="cover"
            />
          </Flex>
        </Stack>
      </Container>
      <Container maxW="container.xl" mx="auto" py={{ base: '0', lg: '12' }}>
        <ProductGrid>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              colorScheme={color as any}
            />
          ))}
        </ProductGrid>
      </Container>
    </>
  )
}

export default HomePage
