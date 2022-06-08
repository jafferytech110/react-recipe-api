import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Recipe = () => {

    const [details,setDetails] = useState()

    let params = useParams()

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=41f64e89638741be8bc0743a88e7e749`)
        const detailData = await data.json()
        setDetails(detailData)
    }

    useEffect(()=>{
        fetchDetails()
    },[params.name])

    return (
    <div>
      {details.title}
    </div>
  )
}

export default Recipe
