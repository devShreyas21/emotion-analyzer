import './About.css';
import React from 'react'
// import img1 from '../../assets/'
import img1 from '../../assets/app-development.png'
import img2 from '../../assets/internet-of-things.png'
import img3 from '../../assets/machine-learning.png'
import Navbar from '../Navbar/Navbar';
// import Chatbot from '../Chatbot/Chatbot';

export default function About(props) {
  return (
    <div>
      <Navbar users={props.users} setUsers={props.setUsers} />
      <div>
        <div className="container my-5" style={{color:"#ffffff"}}>
          <span className="fs-4" style={{textAlign:"justify", textJustify:"inter-word"}}>
          "Welcome to our website, where technology meets empathy to uplift spirits and spread joy. Our mission is to create meaningful connections through emotionally intelligent conversations. Join us on this journey to foster positivity and well-being in every interaction."
          </span>
        </div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">

            <div className="col-md-3 col-12 my-3 d-flex justify-content-center">
              <div>
                <div className="imgDiv" >
                  <img src={img2} alt="" className='image' />
                </div>
                <div className="bg">
                </div>
                <div className="role">
                  <p className="fs-3 text-light ms-4">Iot Engineer</p>
                </div>
                <div className="descDiv">
                  <p className="text-light p-2">Pranav Dighade, an IoT Engineer, creates, designs, and integrates IoT solutions for seamless connectivity and functionality. </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-12 my-3 d-flex justify-content-center">
              <div>
                <div className="imgDiv" >
                  <img src={img3} alt="" className='image' />
                </div>
                <div className="bg">
                </div>
                <div className="role">
                  <p className="fs-3 text-light ms-4">Data Scientist</p>
                </div>
                <div className="descDiv">
                  <p className=" text-light p-2">Sanskar Jayale, Data Scientist adept at analyzing complex data, deriving insights, and building predictive models for informed decision-making.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3 col-12 my-3 d-flex justify-content-center">
              <div>
                <div className="imgDiv" >
                  <img src={img1} alt="" className='image' />
                </div>
                <div className="bg">
                </div>
                <div className="role">
                  <p className="fs-3 text-light ms-4">Web Developer</p>
                </div>
                <div className="descDiv">
                  <p className="text-light p-2">Shreyas Kshirsagarin is a skilled Web Developer adept in creating responsive and dynamic web applications with a passion for innovation.</p>
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
