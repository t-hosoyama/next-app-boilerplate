import React, { useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

import { ContainerLayout } from '~/components/layouts/ContainerLayout'
import { textCountState, textPadState, textState } from '~/states/recoil_example'

export const RecoilContainer: React.FC = () => {
  // atom
  const inputRef = useRef<HTMLInputElement>(null)
  const [text, setText] = useRecoilState(textState)

  // selector
  const input2Ref = useRef<HTMLInputElement>(null)
  const [text2, setText2] = useRecoilState(textPadState)

  // count by selector
  const count = useRecoilValue(textCountState)

  // set by atom
  const handleInputByAtom = () => {
    if (!inputRef.current) {
      return
    }
    setText(inputRef.current.value)
  }

  // set by selector
  const handleInputBySelector = () => {
    if (!input2Ref.current) {
      return
    }
    setText2(input2Ref.current.value)
  }

  return (
    <>
      <ContainerLayout title="Recoil exsample">
        <h2>atom</h2>

        <ul>
          <li>get value: {text}</li>
          <li>count: {count}</li>
          <li>
            set: <input ref={inputRef} type="text" onChange={handleInputByAtom} maxLength={10} />
          </li>
        </ul>

        <hr />

        <h2>selector</h2>
        <ul>
          <li>get value: {text2}</li>
          <li>
            set:{' '}
            <input ref={input2Ref} type="text" onChange={handleInputBySelector} maxLength={10} />
          </li>
        </ul>
      </ContainerLayout>
    </>
  )
}
