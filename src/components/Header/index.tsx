import { Scroll, Timer } from 'phosphor-react'
import { HeaderContainer } from './styles'

import { NavLink } from 'react-router-dom'
import timerLogo from '../../assets/timer-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={timerLogo} alt="" />
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}