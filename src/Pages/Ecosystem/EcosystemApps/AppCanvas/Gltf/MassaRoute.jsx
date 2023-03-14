import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MassaModel } from './Massa'

export function MassaRoute() {
  const navigate = useNavigate()
  const handleClick=()=>{
   navigate("/defi")
  }
 
  return (
    <MassaModel onClick={handleClick}/>
  )
}
