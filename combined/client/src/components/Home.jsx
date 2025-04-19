import React from 'react'

const Home = () => {
  return (
    <>
    
    <div className='flex justify-center align-center'>
        
           <div className='text-2xl mt-7 '>
                
                <input className='mr-4 p-1 border border-amber-200' type="text" placeholder='Enter name' />
                <input className='ml-4 p-1 mr-4 border border-amber-200' type="integer" placeholder='Enter date' />
                <button className='cursor-pointer rounded-2xl p-1.5 border border-amber-200'>Submit</button>

           </div>
        
    </div>

    
    </>
    
  )
}

export default Home