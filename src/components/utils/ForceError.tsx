import React, { useEffect } from 'react'

export const ForceError: React.FC = () => {
  useEffect(() => {
    throw new Error('test')
  }, [])

  return (
    <>
      <h1>Error Component</h1>
      <p>マウント時に強制的にエラーを発生させるコンポーネント</p>
    </>
  )
}
