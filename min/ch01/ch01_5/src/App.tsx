// export default function App() {
//   console.log('App called.')
//   return <h1>Hello world!</h1>
// }

import * as D from './data'

export default function App() {
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" alt="작은 랜덤 사진" />
      <img src={D.randomImage()} height="300" alt="큰 랜덤 사진" />
    </div>
  )
}
