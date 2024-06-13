import { ReactNode } from 'react'

export default function Table({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  )
}
