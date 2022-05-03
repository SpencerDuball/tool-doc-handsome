import { render } from '@redwoodjs/testing/web'

import PriceTag from './PriceTag'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PriceTag', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PriceTag />)
    }).not.toThrow()
  })
})
