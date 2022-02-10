import React from 'react'

import { ContainerLayout } from '~/components/layouts/ContainerLayout'
import { ForceError } from '~/components/utils/ForceError'

export const ErrorContainer: React.FC = () => {
  return (
    <ContainerLayout title="Emotion example">
      <ForceError />
    </ContainerLayout>
  )
}
