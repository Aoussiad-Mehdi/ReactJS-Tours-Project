import React,{useState, useEffect} from 'react'
import { Loading } from './loading'
import {Tours} from './Tours'


export const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([])

  const url = 'https://course-api.com/react-tours-project'

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchData = async ()=>{
    try{
      const response = await fetch(url)
      const toursData = await response.json()
      setLoading(false)
      setTours(toursData)
      console.log(tours)
    }catch(err){
      setLoading(false)
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])


  if(loading){
    return(
      <div className="container">
        <Loading />
      </div>
    )
  }else if(!loading && tours.length === 0){
    return(
      <div className="container">
        <h2>No Tours Left</h2>
        <button className="refresh" onClick={()=>{
          setLoading(true)
          fetchData()
        }}>Refresh</button>
      </div>
    )
  }
  return (
    <>
      <h1>Our Tours</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  )

}
