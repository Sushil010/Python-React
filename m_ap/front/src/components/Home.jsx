import React, { useEffect, useState } from 'react'

const Home = () => {
    // const apiKey="48c44e9e"
    const [dat, setDat] = useState([])
    useEffect(() => {
    
    datas()
     
    }, [])
    // http://www.omdbapi.com/?s=Batman&page=2
    // http://www.omdbapi.com/?s=batman&page=2&apikey=yourkey
    
    const datas=async()=>{
        const response =await fetch ("http://www.omdbapi.com/?s=batman&page=2&apikey=48c44e9e")
        const values= await response.json()
        console.log(values)
        setDat(values.Search)
    }


  return (
    <div className=' text-white text-2xl w-full h-full bg-gray-700'>

    <div>
        
    </div>
   
    

{/* 
    {dat.map(function(value,idx){
        return <div key={idx}>
            <img src="" alt="" />
            <h1>{value.Title}</h1>
        </div>
    })
    
    
    } */}


    {/* {dat.Title && (
        <div>
            <img src={dat.Poster} alt="" />
            <h4>{dat.Title}</h4>
            
            {dat.Ratings && dat.Ratings.map(function(values,idx){
                return <div key={idx}>
                        <h5>{values.Source}:{values.Value}</h5>
                </div>
            })}
        </div>
    )} */}


    {dat.map(function(value,index){
        return <div key={index}>
            <img src="" alt="" />
            <h5>
                {value.Title}:{value.Year}
            </h5>

        </div>
    })}



    </div>
  )
}

export default Home