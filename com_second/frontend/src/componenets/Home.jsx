import React, { useEffect, useState } from 'react'

const Home = () => {

  const[shelf,setShelf]=useState([])
  const [name, setName] = useState("")
  const [date,setDate]=useState()


  const getvalue=async()=>{

    const value= await fetch("http://127.0.0.1:8000/getshelf/")
    const data=await value.json()
    console.log(data)
    setShelf(data)
  }

  useEffect(() => {
    
    getvalue()
  
  }, [])
  


  return (
    <div className=''>
        
        <div className=''>

        <input 
        onChange={
          (e)=>{setName(e.target.value)}
        }
        className='border border-black p-1.5 ml-3' 
        type="text" 
        placeholder='Enter Name..'/>
        
        <input 
        onChange={
          (e)=>{setDate(e.target.value)}
        }
        className='border border-black ml-3 p-1.5' 
        type="text"
        placeholder='Enter Date...' />
        


        <button 
        className='border active:scale-90 cursor-pointer ml-3
         border-white text-yellow-400 text-2xl p-1'>
          Submit
        </button>

       

          {shelf.map(function(value,idx){
            return <div key={idx} className=''>
                <h4 className='text-yellow-500 ml-3'>Title: {value.name}</h4>
                <h4 className='text-blue-500 mb-2 ml-3'>Released Year:{value.date}</h4>
            </div>
          })}
        
        
        

        </div>
        
      
    
    </div>
  )
}

export default Home