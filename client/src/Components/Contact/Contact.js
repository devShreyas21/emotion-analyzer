import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import "./Contact.css"
import { useNavigate } from 'react-router-dom'

export default function Contact(props) {

  const navigate = useNavigate()

  const [Feedback, setFeedback] = useState({})

  const Changed = (e) => {
    setFeedback({...Feedback,[e.target.name]:e.target.value})
  }

  const getData = async () => {
    // console.log(Feedback)
    const result = await axios.post('http://localhost:4000/feedback', Feedback)
    navigate("/")
  }

  return (
    <div>
      <Navbar users={props.users} setUsers={props.setUsers} />
      <div className="container">
        <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">

        </div>
        <div className="col-md-8 col-12 d-flex justify-content-center align-items-center">
          <div className="contain d-flex align-items-center justify-content-center">
            <div>
              <div>
                <p className='fs-4 text-center' style={{color:"white"}}>Feedback Form</p>
              </div>
              <div className="mb-3 d-flex ">
                <div>
                  <input type="text" placeholder='Name' onChange={Changed} name='name' id="name"/>
                </div>
              </div>
              <div className="mb-3 d-flex">
                <div>
                  <input type="email" placeholder='Email' onChange={Changed} name='email' id="email"/>
                </div>
              </div>
              <div className="mb-3 d-flex ">
                <div>
                  <textarea
                    style={{backgroundColor:"#000000", border:"2px solid #ffffff", borderRadius:"10px", paddingInline:"10px", color:"#ffffff"}}
                    rows={5}
                    cols={40}
                    onChange={Changed}
                    placeholder="Your feedback..."
                    name="feedback" id="feedback"
                  />
                  {/* <input type="text" placeholder='Feedback' onChange={Changed} name="feedback" id="feedback"/> */}
                </div>
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <div>
                  <button className='btn btn-primary px-5' onClick={getData} style={{borderRadius:"10px"}}>Feedback</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Chatbot /> */}
    </div>
  )
}
