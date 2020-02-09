import React from 'react'
import { render } from '@testing-library/react'
import Card from '..'

describe('<Card/>', () => {
  const mockData = {
    image:
      'https://prod-wolt-venue-images-cdn.wolt.com/5d108aa82e757db3f4946ca9/d88ebd36611a5e56bfc6a60264fe3f8',
    name: 'Momotoko Citycenter',
    description: 'Japanilaista ramenia parhaimmillaan',
    city: 'Helsinki',
    tags: ['ramen', 'risotto'],
  }

  it('renders and matches snapshot', ({
    image,
    name,
    description,
    city,
    tags,
  } = mockData) => {
    const { container } = render(
      <Card
        image={image}
        name={name}
        description={description}
        city={city}
        tags={tags}
      />,
    )

    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
  it('display tags as string', ({
    image,
    name,
    description,
    city,
    tags,
  } = mockData) => {
    const { getByTestId } = render(
      <Card
        image={image}
        name={name}
        description={description}
        city={city}
        tags={tags}
      />,
    )

    const tagStr = getByTestId('restaurant-tags')
    expect(tagStr.textContent).toBe(tags.join(', '))
  })

  it('display img with src and alt', ({
    image,
    name,
    description,
    city,
    tags,
  } = mockData) => {
    const { getByAltText } = render(
      <Card
        image={image}
        name={name}
        description={description}
        city={city}
        tags={tags}
      />,
    )

    const cardImg = getByAltText(name)
    expect(cardImg.src).toEqual(image)
  })
})
