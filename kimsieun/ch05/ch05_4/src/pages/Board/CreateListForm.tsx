import type {FC, ChangeEvent} from 'react'
import {useState, useCallback} from 'react'
import {Icon} from '../../theme/daisyui'
import * as D from '../../data'

export type CreateListFromProps = {
  onCreateList: (uuid: string, title:string) => void
}

const CreateListFrom: FC<CreateListFromProps> = ({onCreateList}) => {
  const [vlaue, setValue] = useState<string>(D.randomTitleText())
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(() => e.target.value)
  }, [])
  const addList = useCallback(() => {
    onCreateList(D.randomUUID(), vlaue)
    setValue(() => D.randomTitleText())
  }, [vlaue, onCreateList])

  //prettier-ignore
  return (
    <div className='flex p-2'>
      <input placeholder="title"
      value={vlaue} onChange={onChange}
      className='input-xs input-bordered input input-primary' />
      <Icon name='add' onClick={addList} disabled={!vlaue.length}
      className='ml-2 btn-primary btn-xs' />
    </div>
  )
}

export default CreateListFrom