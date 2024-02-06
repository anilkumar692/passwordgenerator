import React, { useState, useCallback,useEffect } from 'react'

function Passwordgen() {
  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")
  const generate = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "012345789"
    if (charallowed) str += "!@#$%&*-_+=[]~`"
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      setpassword(pass)

    }
  }, [length, numberallowed, charallowed, setpassword])
  useEffect(()=>{
    generate()
  },[length,numberallowed,charallowed,Passwordgen])
  

  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-400'>
        <h1 className=' text-white text-center my-3'>password generator</h1>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={password}
            className=' outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />
          <button className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className=' flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              min={6}
              type='range'
              max={100}
              value={length}
              className=' cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label htmlFor="">length:{length}</label>
          </div>
          <div className=' flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id='numberinput'
              onChange={() => {
                setnumberallowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberinput">Numbers</label>
          </div>
          <div className=' flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id='charinput'
              onChange={() => {
                setcharallowed((prev) => !prev)
              }}
            />
            <label htmlFor="charinput">Characters</label>
          </div>
        </div>
      </div>
    </>

  )
}

export default Passwordgen