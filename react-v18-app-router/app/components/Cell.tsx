type Props = {
  text: string | number
  isWiderColumn?: boolean
}

export default function Cell({ text, isWiderColumn = false }: Props) {
  const headerWidth = isWiderColumn ? 'w-32' : 'w-20'
  return (
    <div className={`border-gray-300 border px-3 size-9 ${headerWidth}`}>
      {text}
    </div>
  )
}
