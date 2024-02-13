import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as HeaderStyles from './styles'

const Header: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [navigate])

  return (
    <HeaderStyles.Container
      align="center"
      justify="flex-end"
      direction="row"
      gap="xxs"
    >
      <h1>Plataforma de Comércio Eletrônico</h1>
    </HeaderStyles.Container>
  )
}

export default Header
