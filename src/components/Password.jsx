import React, { useEffect, useState } from 'react'


function Password() {
    
    
    // let length=6


    const [password1, setpassword1] = useState(" ")
    const [lenn, setlenn] = useState(8)
    const [numallowed, setnumallowed] = useState(false)
    const [symbolallowed, setsymbolallowed] = useState(false)
    const click = () => {
        let str = "abcdefghijklmnopqrstuvwxyz"
        if (numallowed) str+= "1234567890"
        if (symbolallowed) str+= "!@#$%&*-_+=[]~`"
        
        
        let password = ""
        
        for (let i = 0; i < lenn; i++) {
            let rand = Math.floor(Math.random() * str.length)
            password += str.substring(rand, rand + 1)
            console.log(rand, rand + 1)


        }
        setpassword1(password)
        



    }
    useEffect(() => {
        click()
    }, [lenn,symbolallowed,numallowed,Password])

    return (
        <div className=' w-full h-screen bg-slate-500 '>
            <div className=" flex-col justify-center text-center">
                <div className="heading">
                    <h1 className=' text-white text-xl'>Password generator</h1>
                </div>
                <div className="input">
                    <input className='text-center text-red-500 font-bold text-xl h-14 '
                        type="text"
                        name=""
                        id=""
                        userselect="none"
                        value={password1}
                        readOnly

                    />
                    <button className=' bg-blue-500 text-white text-xl h-14 p-3'>copy</button>
                </div>
               
                     
                     <div className="param text-white">
                    <input
                        type="range"
                        min={8}
                        max={15}
                        id="range"
                        value={lenn}
                        onChange={(e) => { setlenn(e.target.value) }}
                    />
                    <label htmlFor="range" className=' text-yellow-400'>length {lenn}</label>
                    <div className="symbol text-white">
                    <input
                        type="checkbox"

                        name=""
                        id="char"
                        defaultChecked={symbolallowed}
                        onChange={() => {
                            setsymbolallowed((prev) => !prev)
                          }}


                    />
                    <label htmlFor="char">symbol allowed</label>
                </div>
              
                </div>
                
                
                <div className="num text-white">
                    <input
                        type="checkbox"
                        name=""
                        id="num"
                        defaultChecked={numallowed}
                        onChange={() => {
                            setnumallowed((prev) => !prev)
                          }}

                    />
                    <label htmlFor="num">Number allowed</label>
                </div>
                <div className="btn">
                    <button className='  border-pink-100 bg-yellow-200 mt-4 rounded-md p-2' onClick={click}>genrate</button>
                </div>
            </div>
        </div>
    )
}

export default Password