import * as React from 'react'
import { render } from './utils'

import { FeedbackButton } from '../components'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<FeedbackButton />)
  })

  it('renders with core name', () => {
    const { getByText } = render(<FeedbackButton>hello</FeedbackButton>)
    expect(getByText('hello')).toBeInTheDocument()
  })
})
