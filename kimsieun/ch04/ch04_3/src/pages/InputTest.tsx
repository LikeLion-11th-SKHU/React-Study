import type {ChangeEvent} from 'react'
import {useState, useCallback} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'
import React from 'react'

export default function InputTest() {
  const [value, setValue] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.value)
    setValue(notUsed => e.target.value)
  }, [])
  const onChangeChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target.checked)
    setChecked(notUsed => e.target.checked)
  }, [])

  return (
    <section className="mt-4">
      <Title>InputTest</Title>
      <div className="flex items-center justify-center p-4 mt-4">
        <input type="text" value={value} onChange={onChangeValue} />
        <input type="checkbox" checked={checked} onChange={onChangeChecked} />
      </div>
    </section>
  )
}
