import { DependencyList, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { loadingState } from '~/states/loading'

export function useSetLoadingSpinner(deps: DependencyList) {
  const setIsLoading = useSetRecoilState(loadingState)

  useEffect(() => {
    setIsLoading(deps.some((v) => v))
  }, deps)
}
