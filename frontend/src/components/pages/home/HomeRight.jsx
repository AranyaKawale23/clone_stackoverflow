import React from 'react'
import './homeright.css'
import pencil from '../../../assets/pencil.png'
import mesage from '../../../assets/mesage.png'
import stackOverflowLogo from '../../../assets/stack-overflow.png'


const HomeRight = () => {
  // ---- hardcoded page ----
  let upperData = [
    {
      heading: 'The Overflow Blogs',
      innerdatahead: [pencil, pencil],
      innerdata: ["Observability is key to the future of software (and your DevOps career)",
        "Podcast 374: How valuable is your screen name?"
      ]
    },
    {
      heading: 'Featured On Meta',
      innerdatahead: [mesage, mesage, stackOverflowLogo],
      innerdata: ["Review Queue workflows - Final release....",
        "errPlease welcome values Associations: #958 - V2Blast #959 - SpencerG",
        "Outdated Answers: accepted answer is now unpinned on Stack Overflow"
      ],
    },
    {
      heading: 'Not Meta Post',
      innerdatahead: [30, 20, 14],
      innerdata: [
        "Why was this spam flag declined, yet the Question marked as spam?",
        "What is the best course of action when a user has high enough rep to...",
        "Is a link to the 'How to ask' help a page useful comment?"
      ]
    },
  ]

  let watchTags = [
    'c', 'c++', 'express', 'firebase', 'html', 'java', 'javaScript', 'mern',
    'mongodb', 'mysql', 'react.js', 'node js', 'php', 'python', 'native'
  ]

  return (
    <>
      <aside className='rightSide-bar' >
        {/* ------- upper part -------- */}
        <div className='rightside-upper-div'>

          <div className='rightside-upper-div-boxes'>
            <h4 className='rightside-heading'>{upperData[0].heading}</h4>
            <p className='upper-div-data'><img className='upper-div-data-icons' src={upperData[0].innerdatahead[0]} alt='err' />{upperData[0].innerdata[0]}</p>
            <p className='upper-div-data'><img className='upper-div-data-icons' src={upperData[0].innerdatahead[1]} alt='err' />{upperData[0].innerdata[1]}</p>
          </div>

          <div className='rightside-upper-div-boxes'>
            <h4 className='rightside-heading'>{upperData[1].heading}</h4>
            <p className='upper-div-data'><img className='upper-div-data-icons' src={upperData[1].innerdatahead[0]} alt='err' />{upperData[1].innerdata[0]}</p>
            <p className='upper-div-data'><img className='upper-div-data-icons' src={upperData[1].innerdatahead[1]} alt='err' />{upperData[1].innerdata[1]}</p>
            <p className='upper-div-data'><img className='upper-div-data-icons' src={upperData[1].innerdatahead[2]} alt='err' />{upperData[1].innerdata[2]}</p>
          </div>

          <div className='rightside-upper-div-boxes'>
            <h4 className='rightside-heading'>{upperData[2].heading}</h4>
            <p className='upper-div-data'><b>{upperData[2].innerdatahead[0]}</b> {upperData[2].innerdata[0]}</p>
            <p className='upper-div-data'><b>{upperData[2].innerdatahead[1]}</b> {upperData[2].innerdata[1]}</p>
            <p className='upper-div-data'><b>{upperData[2].innerdatahead[2]}</b> {upperData[2].innerdata[2]}</p>
          </div>
        </div>

        {/* ------- lower part -------- */}
        <div className='rightside-lower-div'>
          <h4 className='rightside-heading' id='lower-heading'>Watched tags</h4>
          {
            watchTags.map((tag, index) => {
              return <p key={index} className='rightside-lower-tags'>{tag}</p>
            })
          }
        </div>
      </aside>
    </>
  )
}

export default HomeRight