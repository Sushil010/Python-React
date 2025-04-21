import React from 'react'

const Home = () => {
  return (
    <div className=''>
        
        <div className=''>

        <input className='border border-black p-1.5 ml-3' type="text" placeholder='Enter Name..'/>
        <input className='border border-black ml-3 p-1.5' type="text" placeholder='Enter Date...' />
        
        <button className='border active:scale-90 cursor-pointer ml-3 border-white text-yellow-400 text-2xl p-1'>
          Submit
        </button>
        
        

        </div>
        
      
    
    </div>
  )
}

export default Home