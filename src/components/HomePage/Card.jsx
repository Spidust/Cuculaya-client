import React from 'react'

const Card = (props) => {
  return (
    <div className='card lg:w-3/12 md:w-3/12 sm:w-full h-fit px-4 py-8 bg-zinc-800 text-white text-center rounded-lg border border-orange-100'>
        <img src={props.image} alt="image" className="img w-full" />

        <h2 className='title text-2xl font-bold mt-4 mx-auto'>{props.title}</h2>

        <p className="text wrap mx-auto" style={{overflowWrap: "break-word", inlineSize: "250px"}}>{props.text}</p>

        <div className='mt-4'></div>
        <a href={props.link} className="redirect px-4 py-2 bg-stone-300 text-black mt-8">{props.redirectTitle}</a>

    </div>
  )
}

export default Card