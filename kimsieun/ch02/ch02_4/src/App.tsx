import P from './p'

export default function App() {
  const texts = ['hello', 'world'].map((text, index) => <p key={index} children={text} />)
  return <div children={texts} />
}
