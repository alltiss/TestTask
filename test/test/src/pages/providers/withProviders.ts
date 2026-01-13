import { I18nProvider, RouterProvider, StoreProvider } from 'app/providers'
import { compose } from '@reduxjs/toolkit'

export const withProviders = compose(I18nProvider, RouterProvider, StoreProvider)
