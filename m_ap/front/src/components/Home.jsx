import React, { useState } from 'react'

const Home = () => {


    const datas=async()=>{
        const response =await fetch (" http://www.omdbapi.com/?i=tt3896198&apikey=48c44e9e")
        const values= await response.json()
        console.log(values)
    }


  return (
    <div className=' text-white text-2xl w-full h-[100vh] bg-gray-700'>

   
    <button
    onClick={datas}
    className='p-1.5 mx-1 my-5 border border-black text-green-500 cursor-pointer active:scale-90'
    >
        Click
    </button>

    </div>
  )
}

export default Home