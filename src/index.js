import React, { useState } from 'react'
import { render } from 'react-dom'
import moment from 'moment'

import './style.scss'

import { getUsers } from './common/usersAPI'

getUsers().then((data) => data.map(({ name }) => console.log(name)))

function App() {
  const [state, setState] = useState('CLICK ME')

  return <button onClick={() => setState('CLICKED')}>{state}</button>
}

render(<App />, document.getElementById('root'))
