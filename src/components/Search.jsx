import { Input } from 'antd'
import React from 'react'

function Search({handleSearch}) {
  return (
    <Input placeholder='Search Food' onChange={handleSearch}/>
  )
}

export default Search