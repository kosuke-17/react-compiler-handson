import { InputHTMLAttributes } from 'react'

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input className='border-gray-300 border px-3 size-9 w-20' {...props} />
  )
}
