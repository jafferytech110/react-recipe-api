import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Searched = () => {

    const [searched, setSearched] = useState([])
    let params = useParams()

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=41f64e89638741be8bc0743a88e7e749&query=${name}`)
        const recipes = await data.json()
        setSearched(recipes.results)
    }

    useEffect(()=>{
        getSearched(params.search)
    },[params.search])

  return (
    <div>
      <Grid>
          {searched.map(item=>{
              return(
                  <Card key={item.id}>
                      <img src={item.image} alt={item.title} />
                      <h4>{item.title}</h4>
                  </Card>
              )
          })}
      </Grid>
    </div>
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

export default Searched
