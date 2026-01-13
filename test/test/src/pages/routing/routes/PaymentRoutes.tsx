import { lazy, Suspense } from 'react'
import React from 'react'
import { Route } from 'react-router-dom'
import { ROUTES } from 'shared/routing'

const Payment = lazy(async () => await import('../../payment'))

export const PaymentRoutes = (
  <Route
    path={ROUTES.payment}
    element={
      <Suspense fallback={'...Загрузка'}>
        <Payment />
      </Suspense>
    }
  />
)
