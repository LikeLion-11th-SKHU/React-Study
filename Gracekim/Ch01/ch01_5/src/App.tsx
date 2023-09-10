import React from 'react'; // 이 구문을 넣지않았을 때 오류가 발생함.
import * as D from './data'

export default function App() {
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" />
      <img src={D.randomImage()} height="300" />
    </div>
  )
}