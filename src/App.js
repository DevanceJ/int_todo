import React from 'react'
import Nav from './nav'
import Side from './Side'
import Main from './Page1'

const App = () => {
  return (
    <>
    <Nav/>
    <div className="flex">
    <Side/>
    <Main/>
    </div>
    </>
  )
}

export default App