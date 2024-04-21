import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {

  const [User, setUser] = useState({name:"",username:"", email:"",password:""})

  const navigate = useNavigate()

  const getData = async () => {
    console.log(User)
    await axios.post('http://localhost:4000/signUp', User)
    navigate('/login')
  }

  const Changed = (e) => {
    setUser({...User,[e.target.name]:e.target.value})
  }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh",color:"#ffffff"}}>
      <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
        <span className="fs-1">Welcome, <br />Please register</span>
      </div>
      <div className="col-md-6 col-12 d-flex justify-content-start align-items-center">
        <div className="contain d-flex align-items-center justify-content-center">
          <div>
            <div>
              <p className='fs-4 text-center' style={{color:"white"}}>Sign-Up</p>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <div>
                <input type="text" placeholder='Name' onChange={Changed} name='name' id="name"/>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <div>
                <input type="text" placeholder='Username' onChange={Changed} name='username' id="username"/>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <div>
                <input type="email" placeholder='Email' onChange={Changed} name='email' id="email"/>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <div>
                <input type="text" placeholder='0.0.0.0' onChange={Changed} name='ip_address' id="ip_address"/>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <div>
                <input type="password" placeholder='Password' onChange={Changed} name="password" id="password"/>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <div>
                <button className='btn btn-primary px-5' onClick={getData} style={{borderRadius:"10px"}}>Sign-up</button>
              </div>
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <div>
                <span className="fs-6 px-3">Already have account ? <Link to="/login" style={{textDecoration:"none"}}>Login</Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
