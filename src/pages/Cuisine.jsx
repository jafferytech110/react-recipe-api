import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import { Link, useParams } from 'react-router-dom'

const Cuisine = () => {

    const [cuisine, setCuisine] = useState([])
    let params = useParams()
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=41f64e89638741be8bc0743a88e7e749&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
    }

    useEffect(()=>{
        getCuisine(params.type)
    },[params.type])
  return (
    <Grid>
      {cuisine.map(item => {
          return(
            <Card key={item.id}>
                <Link to={"/item/" + item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </Link>
            </Card>
          )
      })}
    </Grid>
  )
}

const Grid = styled.div`
    width: 80%;
    display:flex;
    flex-wrap:wrap;
    gap:4rem;
    margin: 0 auto;
    justify-content: center;
`
const Card = styled.div`
    width: 300px;
    height: 250px;

    img{
        width:100%;
    }
    a{
        text-decoration:none;
    }
    h4{
        font-size: 0.8rem;
        padding:1rem;
        text-align:center;
    }
`


export default Cuisine