type Props = {
  name: string
}

export const NameView = ({ name }: Props) => {
  return <section>name: {name}</section>
}
