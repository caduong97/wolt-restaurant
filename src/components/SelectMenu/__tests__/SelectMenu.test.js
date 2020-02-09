import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { SelectMenu } from '..'

describe('<SelectMenu />', () => {
  const mockSortAsc = jest.fn()
  const mockSortDesc = jest.fn()

  it('renders and matches snapshot', () => {
    const { container } = render(
      <SelectMenu sortAsc={mockSortAsc} sortDesc={mockSortDesc} />,
    )
    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
  it('renders and matches snapshot', () => {
    const { getByTestId } = render(
      <SelectMenu sortAsc={mockSortAsc} sortDesc={mockSortDesc} />,
    )

    const sortAscButton = getByTestId('sort-ascending')
    const sortDescButton = getByTestId('sort-descending')

    fireEvent.click(sortAscButton)
    expect(mockSortAsc).toHaveBeenCalled()
    fireEvent.click(sortDescButton)
    expect(mockSortDesc).toHaveBeenCalled()
  })
})
