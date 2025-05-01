import React, { useEffect, useState } from 'react'
import Loadercomp from './Loadercomp'


const Home = () => {
    // const apiKey="48c44e9e"
    const [dat, setDat] = useState([])
    const [search, setSearch] = useState("")
    const [loader, setLoader] = useState(false)
    
    useEffect(() => {
    if(search.trim()!=""){
        datas()
    }
    
     
    }, [search])


    // http://www.omdbapi.com/?s=Batman&page=2
    // http://www.omdbapi.com/?s=batman&page=2&apikey=yourkey
    
    const datas=async()=>{
        setLoader(true)
        try {
            const response =await fetch (`http://www.omdbapi.com/?s=${search}&page=2&apikey=48c44e9e`)
            const values= await response.json()
            console.log(values)
            setDat(values.Search)
        } catch (error) {
            console.log(error)
            setDat([])
        }finally{
            setLoader(false)
        }
        
    }


  return (
    <div className=' text-white text-2xl w-full h-full bg-gray-700'>

    <div className='flex justify-center items-center'>
        <input 
        onChange={(e)=>{setSearch(e.target.value)}}
        
        type="text" 
        placeholder='Search Movies'
        className='my-5 border-green-400 border p-3 '
        
        />
    </div>
   
    
    {loader?(
        <div className='text-center text-xl py-10'>
            <Loadercomp/>
        </div>
        ): (
        <div  className='grid grid-cols-3'>
        {dat?.map(function(value,index){
            return <div className='flex flex-col text-center p-4 rounded-2xl items-center justify-center mb-3'
            key={index}>
                
                <img src={value.Poster} alt={value.Title} />
                <h5>
                    {value.Title}<br/>
                    {value.Year}
                </h5>

            </div>
        })}

    </div>
        )
    }
   
 



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

        {/* <div  className='grid grid-cols-3'>
    {dat.
    filter(item=>item.Title.toLowerCase().includes(search.toLowerCase()))
    .map(function(value,index){
        return <div className='flex flex-col text-center p-4 rounded-2xl items-center justify-center mb-3'
         key={index}>
            
            <img src={value.Poster} alt={value.Title} />
            <h5>
                {value.Title}<br/>
                {value.Year}
            </h5>

        </div>
    })}

        </div>
 */}


    </div>
  )
}

export default Home