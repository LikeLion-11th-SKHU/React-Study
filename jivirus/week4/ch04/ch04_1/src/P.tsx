import type {FC, PropsWithChildren} from 'react'

export type PProps = {}
const P: FC<PropsWithChildren<PProps>> = props => {
  const {children} = props
  return <p children={children} />
}
export default P