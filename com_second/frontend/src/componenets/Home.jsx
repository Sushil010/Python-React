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

  const putvalue=async()=>{

    const shelfdata={
      // frontend variables:backend varaibales
      // name:name,
      // date:date
      name,
      date
    }

    try {

      const dpost = await fetch ("http://127.0.0.1:8000/postshelf/",{

        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(shelfdata)
      })

      const data=await dpost.json()
      setShelf((prev)=>[...prev,data])


    } 
    
    
    catch (error) {
      
      console.log(error)

    }
    
    
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
        onClick={putvalue}
        className='border active:scale-90 cursor-pointer ml-3
         border-white text-yellow-400 text-2xl p-1'>
          Submit
        </button>

       

          {shelf.map(function(value,idx){
            return <div key={idx} className=''>
                <h4 className='text-yellow-500 text-2xl mt-2 ml-3'>Title: {value.name}</h4>
                <h4 className='text-blue-500 mb-2 text-2xl ml-3'>Released Year:{value.date}</h4>
                <button 
                className='text-red-600  cursor-pointer 
                text-2xl ml-3 p-1.5 active:scale-90 border border-amber-100'>
                  Delete
                </button>
                <hr className='border-b border-gray-300 my-4' />
            </div>
          })}
        
        
        

        </div>
        
      
    
    </div>
  )
}

export default Home