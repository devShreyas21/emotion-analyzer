import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout(props) {
  
  const navigate = useNavigate()

  useEffect(() => {
    props.setUsers({})
    navigate('/')

  }, [])
  


  return (
    <div>Logout</div>
  )
}
