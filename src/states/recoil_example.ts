import { atom, DefaultValue, selector } from 'recoil'

export const textState = atom<string>({
  key: 'textState',
  default: '',
})

export const textCountState = selector<number>({
  key: 'textCountState',
  get: ({ get }) => get(textState).length,
})

export const textPadState = selector<string>({
  key: 'textPadState',
  get: ({ get }) => {
    const text = get(textState)
    return text.padStart(10, 'x')
  },
  // optional
  set: ({ set }, newValue) => {
    const text = newValue instanceof DefaultValue ? newValue : newValue.padStart(10, 'x')
    set(textState, text)
  },
})
