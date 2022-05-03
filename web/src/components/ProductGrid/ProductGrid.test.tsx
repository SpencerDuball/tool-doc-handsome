import { render } from '@redwoodjs/testing/web'

import ProductGrid from './ProductGrid'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProductGrid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductGrid />)
    }).not.toThrow()
  })
})
