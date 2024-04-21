import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js/auto';
import { Chart } from 'chart.js'
import axios from 'axios';
import './Report.css'
import html2pdf from 'html2pdf.js'; // Import html2pdf library
// import Chatbot from '../Chatbot/Chatbot';


export default function Report(props) {

  const [Emotions, setEmotions] = useState({})
  const [Text, setText] = useState("")

  const fetch = async () =>{
    const result = await axios.post("http://localhost:4000/fetch", props.users)
    // console.log(result.data.key2)
    setEmotions(result.data.key1)

    const htmlString = result.data.key2

    document.getElementById('render').innerHTML=htmlString
  }
  
  useEffect(() => {
    fetch()
  }, [])

  const download = () => {
    const report = document.getElementById("report");
    report.style.backgroundColor = "black";
  
    const opt = {
      margin: 1,
      filename: "myReport.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: {
        unit: "mm",
        orientation: "portrait"
      }
    };
  
    // Set options and generate PDF
    html2pdf().set(opt).from(report).save();
  }
  

  Chart.register(CategoryScale);

  return (
    <div>
      <Navbar  users={props.users} setUsers={props.setUsers} />
      <div className="container" id='report'>
        <div>
          <div className="container" style={{width:"50%"}}>

            <Bar data={
              {
                labels:['sadness', 'happiness', 'anger', 'disgust', 'fear', 'neutral', 'surprise'],  	
                datasets:[
                  {
                    label: "Emotions",
                    data : [Emotions.sadness,Emotions.happiness,Emotions.anger,Emotions.disgust,Emotions.fear,Emotions.neutral,Emotions.surprise]
                  }
                ]
              }
            }/>
          </div>

          <div style={{color:"white"}} id="render"></div>
        </div>
      </div>

      <div className="d-flex justify-content-end">
          <div>
            <button className="btn btn-primary" onClick={download}>Download Report</button>
          </div>
      </div>

      {/* <Chatbot /> */}

    </div>
  )
}
