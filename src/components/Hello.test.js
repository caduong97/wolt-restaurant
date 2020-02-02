import React from 'react'
import { render } from '@testing-library/react'
import Hello from './Hello'

test('renders', () => {
  const { container } = render(<Hello />)
  expect(container).toBeInTheDocument()
})
