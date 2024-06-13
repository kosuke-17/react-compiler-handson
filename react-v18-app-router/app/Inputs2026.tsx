import { useState } from 'react'
import { MONTH } from '@/constant'
import Cell from './components/Cell'

export const Inputs2026 = () => {
  return (
    <>
      <Cell text='2026年' isWiderColumn />
      {/* 合計値非表示 */}
      <Cell text={''} />

      {MONTH.map((m) => (
        <Input month={m} key={`2026-${m}`} />
      ))}
    </>
  )
}

export const Input = ({ month }: { month: number }) => {
  const [value2026, setValue2026] = useState(0)

  const handleChange2026 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (typeof value === 'number') {
      setValue2026(value)
    }
  }

  return (
    <input
      className='border-gray-300 border px-3 size-9 w-20'
      type='number'
      name={`2026-${month}`}
      value={value2026}
      onChange={handleChange2026}
    />
  )
}
