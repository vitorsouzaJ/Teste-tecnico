import { styled } from 'styled-components'
import { FlexBox } from '@src/components/utils/core/FlexBox'

export const Container = styled(FlexBox)`
  position: sticky;
  top: 0;
  z-index: 75;
  background-color: ${({ theme }) => theme.colors.primary[1]};
  margin-bottom: ${({ theme }) => theme.font.sizes.xxxs};
  padding: 0.3rem;
  box-shadow: ${({ theme }) => theme.colors.types.boxShadow};
`

export const ProductListContainer = styled.div`
  margin: 20px 0;
`

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
`
