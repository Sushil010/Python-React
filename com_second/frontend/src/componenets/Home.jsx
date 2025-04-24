import React, { useEffect, useState } from 'react'

const Home = () => {

  const[shelf,setShelf]=useState([])
  const [name, setName] = useState("")
  const [date,setDate]=useState()
  const [title, setTitle] = useState("") 
  const [search, setSearch] = useState("")


  const getvalue=async()=>{

    const value= await fetch("http://127.0.0.1:8000/getshelf/")
    const data=await value.json()
    console.log(data)
    setShelf(data)
  }

  const putvalue=async(e)=>{
    e.preventDefault()
    const shelfdata={
      // backend variables:frontend varaibales
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
      setName("")
      setDate("")


    } 
    
    
    catch (error) {
      
      console.log(error)

    }
    
    
  }


  const Deleter=async(pk)=>{

    const value=await fetch(`http://127.0.0.1:8000/getshelf/${pk}/`,{
      method:"DELETE"
    })

    setShelf(
      (prev)=>prev.filter(shelf=>shelf.id!==pk)
    )

  }


  const Updater=async(pk,date)=>{

    const values={
      name:title,
      date:date
    }

    try 
    {
    
     const response= await fetch(`http://127.0.0.1:8000/getshelf/${pk}/`,{

      method: "PUT",
      headers:{

          'Content-Type':'application/json'
      },
      body:JSON.stringify(values),
     })

     const data= await response.json()
     
     setShelf(

      (prev)=>(prev.map((shelf)=>{

        if (shelf.id==pk){  
          return data
        }
        else{
          return shelf
        }
        
      })),
      
      

     )
     setTitle("")

    
    } 
    
    catch (error) {
      console.log(error)
    }

  }

  // const Searcher=async(pk)=>{

  //   try {
  //     const response= await fetch("",{
  //       method: "GET",
  //     })

  //     // const data=response.json()
  //     setShelf(
  //       (prev)=>(prev.filter(shelf=>shelf.id==pk))
  //     )

  //   }
    
    
  //   catch (error) {
  //     console.log(error)
  //   }
    
  // }



  useEffect(() => {
    
    getvalue()
  
  }, [])
  


  return (
    <div className=''>

      <div className='flex justify-center items-center'>
          <input
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}
          className='border text-2xl border-white p-2 mt-5'
           type="text" 
           placeholder='Enter name' />
           
           <button
           
          //  onClick={()=>{Searcher()}} 
           className='border-2 cursor-pointer 
           active:scale-90 ml-2 border-purple-800 text-2xl p-2 mt-5'>
            Search
           </button>
      </div>
        
        <div className=''>

        <input 
        value={name}
        onChange={
          (e)=>{setName(e.target.value)}
        }
        className='border border-black p-1.5 ml-3' 
        type="text" 
        placeholder='Enter Name..'/>
        
        <input 
        value={date}
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

       

          {shelf.filter(
            item=>item.name.toLowerCase().includes(search.toLowerCase())
          )
          
          .map(function(value,idx){
            return <div key={idx} className=''>
                <h4 className='text-yellow-500 text-2xl mt-2 ml-3'>Title: {value.name}</h4>
                <h4 className='text-blue-500 mb-2 text-2xl ml-3'>Released Year:{value.date}</h4>
                
                <input 
                
                className='border border-black ml-3 p-1.5'
                onChange={(e)=>{setTitle(e.target.value)}}
                type="text" 
                placeholder='Updated TItle...' />
                
                
                <button
                
                onClick={()=>{Updater(value.id,value.date)}}
                className='text-green-700  cursor-pointer 
                text-2xl ml-3 p-1.5 active:scale-90 border border-amber-100'>
                
                  Update
                
                  
                </button>

                <button 

                onClick={()=>{Deleter(value.id)}}
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