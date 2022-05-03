import { render } from '@redwoodjs/testing/web'

import FavoriteButton from './FavoriteButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FavoriteButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FavoriteButton />)
    }).not.toThrow()
  })
})
