import './Card.css'

import React, { useState } from 'react'

export default function Card() {
    const [text, setText] = useState('')
    const [id, setID]     = useState(0)

    const handleClick = async () => {
        try {
            const request  = await fetch('https://api.adviceslip.com/advice')
            const response = await request.json()

            setID(response.slip.id)
            setText(response.slip.advice)
        }catch (err) {
            alert('Sorry, something is wrong :( ')
        }
    }
    return (
       
        <div className='card'>
            <span className='id'>ADVICE #{id}</span>

            <div className='content__text'>
                <p>"{(text)? text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.'}"</p>
            </div>

            <div className='divider'></div>

            <button onClick={handleClick}></button>
        </div>
    )
}