import { useMemo, useState } from 'react'
import { MONTH, VALUES } from '@/constant'
import Cell from './components/Cell'
import { Input } from './components/Input'

export const Inputs2025 = () => {
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

  const totalValue = values2025.reduce((a, value2025) => a + value2025.value, 0)

  // const memolizedTotalValue = useMemo(
  //   () => values2025.reduce((a, values2025) => a + values2025.value, 0),
  //   [values2025]
  // )

  return (
    <>
      <Cell text='2025年child' isWiderColumn />
      <Cell text={totalValue} />
      {/* <Cell text={memolizedTotalValue} /> */}

      {MONTH.map((m) => {
        const v = values2025.find((v) => v.key === `2025-${m}`)
        return (
          <Input
            type='number'
            name={`2025-${m}`}
            key={`2025-${m}`}
            value={v?.value}
            onChange={(e) => handleChange2025(e, `2025-${m}`)}
          />
        )
      })}
    </>
  )
}
