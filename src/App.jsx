import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IoIosArrowDown } from "react-icons/io";

function App() {

  let Data=[
    { id:1,
      ques:"What does Lorem means ??",
      ans:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."
    },
    { id:2,
      ques:"When was it introduced ??",
      ans:"The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century."
    },
    { id:3,
      ques:"Where can I subscribe to newsletters ??",
      ans:"We often send out our newsletter with news and great offers. We will never disclose your data to third parties and you can unsubscribe from the newsletter at any time. Subscribe here to our newsletter."
    },
    { id:4,
      ques:"Which shipping address to add ??",
      ans:"If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account."
    },
    { id:5,
      ques:"Can I order free sample copy of magazine ??",
      ans:"Unfortunately, we’re unable to offer free samples. As a retailer, we buy all magazines from their publishers at the regular trade price. However, you could contact the publisher directly."
    },
    { id:6,
      ques:"Where can I find disclaimer and privacy policy ??",
      ans:"All data will be treated as strictly confidential and will not be disclosed to third parties. Take a look on our disclaimer and Privacy Policy."
    },
    { id:7,
      ques:"Can I reserve a magazine ??",
      ans:"No it is not in our policy yet."
    },
  ]

  return (
    <>
      <div className='main'>
         <h1>Accordian</h1>

         <div className='row'>
             {
              Data.map((v,i)=>{
                return(
                  <>
                     <Faq quesData={v.ques} ansData={v.ans} index={i}/>
                  </>
                )
              })
             }
         </div>
      </div>
    </>
  )
}

export default App

let Faq=({quesData, ansData, index})=>{

  const[myans,setAns]=useState(false)

  let displayAns=()=>{
    setAns(!myans)
  }

  // console.log(value)
  return(
    <>
     <h4 onClick={displayAns}> {quesData} <span ><IoIosArrowDown /></span> </h4>
     <p className={myans==true ? "showAns":"hideans"}>{ansData}</p>
    </>
  )
}

