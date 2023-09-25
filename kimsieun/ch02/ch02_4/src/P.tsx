import type {FC, PropsWidthChildren} from 'react'
02:
export type PProps = {}
const P: FC<PropsWidthChildren<PProps>> = props => {
  return <p {...props} />
}
export default P