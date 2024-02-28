import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutComponents } from './styles'

export function DefaultLayout() {
  return (
    <LayoutComponents>
      <Header />
      <Outlet />
    </LayoutComponents>
  )
}
