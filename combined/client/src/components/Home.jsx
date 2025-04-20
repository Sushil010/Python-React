import React, { useEffect, useState } from 'react'

const Home = () => {
  
  const [book, setBook] = useState([])
  const [title, setTitle] = useState("")
  const [page,setPage]=useState(0)



  const data_fetch=async()=>{
    
    try{
      const response = await fetch("http://127.0.0.1:8000/books/")
      const data= await response.json()
      setBook(data)
    
    } 
    
    catch (error) {
      console.log(error)
    }
    
    
  }


  const data_post=async(e)=>{

    e.preventDefault()
    const bookData={
      // "field_name_in_backend": value_from_frontend_variable

      title:title,
      pages:page
    }

    try {

      const response=await fetch("http://127.0.0.1:8000/post_books/",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(bookData)
      })

      const data= await response.json()
      // console.log(data)
      setBook((prev)=>[...prev,data])

      setTitle("")
      setPage(0)

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    data_fetch()
  }, [])
  

  return (
    <>
    

    <div className='flex justify-center align-center'>
        
           <div className='text-2xl mt-7 '>
                
                <input
                  onChange={
                    (e)=>{setTitle(e.target.value)}
                  } 
                 className='mr-4 p-1 border border-amber-200' 
                 type="text" 
                 placeholder='Enter name' />
                
                <input 
                onChange={
                  (e)=>{ setPage(e.target.value) }
                } 
                
                className='ml-4 p-1 mr-4 border border-amber-200' 
                type="integer"
                placeholder='Enter Pages' />
                
                <button
                 onClick={data_post}
                 className='cursor-pointer rounded-2xl p-1.5 border border-amber-200'>Submit</button>

              {book.map(function(value,id){
                return <div key={id}>
                    <h4 className='text-yellow-300 mb-2'>Title: {value.title}</h4>
                    <h4 className='text-blue-800 mb-1 '>Pages: {value.pages}</h4>
                    <div>
                    <input className='border p-1 border-amber-200 mb-6' type="text" placeholder='New title..' />
                    <button className='ml-2 border border-green-800 p-1 cursor-pointer active:scale-90'>Update</button>
                    <button className='ml-2 border text-red-600 border-black p-1 cursor-pointer active:scale-90'>Delete</button>
                    </div>
                    
                </div>
              })}

           </div>
        
    </div>

    
    </>
    
  )
}

export default Home