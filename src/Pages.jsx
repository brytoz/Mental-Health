import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './webpages/Home'
import Login from './webpages/Login'
import Error from './webpages/Error'

const Pages = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default Pages
