import * as React from 'react'
import { render } from '../test/utils'

import { MyCounter } from './App'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<MyCounter />)
  })

  it('renders with core name', () => {
    const { getByText } = render(<MyCounter />)
    expect(getByText('core: 0')).toBeInTheDocument()
  })
})
