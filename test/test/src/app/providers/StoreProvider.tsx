import { store } from 'app/store/store'
import { type ReactNode } from 'react'
import { Provider } from 'react-redux'

export const StoreProvider = (component: () => ReactNode) => () => {
  return <Provider store={store}>{component()}</Provider>
}
