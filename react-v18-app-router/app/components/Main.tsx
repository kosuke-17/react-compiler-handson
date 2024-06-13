import { ReactNode } from 'react'

export default function Main({ children }: { children: ReactNode }) {
  return <div style={{ height: '100vh' }}>{children}</div>
}
