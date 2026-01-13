import { Layout } from 'app/layout'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from 'shared/routing'

import { BasketRoutes, MainRoutes, NotFoundRoutes, PaymentRoutes } from './routes'

export const Routing = () => (
  <Routes>
    <Route path={ROUTES.root} element={<Layout />}>
      {MainRoutes}
      {BasketRoutes}
      {NotFoundRoutes}
      {PaymentRoutes}
    </Route>
  </Routes>
)
