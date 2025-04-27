import React, { useEffect, useState } from 'react'

const Home = () => {

    const [dat, setDat] = useState({})
    useEffect(() => {
    
    datas()
     
    }, [])
    
    const datas=async()=>{
        const response =await fetch (" http://www.omdbapi.com/?i=tt3896198&apikey=48c44e9e")
        const values= await response.json()
        console.log(values)
        setDat(values)
    }


  return (
    <div className=' text-white text-2xl w-full h-[100vh] bg-gray-700'>

   
    {/* <button
    onClick={datas}
    className='p-1.5 mx-1 my-5 border border-black text-green-500 cursor-pointer active:scale-90'
    >
        Click
    </button> */}


    {/* {dat.map(function(value,idx){
        return <div key={idx}>
            <img src="" alt="" />
            <h1>{value.Title}</h1>
        </div>
    })
    
    
    } */}


    {dat.Title && (
        <div>
            <img src={dat.Poster} alt="" />
            <h4>{dat.Title}</h4>
            
            {dat.Ratings && dat.Ratings.map(function(values,idx){
                return <div key={idx}>
                        <h5>{values.Source}:{values.Value}</h5>
                </div>
            })}
        </div>
    )}



    </div>
  )
}

export default Home