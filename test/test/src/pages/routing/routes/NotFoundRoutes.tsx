import { lazy, Suspense } from 'react'
import React from 'react'
import { Route } from 'react-router-dom'
import { ROUTES } from 'shared/routing'

const NotFound = lazy(async () => await import('../../notFound'))

export const NotFoundRoutes = (
  <Route
    path={ROUTES.notFound}
    element={
      <Suspense fallback={'...Загрузка'}>
        <NotFound />
      </Suspense>
    }
  />
)
