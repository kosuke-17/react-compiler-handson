'use client'

import { useCallback, useState } from 'react'
import { Input } from './Input'
import { Inputs2024, MemolizedInputs2024 } from './Inputs2024'
import { Inputs2025 } from './Inputs2025'

const YEAR = [2023, 2024, 2025]
const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const VALUES: { key: string; value: number }[][] = YEAR.map((y) => {
  return MONTH.map((m) => {
    return {
      key: `${y}-${m}`,
      value: 0,
    }
  })
})

export default function App() {
  const [values2023, setValues2023] = useState(VALUES[0])

  const handleChange2023 = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const target = values2023.find((v) => v.key === key)
    const newValues = values2023.map((v) => {
      if (v.key === target?.key) {
        return {
          key: target.key,
          value: Number(e.target.value),
        }
      }
      return v
    })

    setValues2023(newValues)
    console.log({ target })
  }

  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className=''>
        <div className='flex'>
          <div className='border-gray-300 border px-3 size-9 w-32'>年</div>
          {MONTH.map((m) => {
            return (
              <div className='border-gray-300 border px-3 size-9 w-20' key={m}>
                {m}月
              </div>
            )
          })}
        </div>
        <div>
          <div className='flex' key='2023'>
            <div className='border-gray-300 border px-3 size-9 w-32'>
              2023年
            </div>
            {MONTH.map((m) => {
              const v = values2023.find((v) => v.key === `2023-${m}`)
              return (
                <Input
                  type='number'
                  name={`2023-${m}`}
                  key={`2023-${m}`}
                  value={v?.value}
                  onChange={(e) => handleChange2023(e, `2023-${m}`)}
                  className='border-gray-300 border px-3 size-9 w-20'
                />
              )
            })}
          </div>

          <Inputs2024 month={MONTH} />
          {/* <MemolizedInputs2024 month={MONTH} /> */}

          <Inputs2025 month={MONTH} />
        </div>
      </div>
    </main>
  )
}
