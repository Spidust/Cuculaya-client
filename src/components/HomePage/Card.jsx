import React from 'react'

const Card = (props) => {
  return (
    <div className='card lg-w-fit h-fit p-8 bg-stone-900 text-white text-center md-w-full'>
        <img src={props.image} alt="image" className="img" />

        <h2 className='title text-2xl font-bold mt-4'>{props.title}</h2>

        <p className="text wrap" style={{overflowWrap: "break-word", inlineSize: "250px"}}>{props.text}</p>

        <div className='mt-4'></div>
        <a href={props.link} className="redirect px-4 py-2 bg-stone-300 text-black mt-8">{props.redirectTitle}</a>
    </div>
  )
}

export default Card