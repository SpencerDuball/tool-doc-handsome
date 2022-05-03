import { HStack, StackProps, Text, TextProps } from '@chakra-ui/react'
import * as React from 'react'
import { useThemedColor } from '@dub-stack/chakra-radix-colors'

interface PriceTagProps {
  currency: string
  price: number
  salePrice?: number
  rootProps?: StackProps
  priceProps?: TextProps
  salePriceProps?: TextProps
}

export type FormatPriceOptions = { locale?: string; currency?: string }

export function formatPrice(
  value: number,
  opts: { locale?: string; currency?: string } = {}
) {
  const { locale = 'en-US', currency = 'USD' } = opts
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    maximumFractionDigits: 2,
  })
  return formatter.format(value)
}

const PriceTag = (props: PriceTagProps) => {
  const { price, currency, salePrice, rootProps, priceProps, salePriceProps } =
    props
  return (
    <HStack spacing="1" {...rootProps}>
      <Price isOnSale={!!salePrice} textProps={priceProps}>
        {formatPrice(price, { currency })}
      </Price>
      {salePrice && (
        <SalePrice {...salePriceProps}>
          {formatPrice(salePrice, { currency })}
        </SalePrice>
      )}
    </HStack>
  )
}

export default PriceTag

interface PriceProps {
  children?: React.ReactNode
  isOnSale?: boolean
  textProps?: TextProps
}

const Price = (props: PriceProps) => {
  const c = useThemedColor()
  const { isOnSale, children, textProps } = props
  const defaultColor = c('_gray.11')
  const onSaleColor = c('_gray.8')
  const color = isOnSale ? onSaleColor : defaultColor
  return (
    <Text
      as="span"
      fontWeight="medium"
      color={color}
      textDecoration={isOnSale ? 'line-through' : 'none'}
      {...textProps}
    >
      {children}
    </Text>
  )
}

const SalePrice = (props: TextProps) => {
  const c = useThemedColor()
  return (
    <Text as="span" fontWeight="semibold" color={c('_gray.12')} {...props} />
  )
}
