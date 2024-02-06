import React, { useState } from 'react'
import '../styles/ColorChanger.css'


function ColorChanger() {
    const [color, setcolor] = useState({
        backgroundColor: "cyan"
    })


    const click = (event) => {
        setcolor({ backgroundColor: event.target.value })

    }
    return (
        <>
            <div className='pallate' style={color}>
                <div className="buttonbox">
                    <button className='button bg-red-500' value="red" onClick={click} >red</button>
                    <button className='button bg-green-500' value="green" onClick={click} >green</button>
                    <button className='button  bg-blue-500' value="blue" onClick={click}>blue</button>
                    <button className='button  bg-yellow-500' value="yellow" onClick={click}>yellow</button>
                    <button className='button  bg-pink-500' value="pink" onClick={click} >pink</button>
                    <button className='button   bg-purple-500' value="purple" onClick={click}>purple</button>
                </div>
            </div>

        </>

    )
}

export default ColorChanger