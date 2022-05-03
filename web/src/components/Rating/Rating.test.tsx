import { render } from '@redwoodjs/testing/web'

import Rating from './Rating'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Rating', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Rating />)
    }).not.toThrow()
  })
})
