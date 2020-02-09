import React from 'react'
import { render } from '@testing-library/react'
import Grid from '..'

describe('<Grid/>', () => {
  it('renders and matches snapshot', () => {
    const { container } = render(
      <Grid colNum={1}>
        <p>Lorem Ipsum</p>
      </Grid>,
    )

    expect(container).not.toBeNull()
    expect(container).toMatchSnapshot()
  })

  it('append column prop to classname', () => {
    const colNum = 2
    const { container } = render(
      <Grid colNum={colNum}>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </Grid>,
    )

    expect(container.firstChild).toHaveClass(`grid grid--${colNum}`)
  })
})
