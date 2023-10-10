import {useCallback, useState, useMemo} from 'react'
import {Title, Div} from '../components'
import {Icon} from '../theme/daisyui'
import * as D from '../data'
import React from 'react'

export default function ArrayState() {
  const [images, setImages] = useState<string[]>([])
  const addImage = useCallback(
    () => setImages(Images => [D.randomImage(200, 100, 50), ...images]),
    []
  )
  const clearImages = useCallback(() => setImages(notUsed => []), [])
  const children = useMemo(
    () =>
      images.map((images, index) => (
        <Div
          key={index}
          src={images}
          className="w-1/5 m-2"
          height="5rem"
          minHeight="5rem"
        />
      )),
    [images]
  )
  return (
    <section className="mt-4">
      <Title>ArrayState</Title>
      <div className="flex justify-center mt-4 ">
        <div data-tip="add image" className="tooltip">
          <Icon name="add" onClick={addImage} className="mr-12 btn-primary" />
        </div>
        <div data-tip="clear all" className="tooltip">
          <Icon name="clear _all" onClick={clearImages} />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  )
}