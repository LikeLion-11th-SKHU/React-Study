import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const pVirtualDOM = React.createElement('p', null, 'Hellow virtual DOM World!')

root.render(pVirtualDOM)