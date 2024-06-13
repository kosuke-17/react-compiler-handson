import { MONTH } from '@/constant'
import Cell from './Cell'

export default function Header() {
  return (
    <div className='flex'>
      <Cell text='年' isWiderColumn />
      <Cell text='合計' />
      {MONTH.map((m) => (
        <Cell text={`${m}月`} key={m} />
      ))}
      <Cell text='承認' />
      <Cell text='承認状況' isWiderColumn />
    </div>
  )
}
