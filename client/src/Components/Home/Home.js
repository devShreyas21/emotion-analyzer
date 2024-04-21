import React from 'react'
import face from '../../assets/Face.gif'
import Navbar from '../Navbar/Navbar'
// import Chatbot from '../Chatbot/Chatbot'

export default function Home(props) {
  return (
    <div>
      <Navbar users={props.users} setUsers={props.setUsers}  />
      <div className='d-flex justify-content-center align-items-center' style={{height:"90vh",color:"#ffffff"}}>
        <div className="container d-flex align-items-center">
          <div className="col-md-6 col-12">
            <div className="fs-3">
            "Emotionally Intelligent Conversations: Your Virtual Companion to Brighten Every Mood"
            </div>
          </div>
          <div className="col-md-6 col-12">
            <img src={face} alt="face" style={{width:"100%"}} />
          </div>
        </div>
      </div>
      {/* <Chatbot /> */}
    </div>
  )
}
