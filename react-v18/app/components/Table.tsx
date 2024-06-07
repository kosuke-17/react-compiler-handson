import { ReactNode } from 'react'

export default function Table({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>{children}</div>
    </div>
  )
}
