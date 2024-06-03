'use client'

import { ChangeEventHandler, useState } from 'react'
import { NameView } from './NameView'
import { AgeView } from './AgeView'

export default function App() {
  const [name, setName] = useState('John DoeXXXXX')
  const [age, setAge] = useState(20)

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value)
  }
  const handleChangeAge: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAge(Number(e.target.value))
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
      <div>
        <label>
          name{' '}
          <div>
            <input type='text' value={name} onChange={handleChangeName} />
          </div>
        </label>
      </div>
      <div>
        <label>
          age{' '}
          <div>
            <input type='number' value={age} onChange={handleChangeAge} />
          </div>
        </label>
      </div>

      <hr />

      <NameView name={name} />
      <AgeView age={age} />
    </main>
  )
}
