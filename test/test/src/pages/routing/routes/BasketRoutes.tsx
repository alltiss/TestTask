import { lazy, Suspense } from 'react'
import React from 'react'
import { Route } from 'react-router-dom'
import { ROUTES } from 'shared/routing'

const Basket = lazy(async () => await import('../../basket'))

export const BasketRoutes = (
  <Route
    path={ROUTES.basket}
    element={
      <Suspense fallback={'...Загрузка'}>
        <Basket />
      </Suspense>
    }
  />
)
