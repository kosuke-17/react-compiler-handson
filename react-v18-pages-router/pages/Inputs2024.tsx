import { memo, useState } from 'react'
import { MONTH, VALUES } from '@/constant'
import { Input } from '@/components/Input'
import Cell from '@/components/Cell'

export const Inputs2024 = () => {
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

  const totalValue = values2024.reduce((a, value2024) => a + value2024.value, 0)

  return (
    <>
      <Cell text='2024年memo' isWiderColumn />
      <Cell text={totalValue} />

      {MONTH.map((m) => {
        const v = values2024.find((v) => v.key === `2024-${m}`)
        return (
          <Input
            type='number'
            name={`2024-${m}`}
            key={`2024-${m}`}
            value={v?.value}
            onChange={(e) => handleChange2024(e, `2024-${m}`)}
          />
        )
      })}
    </>
  )
}

export const MemolizedInputs2024 = memo(Inputs2024)
