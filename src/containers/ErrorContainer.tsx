import React from 'react'

import { ContainerLayout } from '~/components/layouts/ContainerLayout'

export const ErrorContainer: React.FC = () => {
  return (
    <ContainerLayout title="システムエラー" backLinkUrl={null}>
      システムエラーが発生しました。お手数ですが初めから操作を行ってください。
    </ContainerLayout>
  )
}
