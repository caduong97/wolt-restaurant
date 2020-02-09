import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import App from './App'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('App', () => {
  it('renders', () => {
    const initialState = {
      restaurants: [
        {
          city: 'Helsinki',
          currency: 'EUR',
          delivery_price: 390,
          description: 'Japanilaista ramenia parhaimmillaan',
          image:
            'https://prod-wolt-venue-images-cdn.wolt.com/5d108aa82e757db3f4946ca9/d88ebd36611a5e56bfc6a60264fe3f81',
          location: [24.941786527633663, 60.169934599421396],
          name: 'Momotoko Citycenter',
          online: false,
          tags: ['ramen', 'risotto'],
          blurhash: 'j2DUFG8jbu8AXuLIT5Tt0B01R2;;',
        },
      ],
    }

    const store = mockStore(initialState)

    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    expect(container).toBeInTheDocument()
  })
})
