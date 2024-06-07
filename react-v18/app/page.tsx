'use client'

import { useState } from 'react'
import { MONTH, VALUES } from '@/constant'

import Cell from './components/Cell'
import Header from './components/Header'
import { Input } from './components/Input'
import { Inputs2024, MemolizedInputs2024 } from './Inputs2024'
import { Inputs2025 } from './Inputs2025'
import Row from './components/Row'
import Rows from './components/Rows'
import Table from './components/Table'
import TableContent from './components/TableContent'
import { Inputs2026 } from './Inputs2026'
import TableTitle from './components/TableTitle'
import Main from './components/Main'
import Toggle from './components/Toggle'

export default function App() {
  const [values2023, setValues2023] = useState(VALUES[0])
  const [isApproval, setIsApproval] = useState(false)

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
  }

  const handleApprove = () => {
    return setIsApproval(!isApproval)
  }

  const totalValue = values2023.reduce((a, value2023) => a + value2023.value, 0)

  return (
    <Main>
      <Table>
        <TableTitle title='田中さんの休日日数' />
        <TableContent>
          <Header />

          <Rows>
            <Row key='2023'>
              <Cell text='2023年' isWiderColumn />
              <Cell text={totalValue} />

              {MONTH.map((m) => {
                const v = values2023.find((v) => v.key === `2023-${m}`)
                return (
                  <Input
                    type='number'
                    name={`2023-${m}`}
                    key={`2023-${m}`}
                    value={v?.value}
                    onChange={(e) => handleChange2023(e, `2023-${m}`)}
                  />
                )
              })}

              <Toggle isApproval={isApproval} handleApprove={handleApprove} />
              <div className='border-gray-300 border px-3 size-9 w-32 flex items-center'>
                {isApproval ? '承認' : '未承認'}
              </div>
            </Row>

            <Row key='2024'>
              {/* <Inputs2024 /> */}
              <MemolizedInputs2024 />
            </Row>

            <Row key='2025'>
              <Inputs2025 />
            </Row>

            <Row key='2026'>
              <Inputs2026 />
            </Row>
          </Rows>
        </TableContent>
      </Table>
    </Main>
  )
}
