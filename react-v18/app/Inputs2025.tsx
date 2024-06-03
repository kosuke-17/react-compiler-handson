import { useState } from 'react'
import { VALUES } from './page'
import { Input } from './Input'

export const Inputs2025 = (props: { month: number[] }) => {
  const [values2025, setValues2025] = useState(VALUES[2])
  const handleChange2025 = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const target = values2025.find((v) => v.key === key)
    const newValues = values2025.map((v) => {
      if (v.key === target?.key) {
        return {
          key: target.key,
          value: Number(e.target.value),
        }
      }
      return v
    })

    setValues2025(newValues)
  }
  return (
    <div className='flex' key='2025'>
      <div className='border-gray-300 border px-3 size-9 w-32'>2025年child</div>
      {props.month.map((m) => {
        const v = values2025.find((v) => v.key === `2025-${m}`)
        return (
          <Input
            type='number'
            name={`2025-${m}`}
            key={`2025-${m}`}
            value={v?.value}
            onChange={(e) => handleChange2025(e, `2025-${m}`)}
            className='border-gray-300 border px-3 size-9 w-20'
          />
        )
      })}
    </div>
  )
}
