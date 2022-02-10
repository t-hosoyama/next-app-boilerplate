import React from 'react'

import { ContainerLayout } from '~/components/layouts/ContainerLayout'
import { GlobalStyle } from '~/components/utils/GlobalStyle'

export const ErrorContainer: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ContainerLayout title="システムエラー" backLinkUrl={null}>
        システムエラーが発生しました。お手数ですが初めから操作を行ってください。
      </ContainerLayout>
    </>
  )
}
