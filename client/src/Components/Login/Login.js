import React,{useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login(props) {

  const [User, setUser] = useState({username:"",password:""})

  const Navigate = useNavigate() 

  const Changed = (e) => {
    setUser({...User,[e.target.name]:e.target.value})
  }

  const LoginUser = async () => {
    // console.log(User)
    const result = await axios.post('http://localhost:4000/login', User)
    props.setUsers(result.data)
    Navigate('/')
  } 


  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh",color:"#ffffff"}}>
      <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
        <span className="fs-1">Welcome, <br />Please login</span>
      </div>
      <div className="col-md-6 col-12 d-flex justify-content-start align-items-center">
        <div className="contain d-flex align-items-center justify-content-center">
          <div>
            <div>
              <p className='fs-4 text-center' style={{color:"white"}}>Login</p>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <div>
                <input type="text" placeholder='Username' onChange={Changed} name='username' id="username"/>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <div>
                <input type="password" placeholder='Password' onChange={Changed} name="password" id="password"/>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <div>
                <button className='btn btn-primary px-5' onClick={LoginUser} style={{borderRadius:"10px"}}>Login</button>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <div>
                <span className="fs-6 px-3">Dont have account ? <Link to="/signUp" style={{textDecoration:"none"}}>Sign-up</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
