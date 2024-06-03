import { memo, useState } from 'react'
import { VALUES } from './page'
import { Input } from './Input'

export const Inputs2024 = (props: { month: number[] }) => {
  const [values2024, setValues2024] = useState(VALUES[1])
  const handleChange2024 = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const target = values2024.find((v) => v.key === key)
    const newValues = values2024.map((v) => {
      if (v.key === target?.key) {
        return {
          key: target.key,
          value: Number(e.target.value),
        }
      }
      return v
    })

    setValues2024(newValues)
  }
  return (
    <div className='flex' key='2024'>
      <div className='border-gray-300 border px-3 size-9 w-32'>2024年memo</div>
      {props.month.map((m) => {
        const v = values2024.find((v) => v.key === `2024-${m}`)
        return (
          <Input
            type='number'
            name={`2024-${m}`}
            key={`2024-${m}`}
            value={v?.value}
            onChange={(e) => handleChange2024(e, `2024-${m}`)}
            className='border-gray-300 border px-3 size-9 w-20'
          />
        )
      })}
    </div>
  )
}

export const MemolizedInputs2024 = memo(Inputs2024)
