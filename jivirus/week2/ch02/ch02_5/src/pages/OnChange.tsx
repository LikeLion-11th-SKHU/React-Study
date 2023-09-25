import type { ChangeEvent } from 'react'

export default function OnChange() {
  const OnChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log('onChangeValue', e.target.value)
  }
  const OnChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeChecked', e.target.checked)
  }
  const OnChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeFiles', e.target.files)
  }
  // prettier-ignore
  return (
    <div>
      <p>OnChange</p>
      <input type="text" onChange={OnChangeValue}
        placeholder="type some text" defaultValue="Hello"/>
      <input type="checkbox" onChange={OnChangeChecked} defaultChecked/>
      <input type="file" onChange={OnChangeFiles} multiple accept="images/*" />
    </div>
  )
}