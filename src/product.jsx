import React, { useState } from 'react'

const product = () => {
    const [count, setcount] = useState(0)
  return (
    <button onClick={(e)=> setcount(e.target.vlaue + 1)}>{count}</button>
  )
}

export default product