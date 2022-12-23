import * as React from 'react'
import { render } from './utils'

import { MyCounter } from '../components/App'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<MyCounter />)
  })

  it('renders with core name', () => {
    const { getByText } = render(<MyCounter />)
    expect(getByText('hello: 0')).toBeInTheDocument()
  })
})
